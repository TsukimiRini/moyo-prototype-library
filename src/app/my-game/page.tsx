import Navbar from '@/components/Navbar';
import WelcomeHeader from '@/components/WelcomeHeader';
import DashboardSection from '@/components/DashboardSection';
import MyGameCard from '@/components/MyGameCard';
import Pagination from '@/components/Pagination';
import Mascot from '@/components/Mascot';
import { Volume2, Feather, Plus } from 'lucide-react';
import BulletinBoard from '@/components/BulletinBoard';
import AuthorNote from '@/components/AuthorNote';

export default function Home() {
  return (
    <div className="min-h-screen pb-24 relative overflow-x-hidden font-sans text-slate-800">
      <Navbar />
      
      <main className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-10">
        <div className="mb-10 pt-4">
        </div>
        {/* Game Library - Style D: Duplicated from C */}
        <DashboardSection 
            title="我的游戏" 
            icon={<Feather className="text-blue-400" size={22} />}
            className="mb-12"
            action={
                <button className="bg-white px-5 py-2 rounded-full shadow-[0_2px_2px_#CAEBFF] text-sm font-bold text-[#818CF8] hover:bg-slate-50 transition-colors flex items-center">
                    <Plus size={18} className="mr-1" strokeWidth={3} />
                    新建游戏
                </button>
            }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2">
             <div className="p-2">
                <MyGameCard 
                  title="高岭之花" 
                  author="System"
                  date="04 Feb"
                  imageSrc="/keyboard.jpg"
                />
             </div>
             <div className="p-2">
                <MyGameCard 
                  title="Endless Maze" 
                  author="RogueDev"
                  date="03 Feb"
                  imageSrc="/keyboard.jpg"
                />
             </div>
             <div className="p-2">
                <MyGameCard 
                  title="Cyberpunk" 
                  author="CDPR"
                  date="01 Feb"
                  imageSrc="/keyboard.jpg"
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
