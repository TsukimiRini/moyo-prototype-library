'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Bell, Info, Star, AlertCircle, ChevronUp, ChevronDown } from 'lucide-react';

const NOTICES = [
  { id: 1, text: "系统将于今晚2:00进行即时维护，请注意保存进度。", tag: "维护", type: "alert" as const },
  { id: 2, text: "新游《高岭之花》第一章现已上线，欢迎体验！", tag: "上新", type: "new" as const },
  { id: 3, text: "社区活动：分享你的游戏存档，赢取限定勋章。", tag: "活动", type: "event" as const },
  { id: 4, text: "关于部分用户无法登录的修复公告 - 已解决", tag: "修复", type: "fix" as const },
  { id: 5, text: "创作工具更新：新增自定义变量功能。", tag: "更新", type: "info" as const },
  { id: 6, text: "欢迎加群交流反馈：12345678", tag: "社区", type: "community" as const },
  { id: 7, text: "下周即将开启「夏日庆典」预热活动", tag: "预告", type: "event" as const },
  { id: 8, text: "请勿轻信非官方渠道的充值优惠信息", tag: "提醒", type: "alert" as const },
];

const ITEM_HEIGHT = 44; // Approx height per item

export default function BulletinBoard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % NOTICES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + NOTICES.length) % NOTICES.length);
  }, []);

  const getIcon = (type: string) => {
    switch(type) {
        case 'alert': return <AlertCircle size={14} className="text-red-500" />;
        case 'new': return <Star size={14} className="text-yellow-500" />;
        case 'event': return <Bell size={14} className="text-indigo-500" />;
        default: return <Info size={14} className="text-blue-500" />;
    }
  };

  const getTagColor = (type: string) => {
      switch(type) {
          case 'alert': return "bg-red-100 text-red-600 border-red-200";
          case 'new': return "bg-yellow-100 text-yellow-600 border-yellow-200";
          case 'event': return "bg-indigo-100 text-indigo-600 border-indigo-200";
          default: return "bg-blue-100 text-blue-600 border-blue-200";
      }
  };

  return (
    <div 
        className="relative w-full h-full rounded-[24px] shadow-[0_2px_2px_#CAEBFF] bg-white/60 backdrop-blur-sm border border-white/60 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
    >
        <div className="absolute inset-[1px] p-4 overflow-hidden flex custom-scrollbar rounded-[24px]">
            {/* List Window */}
            <div className="flex-1 overflow-hidden relative mr-2">
                <div 
                    className="transition-transform duration-500 ease-in-out flex flex-col gap-2"
                    style={{ transform: `translateY(-${activeIndex * (ITEM_HEIGHT + 8)}px)` }} // 8px gap
                >
                    {NOTICES.map((notice) => (
                        <div 
                            key={notice.id} 
                            className="flex items-center gap-3 w-full p-2 h-[44px] rounded-xl hover:bg-white/80 transition-colors cursor-default border border-transparent hover:border-indigo-100 shrink-0"
                        >
                            <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${getTagColor(notice.type)} bg-opacity-50`}>
                                {getIcon(notice.type)}
                            </div>
                            
                            <div className="flex-1 min-w-0 flex items-center gap-2">
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-md border text-center min-w-[36px] ${getTagColor(notice.type)}`}>
                                    {notice.tag}
                                </span>
                                <span className="text-sm text-slate-700 font-medium truncate">
                                    {notice.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots (Right Side) */}
            <div className="flex flex-col items-center justify-center gap-1.5 shrink-0 w-3 border-l border-slate-100 pl-2 ml-1">
                 {NOTICES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`rounded-full transition-all duration-300 ${idx === activeIndex ? 'h-4 w-1.5 bg-indigo-500' : 'h-1.5 w-1.5 bg-slate-300 hover:bg-slate-400'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
            
            {/* Controls (Absolute Right, on Hover) */}
            <div className="absolute right-1 top-2 bottom-2 w-8 py-2 flex flex-col justify-between items-center opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                 <button onClick={prevSlide} className="pointer-events-auto p-1 rounded-full bg-white/90 shadow-sm hover:bg-white text-indigo-500 translate-x-1"><ChevronUp size={14} /></button>
                 <button onClick={nextSlide} className="pointer-events-auto p-1 rounded-full bg-white/90 shadow-sm hover:bg-white text-indigo-500 translate-x-1"><ChevronDown size={14} /></button>
            </div>
        </div>
    </div>
  );
}
