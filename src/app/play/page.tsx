'use client';

import { useState } from 'react';
import { 
  Play, Save, User, Plus, Trash2, 
  Clock, Image as ImageIcon, BookOpen, AlertCircle,
  PanelRightOpen, PanelRightClose 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function PlayPage() {
  const [activeTab, setActiveTab] = useState<'archive' | 'protag'>('archive');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [archives, setArchives] = useState([
    { id: 1, title: '新游戏', date: '2026/1/26 15:51:20', status: '进行中' },
    { id: 2, title: '第二章：迷失', date: '2026/1/25 20:10:05', status: '已暂停' }
  ]);

  return (
    <div className="h-screen bg-[#f2fcff] font-sans flex flex-col overflow-hidden relative">
      <Navbar />

      <main className={`flex-1 min-h-0 max-w-7xl mx-auto w-full px-6 pb-6 flex flex-col lg:flex-row items-stretch transition-all duration-700 ease-in-out ${isSidebarOpen ? 'gap-6' : 'gap-0'}`}>
        
        {/* Left Side: Game Detail Card */}
        <div className="lg:w-[calc(100%-384px)] lg:flex-none w-full h-full bg-white/80 backdrop-blur-xl rounded-[24px] shadow-[0_2px_2px_#CAEBFF] overflow-hidden border border-white/50 flex flex-col transition-all duration-700 mx-auto max-w-5xl">
            {/* Cover Image Placeholder - Reduced height for better fit */}
            <div className="w-full h-[300px] shrink-0 bg-indigo-50 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-50 flex items-center justify-center">
                    <ImageIcon size={64} className="text-indigo-200" />
                    <span className="sr-only">Game Cover</span>
                </div>

                {/* Expand Button (Visible only when sidebar is closed) */}
                {!isSidebarOpen && (
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="absolute top-6 right-6 p-2 bg-white/90 backdrop-blur text-slate-500 hover:text-[#818CF8] rounded-xl shadow-lg border border-white/50 transition-all hover:scale-110 z-10"
                        title="Open Sidebar"
                    >
                        <PanelRightOpen size={20} />
                    </button>
                )}
            </div>

            {/* Content Area - Scrollable */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
                
                {/* Title & Description */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">高岭之花</h2>
                    <p className="text-slate-400 text-sm">No description provided for this adventure.</p>
                </div>

                {/* Game Info Block */}
                <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 space-y-6">
                    <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <BookOpen size={16} className="text-[#818CF8]" />
                        游戏信息
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-400">存档数量</span>
                            <span className="font-medium text-slate-600 font-mono text-xs bg-slate-100 px-2 py-0.5 rounded text-center min-w-[24px]">{archives.length}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-400">主角姓名</span>
                            <span className="font-medium text-slate-600">探险者</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-400">当前存档</span>
                            <span className="font-medium text-slate-600">新游戏</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-400">游戏类型</span>
                            <span className="font-medium text-slate-600 bg-indigo-50 text-indigo-500 px-2 py-0.5 rounded text-xs">AI 文字冒险</span>
                        </div>
                    </div>
                </div>

                {/* Main Action Button */}
                <button className="w-full py-4 bg-[#818CF8] hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-[0_4px_14px_rgba(129,140,248,0.4)] hover:shadow-[0_6px_20px_rgba(129,140,248,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group text-lg">
                    <Play fill="currentColor" size={20} className="ml-1" />
                    <span>开始游戏</span>
                </button>

                <p className="text-center text-xs text-slate-400 font-medium">
                    准备好开始您的星际冒险了吗？您可以在右侧配置存档和主角信息。
                </p>

            </div>
        </div>

        {/* Right Side: Sidebar */}
        <div className={`h-full flex flex-col shrink-0 transition-all duration-700 ease-in-out ${isSidebarOpen ? 'w-full lg:w-[360px] opacity-100 translate-x-0' : 'w-0 opacity-0 translate-x-[360px] overflow-hidden'}`}>
             
             {/* Full Height Panel */}
            <div className="bg-white/90 backdrop-blur-xl rounded-[24px] shadow-[0_2px_2px_#CAEBFF] p-1 border border-white/50 h-full flex flex-col overflow-hidden min-w-[360px]">
                {/* Tabs Wrapper with margin */}
                <div className="shrink-0 p-4 pb-0 relative">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex-1 flex p-1 bg-slate-100/80 rounded-[20px]">
                            <button 
                                onClick={() => setActiveTab('archive')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-[16px] text-sm font-bold transition-all ${
                                    activeTab === 'archive' 
                                    ? 'bg-white text-[#818CF8] shadow-sm' 
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                            >
                                <Save size={16} />
                                存档
                            </button>
                            <button 
                                onClick={() => setActiveTab('protag')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-[16px] text-sm font-bold transition-all ${
                                    activeTab === 'protag' 
                                    ? 'bg-white text-[#818CF8] shadow-sm' 
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                            >
                                <User size={16} />
                                主角
                            </button>
                        </div>
                        
                        {/* Collapse Button */}
                        <button 
                            onClick={() => setIsSidebarOpen(false)}
                            className="p-2 text-slate-400 hover:text-[#818CF8] hover:bg-white rounded-xl transition-all shrink-0 shadow-sm border border-transparent hover:border-slate-100"
                            title="Collapse Sidebar"
                        >
                            <PanelRightClose size={20} />
                        </button>
                    </div>
                </div>

                {/* Tab Content - Scrollable */}
                <div className="px-5 pb-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
                    {activeTab === 'archive' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                             {/* Header */}
                             <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-slate-700 text-sm">游戏存档</h3>
                                <button className="text-[10px] bg-[#818CF8] hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg shadow-[0_2px_8px_rgba(129,140,248,0.3)] transition-all flex items-center gap-1 font-bold hover:-translate-y-0.5">
                                    <Plus size={12} strokeWidth={3} />
                                    新建存档
                                </button>
                            </div>

                            {/* Archive List */}
                            <div className="space-y-3">
                                {archives.map((archive) => (
                                    <div key={archive.id} className={`group relative p-4 rounded-2xl border transition-all cursor-pointer hover:-translate-y-0.5 ${archive.id === 1 ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-transparent hover:bg-white hover:border-indigo-100'}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className={`text-sm font-bold ${archive.id === 1 ? 'text-[#818CF8]' : 'text-slate-700'}`}>
                                                {archive.title}
                                            </h4>
                                            {archive.id === 1 && (
                                                <span className="text-[10px] font-bold text-slate-400 px-1.5 py-0.5 bg-white/50 rounded ml-2">
                                                    Current
                                                </span>
                                            )}
                                            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 hover:text-red-400 p-1 -mr-2 -mt-2 hover:bg-red-50 rounded-lg">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs text-slate-500">{archive.status}</p>
                                            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono mt-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                                {archive.date}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'protag' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col items-center justify-center h-full min-h-[300px] text-center space-y-4">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-2">
                                <User size={32} className="text-slate-300" />
                            </div>
                            <div>
                                <h3 className="text-slate-800 font-bold mb-1">主角信息</h3>
                                <p className="text-xs text-slate-400 max-w-[200px] mx-auto">
                                    在此处配置您的角色详情，包括姓名、外观和属性。
                                </p>
                            </div>
                            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 transition-colors">
                                编辑信息
                            </button>
                        </div>
                    )}
                </div>
            </div>

        </div>

      </main>
    </div>
  );
}
