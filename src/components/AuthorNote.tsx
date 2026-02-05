'use client';

import { Calendar, MessageSquareQuote, Verified } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface AuthorNoteProps {
    authorName?: string;
    role?: string;
    avatarTxt?: string;
    date?: string;
    content: string;
    variant?: 'modern' | 'journal' | 'aurora'; // Added aurora
}

export default function AuthorNote({
    authorName = "Antigravity",
    role = "Lead Developer",
    avatarTxt = "AG",
    date = "2026-02-05",
    content,
    variant = 'aurora' // Texting Aurora style
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

    // --- VARIANT STYLES ---
    const isJournal = variant === 'journal';
    const isAurora = variant === 'aurora';

    // Container Styles
    let containerClasses = "bg-white rounded-[24px] w-full h-full shadow-[0_4px_20px_rgba(230,235,255,0.6)] border border-white/60 overflow-hidden flex flex-col relative group";
    if (isJournal) {
        containerClasses = "bg-white rounded-[2px] w-full h-full shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-200 relative flex flex-col group rotate-[-0.5deg] hover:rotate-0 transition-transform duration-500 origin-top";
    } else if (isAurora) {
        containerClasses = "bg-[#0f172a] rounded-[24px] w-full h-full shadow-[0_8px_32px_rgba(30,27,75,0.5)] border border-white/10 relative flex flex-col group overflow-hidden";
    }

    // Header Styles
    let headerClasses = "px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/30 shrink-0 z-20 relative backdrop-blur-sm";
    if (isJournal) {
        headerClasses = "px-6 py-4 flex items-center justify-between border-b border-dashed border-slate-200 bg-transparent shrink-0 z-20 relative";
    } else if (isAurora) {
        headerClasses = "px-6 py-4 flex items-center justify-between border-b border-white/5 bg-white/5 shrink-0 z-20 relative backdrop-blur-md";
    }

    // Text Styles
    let textClasses = "text-slate-600 leading-relaxed text-sm";
    if (isJournal) {
        textClasses = "text-slate-700 leading-loose text-[15px] font-['KaiTi','STKaiti','楷体','Songti_SC','serif'] tracking-wide";
    } else if (isAurora) {
        textClasses = "text-indigo-100/90 leading-relaxed text-sm font-sans font-light tracking-wide shadow-black/10 drop-shadow-sm";
    }

    return (
        <div className={containerClasses}>
            {/* Journal Decoration: "Clear Tape" */}
            {isJournal && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-slate-100/50 rotate-[1.5deg] backdrop-blur-[2px] shadow-sm z-30 pointer-events-none border-l border-r border-white/60" />
            )}
            
            {/* Aurora Decoration: Glowing Blobs */}
            {isAurora && (
                <>
                    {/* Blob 1 */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
                    {/* Blob 2 */}
                    <div className="absolute top-1/2 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                    {/* Blob 3 */}
                    <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    {/* Mesh Overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
                </>
            )}

            {/* Header / Meta */}
            <div className={headerClasses}>
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-2 shrink-0
                        ${isJournal ? 'ring-slate-100 bg-slate-400 text-white' : ''}
                        ${isAurora ? 'ring-white/20 bg-indigo-500/80 text-white shadow-indigo-900/50' : ''}
                        ${!isJournal && !isAurora ? 'ring-white bg-gradient-to-br from-indigo-500 to-purple-600 text-white' : ''}
                    `}>
                        {avatarTxt}
                    </div>
                    
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                            <span className={`font-bold text-sm 
                                ${isJournal ? 'text-slate-700 font-["KaiTi","STKaiti","楷体","serif"]' : ''}
                                ${isAurora ? 'text-white' : ''}
                                ${!isJournal && !isAurora ? 'text-slate-800' : ''}
                            `}>
                                {authorName}
                            </span>
                            <Verified size={14} className={isJournal ? "text-slate-400" : isAurora ? "text-cyan-400" : "text-blue-500"} />
                        </div>
                        <span className={`text-xs font-medium ${isAurora ? 'text-indigo-300' : 'text-slate-400'}`}>{role}</span>
                    </div>
                </div>

                <div className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full border shadow-sm
                    ${isJournal ? 'bg-slate-50 border-slate-100 text-slate-400' : ''}
                    ${isAurora ? 'bg-white/10 border-white/10 text-indigo-200' : ''}
                    ${!isJournal && !isAurora ? 'bg-white border-slate-100 text-slate-400' : ''}
                `}>
                    <Calendar size={12} />
                    <span>{date}</span>
                </div>
            </div>

            {/* Scrolling Area */}
            <div className="relative flex-1 overflow-hidden">
                 {/* Decorative Icon */}
                 {!isJournal && !isAurora && (
                     <div className="absolute top-4 right-6 text-slate-100 -z-0 pointer-events-none">
                        <MessageSquareQuote size={60} strokeWidth={1} style={{ transform: 'rotate(10deg)' }} />
                     </div>
                 )}
                 {isJournal && (
                     <div className="absolute top-4 right-6 text-slate-100 -z-0 pointer-events-none opacity-60">
                        <span className="text-6xl font-serif">“</span>
                     </div>
                 )}
                 {isAurora && (
                      <div className="absolute top-6 right-8 text-white/5 -z-0 pointer-events-none">
                        <MessageSquareQuote size={80} strokeWidth={0.5} style={{ transform: 'rotate(-5deg)' }} />
                     </div>
                 )}
                 
                 {/* Gradient Masks */}
                 <div className={`absolute top-0 left-0 right-0 h-6 z-10 pointer-events-none 
                    ${isJournal ? 'bg-gradient-to-b from-white to-transparent' : ''}
                    ${isAurora ? 'bg-gradient-to-b from-[#0f172a] to-transparent' : ''}
                    ${!isJournal && !isAurora ? 'bg-gradient-to-b from-white to-transparent' : ''}
                 `} />
                 <div className={`absolute bottom-0 left-0 right-0 h-6 z-10 pointer-events-none 
                    ${isJournal ? 'bg-gradient-to-t from-white to-transparent' : ''}
                    ${isAurora ? 'bg-gradient-to-t from-[#0f172a] to-transparent' : ''}
                    ${!isJournal && !isAurora ? 'bg-gradient-to-t from-white to-transparent' : ''}
                 `} />

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
                            <p key={idx} className={textClasses}>
                                {p}
                            </p>
                        ))}
                    </div>
                    
                    {/* Signature for Journal? */}
                    {isJournal && (
                         <div className="mt-8 pt-4 border-t border-dashed border-[#e8e4d0] font-[cursive] text-slate-400 text-right pr-4">
                            ~ &nbsp; {authorName} &nbsp; ✍️
                         </div>
                    )}

                    <div className="h-4" />
                 </div>
            </div>
        </div>
    );
}
