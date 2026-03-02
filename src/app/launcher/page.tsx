'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { 
    Play, Clock, Globe, ChevronRight, ChevronLeft, BookOpen, Save, Trash2, Plus, Edit3, User, Settings, Maximize2, Minimize2, Menu, X, PanelRightClose, PanelRightOpen
} from 'lucide-react';

export default function PlayV4() {

    const [activeTab, setActiveTab] = useState<'archive' | 'protag'>('archive');
    const [selectedArchiveId, setSelectedArchiveId] = useState<number | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isFullscreenSidebarOpen, setIsFullscreenSidebarOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [showFullscreenControls, setShowFullscreenControls] = useState(false);
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleFullscreenDoubleClick = () => {
        if (!isFullscreen) return;
        setShowFullscreenControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        controlsTimeoutRef.current = setTimeout(() => {
            setShowFullscreenControls(false);
        }, 3000);
    };

    useEffect(() => {
        return () => {
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        };
    }, []);
    
    // Mock Data
    const archives = [
        { id: 1, title: 'Chapter 4: The Valley', date: '2 hours ago', status: 'In Progress', playTime: '12h 30m', location: 'Elven Ruins' },
        { id: 2, title: 'Chapter 3: The Crossroads', date: 'Yesterday', status: 'Completed', playTime: '10h 15m', location: 'Merchant City' },
        { id: 3, title: 'Chapter 2: Ambush', date: '3 days ago', status: 'Mission Failed', playTime: '8h 45m', location: 'Dark Forest' },
    ];

    const renderSidebarContent = (isOverlay = false) => (
        <>
            {/* Tabs */}
            <div className="shrink-0 mb-6 relative">
                <div className="flex items-center gap-3">
                    <div className="flex-1 flex p-1 bg-slate-100/80 rounded-[20px]">
                        <button 
                            onClick={() => setActiveTab('archive')}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-[16px] text-sm font-bold transition-all ${
                                activeTab === 'archive' 
                                ? 'bg-white text-[#818CF8]' 
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
                                ? 'bg-white text-[#818CF8]' 
                                : 'text-slate-400 hover:text-slate-600'
                            }`}
                        >
                            <User size={16} />
                            主角
                        </button>
                    </div>
                    {!isOverlay && (
                        <button 
                            onClick={() => setIsSidebarCollapsed(true)}
                            className="hidden lg:flex items-center justify-center w-11 h-11 text-slate-400 hover:text-[#818CF8] bg-white rounded-[18px] transition-all border border-slate-200/50 hover:border-indigo-200 shrink-0"
                            title="收起侧边栏"
                        >
                            <PanelRightClose size={18} />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 pb-4 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
                {activeTab === 'archive' && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-bold text-slate-700">游戏存档</h2>
                        </div>

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
                )}

                {activeTab === 'protag' && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col h-full">
                        
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <Settings size={20} className="text-slate-400" />
                                <h2 className="text-sm font-bold text-slate-700 tracking-wide">主角设定</h2>
                            </div>
                            <button className="bg-[#818CF8] hover:bg-indigo-500 text-white px-4 py-2.5 rounded-[12px] text-xs font-bold shadow-[0_2px_8px_rgba(129,140,248,0.3)] transition-all hover:-translate-y-0.5">
                                保存设置
                            </button>
                        </div>

                        <div className="space-y-6 flex-1 pr-1">
                            {/* Avatar Section */}
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-700">头像</label>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200/60 shadow-inner shrink-0 cursor-pointer hover:border-indigo-300 transition-colors">
                                        <User size={28} className="text-slate-300" strokeWidth={2.5} />
                                    </div>
                                    <button className="text-[#818CF8] bg-white border border-slate-200 hover:bg-slate-50 hover:border-indigo-200 flex items-center justify-center px-4 py-1.5 rounded-xl text-xs font-bold transition-all">
                                        选择头像
                                    </button>
                                </div>
                            </div>

                            {/* Name Section */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 ml-1">姓名</label>
                                <input 
                                    type="text" 
                                    defaultValue="探险者" 
                                    className="w-full px-4 py-2.5 bg-white border border-slate-100 rounded-xl text-sm text-slate-600 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#818CF8]/20 focus:border-[#818CF8] transition-all"
                                />
                            </div>

                            {/* Description Section */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 ml-1">描述</label>
                                <textarea 
                                    rows={5}
                                    defaultValue="一名勇敢的星际探险家" 
                                    className="w-full px-4 py-2.5 bg-white border border-slate-100 rounded-xl text-sm text-slate-600 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#818CF8]/20 focus:border-[#818CF8] transition-all resize-none"
                                />
                                <p className="text-[11px] text-slate-400/80 font-medium leading-relaxed px-1 mt-1">
                                    描述主角的背景、性格、外貌等信息，这将影响游戏中的对话和情节
                                </p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    );

    return (
        <div className="min-h-screen bg-[#f2fcff] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            {/* Main Content */}
            <main className="pt-14 pb-8 max-w-[1600px] mx-auto px-10">
                
                {/* Game Hero Container */}
                <div className="flex flex-col lg:flex-row gap-8 w-full max-w-full">
                    
                    {/* Left Column (Main Area) */}
                    <div className={`flex flex-col gap-4 h-[calc(100vh-8rem)] transition-all duration-500 ease-in-out shrink-0 relative ${
                        isSidebarCollapsed ? 'w-full' : 'w-full lg:w-[calc(72%-24px)]'
                    }`}>
                        {/* Expand Sidebar Button (Visible only when collapsed) */}
                        {isSidebarCollapsed && (
                            <button 
                                onClick={() => setIsSidebarCollapsed(false)}
                                className="fixed top-40 right-0 hidden lg:flex items-center justify-center p-3 pl-4 pr-3 text-slate-400 hover:text-[#818CF8] bg-white/95 backdrop-blur-md border border-slate-200/80 border-r-0 rounded-l-2xl transition-all shadow-[-4px_2px_16px_rgba(0,0,0,0.08)] z-40 hover:pr-4 hover:bg-indigo-50"
                                title="展开侧边栏"
                            >
                                <PanelRightOpen size={18} />
                            </button>
                        )}

                        {/* Game Placeholder */}
                        <div 
                            className={`flex-1 flex flex-col items-center justify-center transition-all duration-500 origin-center select-none ${
                                isFullscreen 
                                ? 'fixed inset-0 z-[100] rounded-none bg-slate-200' 
                                : 'relative bg-slate-200/50 rounded-[24px] overflow-hidden'
                            }`}
                            onDoubleClick={handleFullscreenDoubleClick}
                        >
                            <div className={`absolute z-20 flex items-center gap-2 transition-all duration-300 ${
                                isFullscreen 
                                ? `top-6 right-6 ${showFullscreenControls ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}` 
                                : 'top-4 right-4 opacity-100 scale-100 pointer-events-auto'
                            }`}>
                                {isFullscreen && (
                                    <button 
                                        onClick={() => setIsFullscreenSidebarOpen(!isFullscreenSidebarOpen)}
                                        className="p-2 bg-white/60 hover:bg-white text-slate-500 hover:text-[#818CF8] rounded-xl shadow-sm backdrop-blur-md transition-all"
                                        title="菜单"
                                    >
                                        <Menu size={20} />
                                    </button>
                                )}
                                <button 
                                    onClick={() => setIsFullscreen(!isFullscreen)}
                                    className="p-2 bg-white/60 hover:bg-white text-slate-500 hover:text-[#818CF8] rounded-xl shadow-sm backdrop-blur-md transition-all"
                                    title={isFullscreen ? "退出全屏" : "全屏展示"}
                                >
                                    {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                                </button>
                            </div>
                            <div className={`w-16 h-16 bg-slate-300 rounded-2xl mb-4 flex items-center justify-center text-slate-400 transition-all ${isFullscreen ? 'scale-150' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
                            </div>

                            {/* Fullscreen Overlay Sidebar */}
                            {isFullscreen && isFullscreenSidebarOpen && (
                                <div className="absolute right-0 top-0 bottom-0 w-[400px] bg-slate-50/95 backdrop-blur-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.1)] p-6 flex flex-col z-[110] animate-in slide-in-from-right duration-300 border-l border-white/50">
                                    <div className="flex justify-end mb-4 shrink-0">
                                        <button 
                                            onClick={() => setIsFullscreenSidebarOpen(false)}
                                            className="p-2 text-slate-400 hover:text-slate-600 bg-slate-200/50 hover:bg-slate-200 rounded-xl transition-colors"
                                            title="关闭菜单"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                    <div className="flex-1 flex flex-col h-full overflow-hidden">
                                        {renderSidebarContent(true)}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Game State Navigation Bar */}
                        <div className={`bg-white/70 backdrop-blur-sm rounded-[24px] shadow-[0_2px_2px_#CAEBFF] px-5 py-2.5 flex items-stretch shrink-0 transition-all duration-300 select-none ${
                            isFullscreen
                            ? `fixed left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] max-w-3xl z-[120] ${
                                showFullscreenControls ? 'bottom-8 opacity-100 pointer-events-auto shadow-xl' : '-bottom-10 opacity-0 pointer-events-none'
                            }`
                            : 'w-full relative opacity-100 pointer-events-auto'
                        }`}>
                            {/* Left: Title (occupies full height, vertically centered) */}
                            <div className="flex items-center gap-2 pr-5 mr-5 border-r border-slate-200/50 shrink-0">
                                <h2 className="text-xl font-black text-slate-800 tracking-tight">
                                    高岭之花
                                </h2>
                                <span className="px-1.5 py-0.5 bg-indigo-50 text-[#818CF8] text-[9px] font-bold rounded border border-indigo-100/50">运行中</span>
                            </div>

                            {/* Right: Controls & Context (Flex Col) */}
                            <div className="flex-1 flex flex-col justify-center">
                                {/* Top part: Controls */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-1 text-[#818CF8] font-bold hover:text-indigo-500 transition-colors text-sm">
                                            <ChevronLeft size={16} strokeWidth={3} />
                                            <span className="tracking-wide">后退</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-slate-300 cursor-not-allowed font-bold text-sm">
                                            <span className="tracking-wide">前进</span>
                                            <ChevronRight size={16} strokeWidth={3} />
                                        </button>
                                    </div>

                                    {/* Right: Status & Save */}
                                    <div className="flex items-center gap-4">
                                        <div className="text-sm font-bold text-slate-700 mt-1 hidden sm:block">
                                            7 / 7 <span className="text-orange-400/80 font-medium ml-1 text-xs tracking-wide">(最多回退5步)</span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <button className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-400 rounded-md text-xs font-bold border border-slate-200/50 cursor-not-allowed transition-colors shadow-sm">
                                                <Save size={13} strokeWidth={2.5} />
                                                <span>已保存</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom part: Context Info */}
                                <div className="flex items-center gap-1.5 mt-1 -ml-0.5">
                                    <span className="text-[10px] leading-none opacity-80 mb-0.5">💡</span>
                                    <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                                        返回到之前的状态后，新的交互将覆盖原有的后续状态 
                                        <span className="text-orange-400/80 mx-1.5">•</span> 
                                        <span className="text-orange-400/80">为避免迷失，限制最多回退5个状态</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden hidden lg:block shrink-0 ${
                        isSidebarCollapsed ? 'w-0 opacity-0' : 'w-[calc(28%-8px)] opacity-100'
                    }`}>
                        
                        {/* Recent Activity / Archives / Character (Sidebar) */}
                        <div className="bg-slate-50/50 rounded-[24px] p-6 border border-slate-200/60 sticky top-24 backdrop-blur-sm h-[calc(100vh-8rem)] flex flex-col w-full max-w-sm">
                            {renderSidebarContent(false)}
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
}

