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
    const isPausedRef = useRef(false);
    
    // Process content into paragraphs - No duplication
    const paragraphs = content.split('\n').filter(p => p.trim() !== '');

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;
        
        let phase: 'SCROLL_DOWN' | 'WAIT_BOTTOM' | 'SCROLL_UP' | 'WAIT_TOP' = 'WAIT_TOP';
        let waitStartTime = 0;
        
        const WAIT_TIME_BOTTOM = 2000;
        const WAIT_TIME_TOP = 2000;
        const SCROLL_SPEED_DOWN = 0.5;
        const SCROLL_SPEED_UP = 2.0;

        waitStartTime = performance.now();

        const loop = (timestamp: number) => {
            if (isPausedRef.current) {
                waitStartTime += 16; 
                animationFrameId = requestAnimationFrame(loop);
                return;
            }

            if (container.scrollHeight <= container.clientHeight) {
                 animationFrameId = requestAnimationFrame(loop);
                 return;
            }

            switch (phase) {
                case 'SCROLL_DOWN':
                    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 1) {
                         phase = 'WAIT_BOTTOM';
                         waitStartTime = timestamp;
                    } else {
                        container.scrollTop += SCROLL_SPEED_DOWN;
                    }
                    break;

                case 'WAIT_BOTTOM':
                    if (timestamp - waitStartTime >= WAIT_TIME_BOTTOM) {
                        phase = 'SCROLL_UP';
                    }
                    break;
                
                case 'SCROLL_UP':
                    if (container.scrollTop <= 0) {
                        container.scrollTop = 0;
                        phase = 'WAIT_TOP';
                        waitStartTime = timestamp;
                    } else {
                        container.scrollTop -= SCROLL_SPEED_UP;
                    }
                    break;

                 case 'WAIT_TOP':
                    if (timestamp - waitStartTime >= WAIT_TIME_TOP) {
                        phase = 'SCROLL_DOWN';
                    }
                    break;
            }

            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(animationFrameId);
    }, [paragraphs.length]); 

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
                    Container
                 */}
                 <div 
                    ref={scrollContainerRef}
                    className="h-full overflow-y-auto p-6 space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    onMouseEnter={() => { isPausedRef.current = true; }}
                    onMouseLeave={() => { isPausedRef.current = false; }}
                    onTouchStart={() => { isPausedRef.current = true; }}
                    onTouchEnd={() => { isPausedRef.current = false; }} 
                 >
                    <div className="space-y-4">
                        {paragraphs.map((p, idx) => (
                            <p key={idx} className="text-slate-600 leading-relaxed text-sm">
                                {p}
                            </p>
                        ))}
                    </div>
                    {/* Add some padding at bottom so the text 'ends' nicely before scrolling back */}
                    <div className="h-4" />
                 </div>
            </div>
        </div>
    );
}
