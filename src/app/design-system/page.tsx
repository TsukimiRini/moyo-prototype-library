'use client';

import { useState } from 'react';
import { 
  Play, Edit3, UploadCloud, Trash2, Lock, Globe, Save,
  Mail, X, Search, ChevronRight, CheckCircle2, AlertCircle, Clock, Image as ImageIcon, Plus,
  Folder, Music, Link as LinkIcon, LayoutGrid, Upload, User 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import MyGameCard from '@/components/MyGameCard';
import { Pagination, ConfigProvider } from 'antd';

export default function DesignSystemPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDangerModalOpen, setIsDangerModalOpen] = useState(false);
  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);


  // Common styles from MyGameCard & LoginPage
  const colors = {
    primary: 'bg-[#818CF8]',
    primaryHover: 'hover:bg-indigo-500',
    secondary: 'bg-white',
    secondaryHover: 'hover:bg-slate-50',
    textPrimary: 'text-[#818CF8]',
    border: 'border-slate-100',
    shadow: 'shadow-[0_2px_2px_#CAEBFF]',
    shadowHover: 'hover:shadow-[0_4px_4px_#CAEBFF]',
    bg: 'bg-[#f2fcff]',
  };

  return (
    <div className={`min-h-screen ${colors.bg} font-sans`}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-2 mb-12 text-center">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
                Moyo <span className="text-[#818CF8]">Design System</span>
            </h1>
            <p className="text-slate-400 font-medium">
                Standardized components and styles for a cohesive UI experience.
            </p>
        </div>

        {/* Main Content Area */}
        <div className="max-w-5xl mx-auto space-y-16 pb-20">

                {/* --- BUTTONS SECTION --- */}
                <section id="buttons" className="space-y-6">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200/60">
                        <Play size={18} className="text-[#818CF8]" />
                        <h2 className="text-xl font-bold text-slate-700">Buttons</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Primary Buttons */}
                        <div className="bg-white/60 p-6 rounded-2xl border border-white/60 shadow-sm space-y-4">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Primary Actions</h3>
                            <div className="flex flex-wrap gap-4 items-center">
                                <button className="px-6 py-2.5 bg-[#818CF8] hover:bg-indigo-500 text-white text-sm font-bold rounded-xl shadow-[0_4px_14px_rgba(129,140,248,0.3)] hover:shadow-[0_6px_20px_rgba(129,140,248,0.23)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                                    Primary Button
                                </button>
                                <button className="px-6 py-2.5 bg-[#818CF8] hover:bg-indigo-500 text-white text-sm font-bold rounded-xl shadow-[0_4px_14px_rgba(129,140,248,0.3)] opacity-50 cursor-not-allowed">
                                    Disabled
                                </button>
                            </div>
                        </div>

                        {/* Secondary Buttons */}
                        <div className="bg-white/60 p-6 rounded-2xl border border-white/60 shadow-sm space-y-4">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Secondary Actions</h3>
                            <div className="flex flex-wrap gap-4 items-center">
                                <button className="px-4 py-2 bg-white hover:bg-slate-50 text-[#818CF8] text-sm font-bold rounded-xl shadow-[0_2px_2px_#CAEBFF] hover:shadow-[0_4px_4px_#CAEBFF] transition-all border border-slate-50">
                                    Secondary
                                </button>
                                <button className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-[#818CF8] text-sm font-bold rounded-xl transition-colors">
                                    Ghost / Light
                                </button>
                            </div>
                        </div>

                         {/* Icon Buttons */}
                         <div className="bg-white/60 p-6 rounded-2xl border border-white/60 shadow-sm space-y-4 md:col-span-2">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Icon Buttons</h3>
                            <div className="flex flex-wrap gap-6 items-center">
                                <button className="w-10 h-10 bg-white hover:bg-slate-50 text-[#818CF8] rounded-full shadow-[0_2px_5px_#CAEBFF] flex items-center justify-center transition-all hover:scale-110">
                                    <Play fill="currentColor" size={18} className="ml-1" />
                                </button>
                                <button className="w-9 h-9 bg-indigo-50 hover:bg-indigo-100 text-[#818CF8] rounded-lg flex items-center justify-center transition-colors">
                                    <Edit3 size={16} strokeWidth={2.5} />
                                </button>
                                <button className="w-9 h-9 bg-red-50 hover:bg-red-100 text-red-400 rounded-lg flex items-center justify-center transition-colors">
                                    <Trash2 size={16} strokeWidth={2.5} />
                                </button>
                                {/* Publish Button Style from Card */}
                                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-[#818CF8] rounded-lg transition-colors group">
                                    <UploadCloud size={14} strokeWidth={2.5} className="group-hover:animate-bounce" />
                                    <span className="text-xs font-bold">Publish</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- INPUTS SECTION --- */}
                <section id="inputs" className="space-y-6">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200/60">
                        <Edit3 size={18} className="text-[#818CF8]" />
                        <h2 className="text-xl font-bold text-slate-700">Form Inputs</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {/* Standard Inputs */}
                         <div className="bg-white/60 p-6 rounded-2xl border border-white/60 shadow-sm space-y-6">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 ml-1">Standard Input</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter text..."
                                    className="w-full px-4 py-2.5 bg-white border border-slate-100 rounded-xl text-sm text-slate-600 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#818CF8]/20 focus:border-[#818CF8] transition-all"
                                />
                            </div>
                            
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 ml-1">Input with Icon</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail size={16} className="text-slate-300 group-focus-within:text-[#818CF8] transition-colors" />
                                    </div>
                                    <input 
                                        type="email" 
                                        placeholder="user@example.com"
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-100 rounded-xl text-sm text-slate-600 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#818CF8]/20 focus:border-[#818CF8] transition-all hover:border-slate-200"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Search & Textarea */}
                        <div className="bg-white/60 p-6 rounded-2xl border border-white/60 shadow-sm space-y-6">
                             <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 ml-1">Search Input</label>
                                <div className="relative group">
                                    <input 
                                        type="text" 
                                        placeholder="Search components..."
                                        className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 shadow-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#818CF8]/20 focus:border-[#818CF8] transition-all"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <Search size={16} className="text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 ml-1">Textarea</label>
                                <textarea 
                                    rows={3}
                                    placeholder="Write a description..."
                                    className="w-full px-4 py-2.5 bg-white border border-slate-100 rounded-xl text-sm text-slate-600 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#818CF8]/20 focus:border-[#818CF8] transition-all resize-none"
                                />
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- CARDS & SURFACES --- */}
                <section id="cards" className="space-y-6">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200/60">
                        <UploadCloud size={18} className="text-[#818CF8]" />
                        <h2 className="text-xl font-bold text-slate-700">Cards & Surfaces</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Standard Card */}
                        <div className="group relative bg-white p-6 rounded-2xl shadow-[0_2px_2px_#CAEBFF] hover:shadow-[0_8px_16px_#CAEBFF] transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-lg font-bold text-[#818CF8] mb-2">Standard Card</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                A simple card container with hover lift effect and soft shadow. Ideal for grid items.
                            </p>
                        </div>

                        {/* Glassmorphism Card */}
                        <div className="relative bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-200 rounded-full blur-xl opacity-50"></div>
                            <h3 className="text-lg font-bold text-slate-700 mb-2 relative z-10">Glassmorphism</h3>
                            <p className="text-sm text-slate-500 leading-relaxed relative z-10">
                                Translucent background with blur effect. Great for overlays or modern UI sections.
                            </p>
                        </div>

                         {/* Interactive Status Card */}
                         <div className="relative bg-white p-5 rounded-2xl shadow-[0_2px_2px_#CAEBFF] border border-slate-50 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-3 animate-pulse">
                                <CheckCircle2 size={24} className="text-emerald-500" />
                            </div>
                            <h4 className="font-bold text-slate-700">Success State</h4>
                            <p className="text-xs text-slate-400 mt-1">Operation completed successfully.</p>
                        </div>
                    </div>
                </section>


                {/* --- SCROLLABLE LISTS --- */}
                <section id="lists" className="space-y-6">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200/60">
                        <ChevronRight size={18} className="text-[#818CF8]" />
                        <h2 className="text-xl font-bold text-slate-700">Scrollable Lists</h2>
                    </div>

                    <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Horizontal Card List</h3>
                        
                        {/* Scroll Container with visible scrollbar styling */}
                        <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent px-2">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="min-w-[240px] w-[240px]">
                                    <MyGameCard 
                                        title={`Demo Game Project ${i}`} 
                                        author="Designer"
                                        date="Today"
                                        status={i % 2 === 0 ? 'published' : 'private'}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="mt-8 bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Vertical Archive List (Fixed Height with Header)</h3>
                        
                        <div className="w-[320px] bg-white/50 rounded-2xl p-4 border border-slate-100 shadow-[0_2px_2px_#CAEBFF]">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center gap-2 text-slate-700 font-bold">
                                    <Save size={16} className="text-[#818CF8]" />
                                    <span className="text-sm">游戏存档</span>
                                </div>
                                <button className="text-[10px] bg-white hover:bg-indigo-50 text-[#818CF8] px-2.5 py-1.5 rounded-lg border border-indigo-50 shadow-sm transition-all hover:shadow-md flex items-center gap-1 font-bold">
                                    <Plus size={12} strokeWidth={3} />
                                    新建
                                </button>
                            </div>

                            <div className="h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent space-y-3">
                                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                    <div key={i} className="group flex items-center justify-between p-3 bg-white rounded-xl border border-slate-50 hover:shadow-[0_2px_2px_#CAEBFF] transition-all hover:-translate-y-0.5 cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-[#818CF8]">
                                                <Save size={18} />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-700 group-hover:text-[#818CF8] transition-colors">Archive Save {i}</h4>
                                                <span className="text-[10px] text-slate-400 font-medium font-mono">2026-02-10 14:3{i}</span>
                                            </div>
                                        </div>
                                        <button 
                                            className="p-2 text-slate-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete Archive"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Variant B: Minimal with Header */}
                    <div className="mt-8 bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Vertical Archive List - Variant B (Minimal with Header)</h3>
                        
                        <div className="w-[320px] bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-100 shadow-[0_2px_2px_#CAEBFF]">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center gap-2 text-slate-700 font-bold">
                                    <Save size={16} className="text-[#818CF8]" />
                                    <span className="text-sm">游戏存档</span>
                                </div>
                                <button className="text-[10px] bg-white hover:bg-indigo-50 text-[#818CF8] px-2.5 py-1.5 rounded-lg border border-indigo-50 shadow-sm transition-all hover:shadow-md flex items-center gap-1 font-bold">
                                    <Plus size={12} strokeWidth={3} />
                                    新建
                                </button>
                            </div>

                            {/* List */}
                            <div className="h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-100 scrollbar-track-transparent space-y-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="group relative flex items-center justify-between p-3 rounded-xl hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-[0_2px_2px_#CAEBFF] transition-all cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#818CF8] group-hover:shadow-[0_0_8px_#818CF8] transition-all"></div>
                                            <div className="flex flex-col">
                                                <h4 className="text-sm font-bold text-slate-600 group-hover:text-slate-800 transition-colors">AutoSave_Chapter_{i}</h4>
                                                <span className="text-[10px] text-slate-300 group-hover:text-slate-400 transition-colors">10 mins ago</span>
                                            </div>
                                        </div>
                                        <button 
                                            className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-300 hover:text-red-500 transition-all hover:bg-red-50 rounded-lg"
                                            title="Delete"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Variant C: Thumbnail */}
                    <div className="mt-8 bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Vertical Archive List - Variant C (Thumbnail)</h3>
                        <div className="w-[320px] h-[360px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent space-y-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="group relative overflow-hidden bg-white rounded-xl shadow-[0_2px_2px_#CAEBFF] hover:shadow-[0_4px_8px_#CAEBFF] border border-slate-50 hover:border-indigo-100 transition-all cursor-pointer hover:-translate-y-0.5">
                                    <div className="flex h-20">
                                        {/* Thumbnail Placeholder */}
                                        <div className="w-24 bg-slate-100 flex items-center justify-center shrink-0 border-r border-slate-50">
                                            <ImageIcon size={20} className="text-slate-300" />
                                        </div>
                                        <div className="flex-1 p-3 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-sm font-bold text-slate-700 leading-tight">Level {i} - Boss Fight</h4>
                                                 <button className="text-slate-300 hover:text-red-400 transition-colors -mt-1 -mr-1 p-1 rounded-md hover:bg-red-50">
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                 <Clock size={10} className="text-slate-300" />
                                                 <span className="text-[10px] text-slate-400 font-medium font-mono">2026/02/11 11:42</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* --- MODALS & OVERLAYS --- */}
                <section id="modals" className="space-y-6">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200/60">
                        <AlertCircle size={18} className="text-[#818CF8]" />
                        <h2 className="text-xl font-bold text-slate-700">Modals & Popups</h2>
                    </div>

                    <div className="bg-slate-100/50 p-8 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3 bg-[#818CF8] hover:bg-indigo-500 text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(129,140,248,0.3)] hover:-translate-y-0.5 transition-all"
                        >
                            Open Demo Modal
                        </button>
                        <button 
                            onClick={() => setIsDangerModalOpen(true)}
                            className="px-8 py-3 bg-white border border-rose-100 text-rose-500 hover:bg-rose-50 font-bold rounded-xl shadow-[0_2px_2px_rgba(244,63,94,0.1)] hover:-translate-y-0.5 transition-all"
                        >
                            Danger Action
                        </button>
                        <button 
                            onClick={() => setIsAssetModalOpen(true)}
                            className="px-8 py-3 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold rounded-xl shadow-sm hover:-translate-y-0.5 transition-all"
                        >
                            Asset Library
                        </button>
                    </div>

                    {/* Modal Implementation */}
                    {isModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <div 
                                className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm animate-in fade-in duration-200"
                                onClick={() => setIsModalOpen(false)}
                            ></div>
                            
                            {/* Modal Content */}
                            <div className="relative bg-white/95 backdrop-blur-xl w-full max-w-sm p-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50 animate-in zoom-in-95 duration-200">
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-3">
                                        <AlertCircle size={28} className="text-[#818CF8]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">Example Modal</h3>
                                    <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                        This is a standard modal component used for specialized interactions, confirmations, or detailed views.
                                    </p>
                                    
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={() => setIsModalOpen(false)}
                                            className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl text-sm transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            onClick={() => setIsModalOpen(false)}
                                            className="flex-1 py-2.5 bg-[#818CF8] hover:bg-indigo-500 text-white font-bold rounded-xl text-sm shadow-md transition-colors"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Danger Modal Implementation */}
                    {isDangerModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <div 
                                className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm animate-in fade-in duration-200"
                                onClick={() => setIsDangerModalOpen(false)}
                            ></div>
                            
                            {/* Modal Content */}
                            <div className="relative bg-white/95 backdrop-blur-xl w-full max-w-sm p-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(244,63,94,0.15)] border border-rose-100 animate-in zoom-in-95 duration-200">
                                <button 
                                    onClick={() => setIsDangerModalOpen(false)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-4 transform -rotate-3">
                                        <Trash2 size={28} className="text-rose-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">Delete Archive?</h3>
                                    <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                        Are you sure you want to delete this archive? This action cannot be undone and all data will be lost.
                                    </p>
                                    
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={() => setIsDangerModalOpen(false)}
                                            className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl text-sm transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            onClick={() => setIsDangerModalOpen(false)}
                                            className="flex-1 py-2.5 bg-rose-400 hover:bg-rose-500 text-white font-bold rounded-xl text-sm shadow-md shadow-rose-200 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Asset Library Modal Implementation */}
                    {isAssetModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <div 
                                className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm animate-in fade-in duration-200"
                                onClick={() => setIsAssetModalOpen(false)}
                            ></div>
                            
                            {/* Modal Content - Large & Complex */}
                            <div className="relative bg-white w-full max-w-5xl h-[650px] rounded-2xl shadow-2xl flex overflow-hidden animate-in zoom-in-95 duration-200">
                                {/* Left Sidebar */}
                                <div className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
                                    <div className="p-4 border-b border-slate-100">
                                        <div className="flex items-center gap-3 text-slate-700 font-bold">
                                            <div className="w-8 h-8 bg-[#818CF8] rounded-lg flex items-center justify-center text-white">
                                                <Folder size={18} fill="currentColor" />
                                            </div>
                                            <span>素材库</span>
                                        </div>
                                        <div className="text-[10px] text-slate-400 mt-1 pl-11 truncate">游戏 ID: 7abd155...</div>
                                    </div>
                                    
                                    <div className="flex-1 overflow-y-auto p-3 space-y-1">
                                        <div className="text-xs font-bold text-slate-400 px-3 py-2">文件夹</div>
                                        {/* Folder Item - Selected */}
                                        <button className="w-full flex items-center justify-between px-3 py-2.5 bg-indigo-50 text-[#818CF8] rounded-lg text-sm font-medium">
                                            <div className="flex items-center gap-2">
                                                <Folder size={16} fill="currentColor" className="text-[#818CF8]" />
                                                <span>根目录</span>
                                            </div>
                                            <span className="text-xs bg-indigo-100 text-[#818CF8] px-1.5 py-0.5 rounded">0</span>
                                        </button>
                                        
                                        {/* Other Folders */}
                                        {[
                                            { name: '背景图片', count: 1, icon: ImageIcon, color: 'text-amber-500' },
                                            { name: '角色头像', count: 0, icon: User, color: 'text-blue-500' },
                                            { name: 'UI元素', count: 0, icon: LayoutGrid, color: 'text-orange-500' },
                                            { name: '音效', count: 0, icon: Music, color: 'text-slate-600' },
                                            { name: '背景音乐', count: 0, icon: Music, color: 'text-slate-600' }
                                        ].map((folder) => (
                                            <button key={folder.name} className="w-full flex items-center justify-between px-3 py-2.5 text-slate-600 hover:bg-slate-100 rounded-lg text-sm transition-colors">
                                                <div className="flex items-center gap-2">
                                                    <folder.icon size={16} className={folder.color} />
                                                    <span>{folder.name}</span>
                                                </div>
                                                <span className="text-xs text-slate-400">{folder.count}</span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="p-3 border-t border-slate-200">
                                        <button className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-[#818CF8] font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                                            <Plus size={16} />
                                            新建文件夹
                                        </button>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="flex-1 flex flex-col bg-white">
                                    {/* Header */}
                                    <div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 shrink-0">
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            {/* Breadcrumbs or Filters could go here */}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="px-4 py-2 bg-white border border-slate-100 hover:bg-indigo-50 text-[#818CF8] rounded-lg text-sm font-bold transition-all flex items-center gap-2">
                                                <Upload size={16} />
                                                上传文件
                                            </button>
                                            <button className="px-4 py-2 bg-white border border-slate-100 hover:bg-indigo-50 text-[#818CF8] rounded-lg text-sm font-bold transition-all flex items-center gap-2">
                                                <LinkIcon size={16} />
                                                添加链接
                                            </button>
                                            <button 
                                                onClick={() => setIsAssetModalOpen(false)}
                                                className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors ml-2"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content Area - Empty State */}
                                    <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-slate-300">
                                        {/* Placeholder logic for content */}
                                        <div className="w-full h-full border-2 border-dashed border-slate-100 rounded-xl flex items-center justify-center flex-col gap-4">
                                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
                                                <Folder size={40} className="text-slate-200" />
                                            </div>
                                            <p className="font-medium text-slate-400">暂无素材</p>
                                        </div>
                                    </div>

                                    {/* Footer / Pagination */}
                                    <div className="h-14 border-t border-slate-100 px-6 flex items-center justify-end shrink-0 bg-slate-50/30">
                                        <ConfigProvider
                                            theme={{
                                                token: {
                                                    colorPrimary: '#818CF8',
                                                    colorText: '#64748B',            // Slate-500
                                                    colorTextDisabled: '#94A3B8',    // Slate-400
                                                    controlItemBgActive: '#EEF2FF',  // Indigo-50
                                                    borderRadius: 6,
                                                },
                                            }}
                                        >
                                            <Pagination 
                                                size="small" 
                                                total={0} 
                                                showSizeChanger 
                                                showQuickJumper 
                                                defaultPageSize={24}
                                                pageSizeOptions={['24', '48', '96']}
                                            />
                                        </ConfigProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* --- BADGES & TAGS --- */}
                <section id="badges" className="space-y-6">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200/60">
                        <CheckCircle2 size={18} className="text-[#818CF8]" />
                        <h2 className="text-xl font-bold text-slate-700">Badges & Tags</h2>
                    </div>

                    <div className="flex flex-wrap gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                        {/* Private Badge */}
                         <div className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-md flex items-center gap-1.5 border border-white/10 shadow-sm">
                            <Lock size={10} className="text-slate-300" />
                            <span className="text-[10px] font-bold text-slate-200 leading-none">Private</span>
                        </div>

                        {/* Published Badge */}
                        <div className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-md flex items-center gap-1.5 border border-white/10 shadow-sm">
                            <Globe size={10} className="text-emerald-400" />
                            <span className="text-[10px] font-bold text-emerald-100 leading-none">Published</span>
                        </div>

                        {/* Light Mode Badges (as requested in tweaks) */}
                        <div className="px-2 py-1 bg-white border border-slate-100 rounded-md flex items-center gap-1.5 shadow-sm">
                            <Lock size={10} className="text-[#818CF8]" />
                            <span className="text-[10px] font-bold text-[#818CF8] leading-none">Private Light</span>
                        </div>

                        <div className="px-2 py-1 bg-white border border-slate-100 rounded-md flex items-center gap-1.5 shadow-sm">
                            <Globe size={10} className="text-emerald-500" />
                            <span className="text-[10px] font-bold text-emerald-500 leading-none">Published Light</span>
                        </div>

                         {/* Outline Tags */}
                         <span className="px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-[10px] font-bold text-indigo-500 uppercase tracking-wide">
                            Beta
                        </span>
                        <span className="px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-[10px] font-bold text-orange-500 uppercase tracking-wide">
                            New
                        </span>
                    </div>
                </section>

            </div>

      </main>
    </div>
  );
}
