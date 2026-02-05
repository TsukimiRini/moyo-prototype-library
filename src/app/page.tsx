import Navbar from '@/components/Navbar';
import WelcomeHeader from '@/components/WelcomeHeader';
import DashboardSection from '@/components/DashboardSection';
import GameCard from '@/components/GameCard';
import Pagination from '@/components/Pagination';
import Mascot from '@/components/Mascot';
import { Volume2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pb-24 relative bg-[#F5F8FF] overflow-x-hidden font-sans text-slate-800">
      <Navbar />
      
      <main className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-10">
        <WelcomeHeader />

        {/* Bulletin Board */}
        <DashboardSection 
          title="公告栏" 
          icon={<Volume2 className="text-[#818CF8]" size={22} />}
          className="mb-8"
        >
          <div className="bg-white rounded-[24px] h-[150px] w-full shadow-[0_2px_12px_rgba(230,235,255,0.7)] border border-white">
          </div>
        </DashboardSection>

         {/* Variant E: Grid Fade (Final Corrected Request) */}
         <DashboardSection title="上次游玩 (D款: 规整点阵渐变 - 最终版)" className="mb-12">
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

        {/* Game Library */}
        <DashboardSection title="游戏库" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
             <GameCard 
              title="高岭之花" 
              description="No Description" 
              author="user_xpu6"
              date="2026年1月1日"
              imageSrc="/keyboard.jpg"
            />
            <GameCard 
              title="敬请期待" 
              description="No Description" 
              isComingSoon
            />
            <GameCard 
              title="敬请期待" 
              description="No Description" 
              isComingSoon
            />
            <GameCard 
              title="敬请期待" 
              description="No Description" 
              isComingSoon
            />
          </div>
        </DashboardSection>

        <Pagination />
      </main>

      <Mascot />
    </div>
  );
}
