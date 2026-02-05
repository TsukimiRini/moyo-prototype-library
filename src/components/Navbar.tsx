import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-white/70 backdrop-blur-sm sticky top-5 z-50 rounded-[24px] shadow-[0_2px_2px_#CAEBFF] w-[96%] max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        {/* Exact Worm Logo Shape */}
        <svg width="40" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#6366F1]">
           <path 
             d="M4 14 C 4 14, 10 4, 18 10 C 26 16, 30 14, 34 10 L 34 6 C 34 6, 38 2, 42 2 C 46 2, 46 6, 46 10 L 46 14" 
             stroke="currentColor" 
             strokeWidth="3.5" 
             strokeLinecap="round" 
             strokeLinejoin="round"
             className="drop-shadow-sm"
           />
        </svg>
        <div className="flex flex-col -space-y-0.5 select-none">
          <span className="text-[#6366F1] font-bold text-lg tracking-tight">StarWorld</span>
          <span className="text-gray-400 text-[9px] font-medium tracking-wide">AI文字冒险游戏平台</span>
        </div>
      </div>

      <div className="flex items-center gap-8 text-[13px] font-bold tracking-wide text-[#818CF8]">
         <Link href="#" className="hover:text-[#6366F1] transition-colors">游戏库</Link>
         <Link href="#" className="hover:text-[#6366F1] transition-colors">游戏编辑器</Link>
         <Link href="#" className="hover:text-[#6366F1] transition-colors">API配置</Link>
         <Link href="#" className="hover:text-[#6366F1] transition-colors">安全配置</Link>
        
        <div className="flex items-center gap-3 pl-6 ml-2 border-l border-gray-200/50 h-6">
           <div className="w-8 h-8 rounded-full bg-[#E0E7FF] border-2 border-white shadow-sm"></div>
           <ChevronDown size={16} className="text-gray-300 cursor-pointer hover:text-[#6366F1]" />
        </div>
      </div>
    </nav>
  );
}
