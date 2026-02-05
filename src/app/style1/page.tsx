import NavbarStyle1 from '@/components/NavbarStyle1';
import WelcomeHeader from '@/components/WelcomeHeader';
import DashboardSection from '@/components/DashboardSection';
import GameCard from '@/components/GameCard';
import Pagination from '@/components/Pagination';
import Mascot from '@/components/Mascot';
import { Volume2, Feather } from 'lucide-react';
import BulletinBoard from '@/components/BulletinBoard';
import AuthorNote from '@/components/AuthorNote';

export default function Home() {
  return (
    <div className="min-h-screen pb-24 relative overflow-x-hidden font-sans text-slate-800">
      <NavbarStyle1 />
      
      <main className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-10">
        <WelcomeHeader />

        {/* News & Updates Grid */}
        <DashboardSection 
          title="最新动态" 
          icon={<Volume2 className="text-[#818CF8]" size={22} />}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[320px]">
            {/* Left: Infinite Scroll Author Note (Prominent) */}
            <div className="lg:col-span-2 h-full">
                <AuthorNote 
                    variant="journal"
                    content={`哈喽大家好，我是制作人 Antigravity。
最近收到很多关于“自动存档”机制的反馈，我们听到了！下个版本会重点优化这部分的体验，增加手动存档位的数量。
另外，关于《高岭之花》的新章节已经在紧锣密鼓的制作中，美术小姐姐这几天都在爆肝画图，真的超级好看，忍不住想透图...
✨ 创作工具 2.0 即将到来！不仅仅是变量系统，我们正在重构整个节点编辑器！新的编辑器将支持更复杂的逻辑判断、嵌套循环以及...期待已久的“可视化分支预览”！这将会极大地提升大家的创作效率，敬请期待！
🐛 捉虫悬赏令：发现BUG不要慌，反馈给我们有奖励！只要在社区反馈有效的程序BUG（非剧情逻辑），通过审核后即可获得「找茬王」限定头像框以及 100 积分奖励。
总之，非常感谢大家的支持，我们是一个小团队，每一条评论我们都会认真看。
希望大家喜欢这个公告栏的改版，现在的样式是不是更有“人味”了呢？
Keep coding, keep playing!`}
                />
            </div>

            {/* Right: Scrollable Bulletin Board */}
            <div className="lg:col-span-1 h-full p-1">
                <BulletinBoard />
            </div>
          </div>
        </DashboardSection>

        <DashboardSection 
          title="最新动态" 
          icon={<Volume2 className="text-[#818CF8]" size={22} />}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[320px]">
            {/* Left: Infinite Scroll Author Note (Prominent) */}
            <div className="lg:col-span-2 h-full">
                <AuthorNote 
                    variant="modern"
                    content={`哈喽大家好，我是制作人 Antigravity。
最近收到很多关于“自动存档”机制的反馈，我们听到了！下个版本会重点优化这部分的体验，增加手动存档位的数量。
另外，关于《高岭之花》的新章节已经在紧锣密鼓的制作中，美术小姐姐这几天都在爆肝画图，真的超级好看，忍不住想透图...
✨ 创作工具 2.0 即将到来！不仅仅是变量系统，我们正在重构整个节点编辑器！新的编辑器将支持更复杂的逻辑判断、嵌套循环以及...期待已久的“可视化分支预览”！这将会极大地提升大家的创作效率，敬请期待！
🐛 捉虫悬赏令：发现BUG不要慌，反馈给我们有奖励！只要在社区反馈有效的程序BUG（非剧情逻辑），通过审核后即可获得「找茬王」限定头像框以及 100 积分奖励。
总之，非常感谢大家的支持，我们是一个小团队，每一条评论我们都会认真看。
希望大家喜欢这个公告栏的改版，现在的样式是不是更有“人味”了呢？
Keep coding, keep playing!`}
                />
            </div>

            {/* Right: Scrollable Bulletin Board */}
            <div className="lg:col-span-1 h-full p-1">
                <BulletinBoard />
            </div>
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




        {/* Game Library - Style D: Duplicated from C */}
        <DashboardSection 
            title="游戏库" 
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





        <Pagination />
      </main>

      <Mascot />
    </div>
  );
}
