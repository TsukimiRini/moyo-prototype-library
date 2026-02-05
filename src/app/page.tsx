import Navbar from '@/components/Navbar';
import WelcomeHeader from '@/components/WelcomeHeader';
import DashboardSection from '@/components/DashboardSection';
import GameCard from '@/components/GameCard';
import Pagination from '@/components/Pagination';
import Mascot from '@/components/Mascot';
import { Volume2, LayoutGrid, Image as ImageIcon, Sparkles, Disc, Feather, LayoutPanelLeft } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pb-24 relative overflow-x-hidden font-sans text-slate-800">
      <Navbar />
      
      <main className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-10">
        <WelcomeHeader />

        {/* Bulletin Board */}
        <DashboardSection 
          title="公告栏" 
          icon={<Volume2 className="text-[#818CF8]" size={22} />}
          className="mb-8"
        >
          <div className="bg-white rounded-[24px] h-[150px] w-full shadow-[0_2px_2px_#CAEBFF] border border-white">
          </div>
        </DashboardSection>

         {/* Variant E: Grid Fade (Final Corrected Request) */}
         <DashboardSection title="上次游玩" className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <GameCard 
                title="高岭之花" 
                saveName="第一章-初遇"
                author="System"
                date="2小时前"
                variant="recent-grid-fade" 
                imageSrc="/keyboard.jpg"
                description=""
            />
             <GameCard 
                title="无尽迷宫" 
                saveName="自动存档"
                author="OldTrafford"
                date="昨天 14:30"
                variant="recent-grid-fade" 
                imageSrc="/keyboard.jpg" 
                description=""
            />
             <GameCard 
                 title="赛博侦探 2077" 
                 saveName="关键节点: 抉择"
                 author="CDPR_Fan"
                 date="2026/02/01"
                 variant="recent-grid-fade"
                 imageSrc="/keyboard.jpg"
                 description=""
            />
          </div>
        </DashboardSection>


        {/* Game Library - Style C: Elegant Blue (User Request) */}
        <DashboardSection 
            title="游戏库 (样式C: 幽蓝雅致 - 最终版)" 
            icon={<Feather className="text-blue-400" size={22} />}
            className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2">
             <div className="p-2">
                <GameCard 
                  title="高岭之花" 
                  description="" 
                  author="System"
                  date="04 Feb"
                  imageSrc="/keyboard.jpg"
                  variant="library-elegant"
                />
             </div>
             <div className="p-2">
                <GameCard 
                  title="Endless Maze" 
                  description="" 
                  author="RogueDev"
                  date="03 Feb"
                  imageSrc="/keyboard.jpg"
                  variant="library-elegant"
                />
             </div>
             <div className="p-2">
                <GameCard 
                  title="Cyberpunk" 
                  description="" 
                  author="CDPR"
                  date="01 Feb"
                  imageSrc="/keyboard.jpg"
                  variant="library-elegant"
                />
             </div>
          </div>
        </DashboardSection>

        {/* Game Library - Style D: Duplicated from C */}
        <DashboardSection 
            title="游戏库 (样式D)" 
            icon={<Feather className="text-blue-400" size={22} />}
            className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2">
             <div className="p-2">
                <GameCard 
                  title="高岭之花" 
                  description="" 
                  author="System"
                  date="04 Feb"
                  imageSrc="/keyboard.jpg"
                  variant="library-elegant-rounded"
                />
             </div>
             <div className="p-2">
                <GameCard 
                  title="Endless Maze" 
                  description="" 
                  author="RogueDev"
                  date="03 Feb"
                  imageSrc="/keyboard.jpg"
                  variant="library-elegant-rounded"
                />
             </div>
             <div className="p-2">
                <GameCard 
                  title="Cyberpunk" 
                  description="" 
                  author="CDPR"
                  date="01 Feb"
                  imageSrc="/keyboard.jpg"
                  variant="library-elegant-rounded"
                />
             </div>
          </div>
        </DashboardSection>

        {/* Game Library - Style B: Classic Polaroid */}
        <DashboardSection 
            title="游戏库 (样式B: 复古拍立得风)" 
            icon={<ImageIcon className="text-[#818CF8]" size={22} />}
            className="mb-12 opacity-80 hover:opacity-100 transition-opacity"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-4">
             <GameCard 
                title="高岭之花" 
                description="" 
                author="user_xpu6"
                date="Jan 24, 2026"
                imageSrc="/keyboard.jpg"
                variant="library-polaroid"
             />
             <GameCard 
                title="无尽迷宫" 
                description="" 
                author="OldTrafford"
                 date="Jan 24, 2026"
                imageSrc="/keyboard.jpg"
                variant="library-polaroid"
             />
          </div>
        </DashboardSection>

        {/* Game Library - Style A: Instagram Modern (Refined to Screenshot) */}
        <DashboardSection 
            title="游戏库 (样式A: 现代社交/Ins风)" 
            icon={<LayoutPanelLeft className="text-[#818CF8]" size={22} />}
            className="mb-20 opacity-80 hover:opacity-100 transition-opacity"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
             <GameCard 
              title="高岭之花" 
              description="No Description" 
              author="user_xpu6"
              date="2026年1月1日"
              imageSrc="/keyboard.jpg"
              variant="library"
            />
            <GameCard 
              title="无尽迷宫" 
              description="Amazing roguelike adventure." 
              author="OldTrafford"
              date="2026年1月2日"
              imageSrc="/keyboard.jpg"
              variant="library"
            />
          </div>
        </DashboardSection>

        <Pagination />
      </main>

      <Mascot />
    </div>
  );
}
