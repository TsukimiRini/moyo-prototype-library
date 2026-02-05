'use client';

import { Calendar, MessageSquareQuote, Verified } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface AuthorNoteProps {
    authorName?: string;
    role?: string;
    avatarTxt?: string;
    date?: string;
    content: string;
}

export default function AuthorNote({
    authorName = "Antigravity",
    role = "Lead Developer",
    avatarTxt = "AG",
    date = "2026-02-05",
    content
}: AuthorNoteProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    
    // Split content and duplicate for endless loop
    const paragraphs = content.split('\n').filter(p => p.trim() !== '');

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;
        let lastTime = 0;
        const speed = 30; // pixels per second (approx) - slow read speed

        const scroll = (timestamp: number) => {
            if (!lastTime) lastTime = timestamp;
            const deltaTime = timestamp - lastTime;
            
            if (!isPaused && deltaTime >= 16) { // ~60fps cap
                // Scroll logic
                if (container.scrollTop >= container.scrollHeight / 2) {
                     // reset to top half seamlessly
                     container.scrollTop = 0; 
                     // Adjust for precision if needed, but 0 usually works if halves are identical
                } else {
                    container.scrollTop += 0.5; // Speed factor
                }
                lastTime = timestamp;
            } else if (isPaused) {
                lastTime = timestamp; // Keep time sync so it doesn't jump
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <div 
            className="bg-white rounded-[24px] w-full h-full shadow-[0_4px_20px_rgba(230,235,255,0.6)] border border-white/60 overflow-hidden flex flex-col relative group"
        >
            {/* Header / Meta */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/30 shrink-0 z-20 relative backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-white">
                        {avatarTxt}
                    </div>
                    
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-800 text-sm">{authorName}</span>
                            <Verified size={14} className="text-blue-500" />
                        </div>
                        <span className="text-xs text-slate-400 font-medium">{role}</span>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white px-2 py-1 rounded-full border border-slate-100 shadow-sm">
                    <Calendar size={12} />
                    <span>{date}</span>
                </div>
            </div>

            {/* Scrolling Area */}
            <div className="relative flex-1 overflow-hidden">
                 {/* Decorative Icon */}
                 <div className="absolute top-4 right-6 text-slate-100 -z-0 pointer-events-none">
                    <MessageSquareQuote size={60} strokeWidth={1} style={{ transform: 'rotate(10deg)' }} />
                 </div>
                 
                 {/* Gradient Masks */}
                 <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                 <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

                 {/* 
                    Container: overflow-y-auto allows manual scroll. 
                    We remove scrollbar visually but allow interaction.
                 */}
                 <div 
                    ref={scrollContainerRef}
                    className="h-full overflow-y-auto p-6 space-y-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)} // Resume after touch? Or keep paused? Usually resume.
                 >
                    {/* Content Block 1 */}
                    <div className="space-y-4">
                        {paragraphs.map((p, idx) => (
                            <p key={`1-${idx}`} className="text-slate-600 leading-relaxed text-sm">
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* Divider / Spacer if needed */}
                    <div className="h-8" /> 

                    {/* Content Block 2 (Duplicate) */}
                    <div className="space-y-4">
                        {paragraphs.map((p, idx) => (
                            <p key={`2-${idx}`} className="text-slate-600 leading-relaxed text-sm">
                                {p}
                            </p>
                        ))}
                    </div>
                 </div>
            </div>
        </div>
    );
}
