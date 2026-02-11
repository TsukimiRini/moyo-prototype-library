'use client';

import { Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f2fcff] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px] opacity-40"></div>
      </div>

      {/* Main Card */}
      <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-[24px] shadow-[0_2px_2px_#CAEBFF] w-full max-w-sm border border-white/50">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:-rotate-6">
                <svg width="24" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#6366F1]">
                    <path 
                        d="M4 14 C 4 14, 10 4, 18 10 C 26 16, 30 14, 34 10 L 34 6 C 34 6, 38 2, 42 2 C 46 2, 46 6, 46 10 L 46 14" 
                        stroke="currentColor" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">欢迎回来</h1>
        </div>

        {/* Input Form */}
        <form className="space-y-4">
            <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 ml-1">邮箱地址</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className="text-slate-300 group-focus-within:text-[#818CF8] transition-colors" />
                    </div>
                    <input 
                        type="email" 
                        placeholder="name@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#818CF8]/20 focus:border-[#818CF8] transition-all hover:border-slate-200"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <div className="flex items-center justify-between ml-1">
                    <label className="text-xs font-bold text-slate-500">密码</label>
                    <Link href="#" className="text-[10px] font-bold text-[#818CF8] hover:text-indigo-500 transition-colors">
                        忘记密码?
                    </Link>
                </div>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={16} className="text-slate-300 group-focus-within:text-[#818CF8] transition-colors" />
                    </div>
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#818CF8]/20 focus:border-[#818CF8] transition-all hover:border-slate-200"
                    />
                </div>
            </div>

            <button className="w-full py-2.5 bg-[#818CF8] hover:bg-indigo-500 text-white text-sm font-bold rounded-xl shadow-[0_4px_14px_rgba(129,140,248,0.3)] hover:shadow-[0_6px_20px_rgba(129,140,248,0.23)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-200 flex items-center justify-center gap-2 group">
                <span>登录</span>
                <ArrowRight size={16} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 font-medium">
                还没有账号? {' '}
                <Link href="#" className="text-[#818CF8] hover:text-indigo-600 font-bold transition-colors">
                    立即注册
                </Link>
            </p>
        </div>

      </div>
      
      {/* Simple Footer Note */}
      <div className="mt-8 text-slate-300 text-[10px] font-medium tracking-wider">
        © 2026 MOYO PROTOTYPE LIBRARY
      </div>

    </div>
  );
}
