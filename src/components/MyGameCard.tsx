'use client';

import { useState } from 'react';
import { Play, MoreHorizontal, Edit3, UploadCloud, Trash2, Lock, Globe } from 'lucide-react';
import Image from 'next/image';

interface MyGameCardProps {
  title: string;
  imageSrc?: string;
  author?: string;
  date?: string;
  status?: 'private' | 'published';
}

export default function MyGameCard({ 
  title, 
  imageSrc, 
  author, 
  date,
  status = 'private'
}: MyGameCardProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [publishStep, setPublishStep] = useState<'confirm' | 'success'>('confirm');

    // Hardcoded logic from 'library-elegant-rounded' variant in GameCard.tsx
    // Also including requested changes like removing border etc.

    const bgRoundClass = '';
    const glowRoundClass = 'rounded-lg';
    const hoverEffectClass = 'hover:-translate-y-1 hover:rotate-1';
    const aspectRatioClass = 'aspect-square';
    const imageRoundedClass = '';
    const shadowClass = 'shadow-[0_2px_2px_#CAEBFF] group-hover:shadow-[0_4px_4px_#CAEBFF]';

    return (
      <div className={`relative group perspective-[1000px] ${hoverEffectClass}`}>
        
        <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
            
            {/* FRONT FACE */}
            <div className={`relative bg-white [backface-visibility:hidden] overflow-visible flex flex-col items-center ${shadowClass} p-5 pb-4 transition-all duration-500`}>
                
                {/* Soft Blue Glow Behind (Front Only) */}
                <div className={`absolute -z-10 -inset-0.5 bg-gradient-to-b from-blue-50 to-indigo-100 blur-sm opacity-50 group-hover:opacity-100 transition duration-500 ${glowRoundClass}`}></div>

                {/* Image Container */}
                <div className={`relative w-full ${aspectRatioClass} ${imageRoundedClass} overflow-hidden bg-slate-50 mb-4 shadow-inner border border-slate-100 ${!imageSrc && 'flex items-center justify-center'}`}>
                    {/* Status Badge */}
                    <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-white/90 backdrop-blur-md rounded-md flex items-center gap-1.5 border border-white/50 shadow-sm pointer-events-none">
                        {status === 'private' ? (
                            <>
                                <Lock size={10} className="text-[#818CF8]" />
                                <span className="text-[10px] font-bold text-[#818CF8] leading-none">私有</span>
                            </>
                        ) : (
                            <>
                                <Globe size={10} className="text-emerald-500" />
                                <span className="text-[10px] font-bold text-emerald-500 leading-none">已发布</span>
                            </>
                        )}
                    </div>

                    {imageSrc ? (
                        <Image src={imageSrc} alt={title} fill className={`object-cover opacity-100 transition-transform duration-700`} unoptimized />
                    ) : (
                        <div className="text-slate-300 font-serif italic text-xs">No Image</div>
                    )}
                    
                    {/* Overlay & Play Button Logic (Style D) */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-orange-500/10 opacity-30 pointer-events-none mix-blend-overlay"></div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#818cf8] shadow-xl scale-90 group-hover:scale-100 transition-all cursor-pointer">
                            <Play fill="currentColor" size={24} className="ml-1" />
                        </div>
                     </div>
                </div>

                {/* Content Area - Clean Layout */}
                <div className="w-full flex flex-col relative px-1"> 
                     
                     <div className="flex justify-between items-baseline mb-1">
                          <h3 className="font-medium text-lg text-[#818cf8] tracking-tight leading-tight truncate">
                            {title}
                          </h3>
                          <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest shrink-0 ml-2">
                            {date || 'NOW'}
                          </span>
                     </div>

                     <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-400 font-normal">
                              {author || 'Unknown Artist'}
                          </span>
                     </div>

                     {/* Action Row */}
                     <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 text-[#818CF8] rounded-lg transition-colors group/btn">
                                <Edit3 size={12} strokeWidth={2.5} />
                                <span className="text-xs font-bold">编辑</span>
                            </button>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsFlipped(true); // Flip on click
                                }}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-[#818CF8] rounded-lg transition-colors group/btn"
                            >
                                <UploadCloud size={12} strokeWidth={2.5} className="group-hover/btn:animate-bounce" />
                                <span className="text-xs font-bold">发布</span>
                            </button>
                        </div>

                        {/* Dropdown Trigger */}
                        <div className="relative">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsMenuOpen(!isMenuOpen);
                                }}
                                onBlur={() => setTimeout(() => setIsMenuOpen(false), 200)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <MoreHorizontal size={16} />
                            </button>

                            {/* Dropdown Menu */}
                            {isMenuOpen && (
                                <div className="absolute bottom-full right-0 mb-2 w-24 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 origin-bottom-right">
                                    <button className="w-full flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-50 text-[10px] font-bold transition-colors text-left hover:text-red-500">
                                        <Trash2 size={12} />
                                        删除
                                    </button>
                                </div>
                            )}
                        </div>
                     </div>
                </div>
            </div>

            {/* BACK FACE */}
            <div className={`absolute inset-0 h-full w-full bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] border border-indigo-50 flex flex-col items-center justify-center p-6 text-center ${shadowClass}`}>
                 {publishStep === 'confirm' ? (
                     <>
                        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                            <UploadCloud size={32} className="text-[#818CF8]" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-700 mb-2">确认发布?</h3>
                        <p className="text-xs text-slate-400 mb-6 leading-relaxed">发布后游戏将对所有玩家可见。</p>
                        <div className="flex gap-2 w-full">
                            <button 
                                onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }} 
                                className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-xs font-bold transition-colors"
                            >
                                取消
                            </button>
                            <button 
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    setPublishStep('success');
                                    setTimeout(() => {
                                        setIsFlipped(false);
                                        setTimeout(() => setPublishStep('confirm'), 700);
                                    }, 2000);
                                }}
                                className="flex-1 py-2 bg-[#818CF8] hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-colors shadow-md"
                            >
                                确认
                            </button>
                        </div>
                     </>
                 ) : (
                     <>
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 animate-bounce">
                            <Globe size={32} className="text-emerald-500" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-700 mb-2">发布成功!</h3>
                        <p className="text-xs text-slate-400 mb-6 leading-relaxed">您的游戏现在已公开。<br/>即将返回...</p>
                     </>
                 )}
            </div>

        </div>
      </div>
    );
}
