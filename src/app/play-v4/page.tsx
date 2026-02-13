'use client';

import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import { 
    Play, Clock, Globe, ChevronRight, ChevronLeft, BookOpen, Save, Trash2, Plus, Edit3 
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function PlayV4() {

    const [activeTab, setActiveTab] = useState('about');
    const [selectedArchiveId, setSelectedArchiveId] = useState<number | null>(null);
    
    // Mock Data
    const archives = [
        { id: 1, title: 'Chapter 4: The Valley', date: '2 hours ago', status: 'In Progress', playTime: '12h 30m', location: 'Elven Ruins' },
        { id: 2, title: 'Chapter 3: The Crossroads', date: 'Yesterday', status: 'Completed', playTime: '10h 15m', location: 'Merchant City' },
        { id: 3, title: 'Chapter 2: Ambush', date: '3 days ago', status: 'Mission Failed', playTime: '8h 45m', location: 'Dark Forest' },
    ];

    const carouselImages = [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2068&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="min-h-screen bg-[#f2fcff] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            {/* Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50 pt-6 px-6">
                <Navbar />
            </div>

            {/* Main Content */}
            <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
                
                {/* Game Hero Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column (Main Content) - 66% width */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Hero Section */}
                        <div className="relative rounded-[32px] overflow-hidden aspect-video shadow-2xl group">
                            {/* Background Image Carousel */}
                            <div className="absolute inset-0 bg-slate-900" ref={emblaRef}>
                                <div className="flex h-full">
                                    {carouselImages.map((src, index) => (
                                        <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                                            <img
                                                src={src}
                                                alt={`Game Cover ${index + 1}`}
                                                className="w-full h-full object-cover opacity-80 block"
                                            />
                                            {/* Gradient Overlay per slide to ensure seamless look */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Navigation Arrows */}
                            <button 
                                onClick={scrollPrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                aria-label="Previous Slide"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button 
                                onClick={scrollNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                aria-label="Next Slide"
                            >
                                <ChevronRight size={24} />
                            </button>
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col items-start gap-4">
                                <div className="space-y-1">
                                    <span className="px-3 py-1 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-200 text-xs font-bold rounded-full uppercase tracking-wider">
                                        Now Playing
                                    </span>
                                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
                                        高岭之花
                                    </h1>
                                </div>
                                <p className="text-slate-300 max-w-xl line-clamp-2 text-sm md:text-base leading-relaxed">
                                    Explore the mystical realms of the ancient world, uncover hidden secrets, and forge your own destiny in this epic text-based RPG adventure.
                                </p>
                            </div>
                        </div>

                        {/* Merged Info & Content Section */}
                        <div className="bg-white rounded-[32px] shadow-[0_2px_2px_#CAEBFF] border border-slate-100 overflow-hidden">
                            
                            {/* Tabs Header */}
                            <div className="border-b border-slate-100 p-2 bg-slate-50/50">
                                <div className="flex items-center gap-1 overflow-x-auto">
                                    {['About', 'Recent Updates', 'Community', 'Reviews'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab.toLowerCase())}
                                            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                                                activeTab === tab.toLowerCase()
                                                ? 'bg-[#818CF8] text-white shadow-md shadow-[#818CF8]/30'
                                                : 'text-slate-500 hover:bg-white hover:text-[#818CF8]'
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content (Example: About) */}
                            <div className="p-8 space-y-6">
                            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                                <BookOpen className="text-indigo-500" size={24} />
                                About This Game
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    Embark on a journey through the desolate yet beautiful landscapes of the Highland. 
                                    As a wanderer seeking the legendary "Flower of the High Peak", you will encounter formidable foes, 
                                    solve ancient puzzles, and make choices that will shape the fate of the world.
                                </p>
                                <p>
                                    Features include:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-indigo-300">
                                    <li>Deep branching narratives with over 50 unique endings.</li>
                                    <li>Dynamic relationship system with NPCs.</li>
                                    <li>Real-time day/night cycle affecting gameplay events.</li>
                                    <li>Rich atmospheric sound design and immersive visuals.</li>
                                </ul>
                            </div>
                            
                            {/* Visual Divider / Screenshot Strip */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-square rounded-2xl bg-slate-100 overflow-hidden relative group cursor-pointer">
                                        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/20 transition-colors flex items-center justify-center">
                                            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                                                <Play size={14} fill="#6366f1" className="text-indigo-500 ml-0.5" />
                                            </div>
                                        </div>
                                        <img 
                                            src={`https://images.unsplash.com/photo-${1518000 + i}?q=80&w=300&auto=format&fit=crop`} 
                                            className="w-full h-full object-cover"
                                            alt={`Screenshot ${i}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                    </div>

                    {/* Right Column (Sidebar) - 33% width */}
                    <div className="space-y-6">
                        
                        {/* Recent Activity / Archives (Sidebar) */}
                        <div className="bg-slate-50/50 rounded-[24px] p-6 border border-slate-200/60 space-y-4 sticky top-32 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-lg font-bold text-slate-700 flex items-center gap-2">
                                    <Save className="text-indigo-500" size={20} />
                                    Your Saves
                                </h2>
                                <button className="text-xs font-bold text-slate-400 hover:text-indigo-500 px-2 py-1 rounded-lg transition-all">
                                    View All
                                </button>
                            </div>

                            <div className="space-y-3">
                                {/* New Save Slot - Compact */}
                                <div className="p-3 bg-white border-2 border-dashed border-slate-200 hover:border-indigo-300 rounded-xl flex items-center justify-center gap-2 cursor-pointer group transition-colors shadow-sm">
                                    <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-indigo-50 text-slate-400 group-hover:text-indigo-500 flex items-center justify-center transition-colors">
                                        <Play size={10} fill="currentColor" className="ml-0.5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-500 transition-colors">Start New Game</span>
                                </div>

                                {archives.map((save) => {
                                    const isSelected = selectedArchiveId === save.id;
                                    return (
                                        <div 
                                            key={save.id} 
                                            onClick={() => setSelectedArchiveId(save.id)}
                                            className="group flex items-center justify-between p-3 bg-white rounded-xl border border-slate-50 transition-all cursor-pointer hover:shadow-[0_2px_2px_#CAEBFF] hover:-translate-y-0.5"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                                    isSelected
                                                    ? 'bg-indigo-50 text-[#818CF8]'
                                                    : 'bg-slate-50 text-slate-300'
                                                } group-hover:bg-[#818CF8] group-hover:text-white`}>
                                                    <Save size={18} className="absolute transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
                                                    <Play size={18} fill="currentColor" className="absolute transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100" />
                                                </div>
                                                <div>
                                                    <h4 className={`text-sm font-bold transition-colors ${isSelected ? 'text-[#818CF8]' : 'text-slate-700'} group-hover:text-[#818CF8]`}>{save.title}</h4>
                                                    <span className={`text-[10px] font-medium font-mono transition-colors ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`}>{save.date}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                <button 
                                                    className="p-2 text-slate-300 hover:text-indigo-500 hover:bg-indigo-50 rounded-lg transition-colors"
                                                    title="Rename Archive"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Edit3 size={16} />
                                                </button>
                                                <button 
                                                    className="p-2 text-slate-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete Archive"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
}
