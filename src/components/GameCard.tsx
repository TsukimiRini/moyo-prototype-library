import { Play, MoreHorizontal, Clock, Gamepad2, Save, Heart, MessageCircle, Send, Star, Sparkles, SkipBack, SkipForward, Pause } from 'lucide-react';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  author?: string;
  date?: string;
  isComingSoon?: boolean;
  variant?: 'recent' | 'recent-fade' | 'recent-pixel' | 'recent-halftone' | 'recent-grid-fade' | 'library' | 'library-polaroid' | 'library-holographic' | 'library-elegant' | 'library-elegant-rounded';
  saveName?: string;
}

// ... internal helper functions unchanged ...
const pseudoRandom = (x: number, y: number) => {
  return Math.abs(Math.sin(x * 12.9898 + y * 4.1414) * 43758.5453) % 1;
};

// ... HalftoneGridOverlay unchanged ...
function HalftoneGridOverlay() {
  const width = 400; const height = 200;
  const solidRatio = 0.25; const fadeEndRatio = 0.85; 
  const fadeHeight = fadeEndRatio - solidRatio;
  const rows = 80; const cols = 160; 
  const cellW = width / cols; const cellH = height / rows; 
  const dots = []; const maxR = 2.0; 
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const ratio = y / rows; let r = 0;
      if (ratio < solidRatio) continue; 
      else if (ratio < fadeEndRatio) {
          const fadeProgress = (ratio - solidRatio) / fadeHeight;
          r = maxR * (1 - Math.pow(fadeProgress, 1.1));
      }
      else continue;
      if (r > 0.05) dots.push(<circle key={`${x}-${y}`} cx={x * cellW + cellW/2} cy={y * cellH + cellH/2} r={r} fill="white" />);
    }
  }
  return (<svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none"><rect x="0" y="0" width={width} height={height * (solidRatio + 0.02)} fill="white" />{dots}</svg>);
}

export default function GameCard({
  title,
  description,
  imageSrc,
  author,
  date,
  isComingSoon = false,
  variant = 'library',
  saveName
}: GameCardProps) {

  // ... Previous Variants hidden ...
  if (variant === 'recent') return <div className="hidden"></div>;
  if (variant === 'recent-halftone') return <div className="hidden"></div>;
  if (variant === 'recent-grid-fade') {
     // ... Unchanged ...
     return (
      <div className="bg-white rounded-[28px] overflow-hidden relative flex flex-col h-[200px] shadow-[0_2px_2px_#CAEBFF] hover:shadow-[0_4px_4px_#CAEBFF] transition-all duration-300 hover:-translate-y-1 group border border-indigo-50/50">
         <div className="relative z-20 p-5 flex flex-col h-full">
             <div className="flex justify-between items-start">
                 <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1.5">
                          <div className="bg-indigo-50 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 border border-indigo-100">
                             <Save size={10} className="text-indigo-400" />
                             <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{saveName || 'Auto Save'}</span>
                          </div>
                      </div>
                      <h3 className="font-extrabold text-[22px] text-slate-800 tracking-tight leading-tight z-30 relative">{title}</h3>
                 </div>
             </div>
             <div className="mt-auto z-20 flex items-center gap-3 text-xs font-semibold text-white/95 drop-shadow-md pb-1">
                 <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 hover:bg-black/30 transition-colors cursor-default">
                     <Clock size={12} className="text-indigo-200" />
                     <span>{date || 'Played recently'}</span>
                  </div>
             </div>
         </div>
         <div className="absolute inset-0 z-0">
             {imageSrc ? (
                <div className="relative w-full h-full bg-slate-100">
                   <Image src={imageSrc} alt={title} fill className="object-cover" unoptimized />
                </div>
             ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500"></div>
             )}
         </div>
         <HalftoneGridOverlay />
         <div className="absolute bottom-4 right-4 z-30">
            <div className="w-10 h-10 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#818cf8] transition-colors cursor-pointer group-hover:scale-110 duration-200 border border-indigo-50">
               <Play fill="currentColor" size={18} className="ml-0.5" />
            </div>
         </div>
      </div>
    );
  }

  // Variant F: Classic Polaroid (Unchanged)
  if (variant === 'library-polaroid') {
      // ... Unchanged ...
      return (
      <div className="bg-white p-3 pb-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:rotate-1 transition-all duration-300 relative flex flex-col h-auto group transform-gpu">
         <div className={`relative w-full aspect-square bg-slate-100 shadow-inner mb-4 overflow-hidden ${!imageSrc && 'flex items-center justify-center'}`}>
             {imageSrc ? (
                 <Image src={imageSrc} alt={title} fill className="object-cover" unoptimized />
             ) : (
                <Gamepad2 className="text-slate-300" size={40} />
             )}
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-orange-500/10 opacity-30 pointer-events-none mix-blend-overlay"></div>
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[1px]">
                <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-xl scale-90 group-hover:scale-100 transition-all cursor-pointer">
                    <Play fill="currentColor" size={24} className="ml-1" />
                </div>
             </div>
         </div>
         <div className="px-2 flex flex-col items-center text-center">
            <h3 className={`font-serif text-lg text-slate-800 tracking-tight leading-none mb-2 ${isComingSoon ? 'opacity-50 italic' : ''}`}>
               {title}
            </h3>
            <p className="font-serif text-[10px] text-slate-400 italic">
               {date || 'Memories'}
            </p>
         </div>
      </div>
    );
  }

  // Variant H/I: Elegant Blue Polaroid (Refined)
  // Replaced 'library-holographic' with 'library-elegant' for clarity in request fulfillment, 
  // but keeping 'library-elegant' mapped to the new design.
  if (variant === 'library-elegant' || variant === 'library-holographic' || variant === 'library-elegant-rounded') {
    const bgRoundClass = '';
    const glowRoundClass = 'rounded-lg';
    // Use user requested shadow for rounded variant, default shadow-lg for others
    const shadowClass = variant === 'library-elegant-rounded' ? 'shadow-[0_2px_2px_#CAEBFF]' : 'shadow-lg';

    const hoverEffectClass = variant === 'library-elegant-rounded' 
      ? 'hover:-translate-y-1 hover:rotate-1 hover:shadow-[0_4px_4px_#CAEBFF]' 
      : 'hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.2)]';
      
    const aspectRatioClass = variant === 'library-elegant-rounded' ? 'aspect-square' : 'aspect-[3/4]';
    const imageRoundedClass = '';

    return (
      <div className={`relative group transition-all duration-500 ${hoverEffectClass} ${bgRoundClass}`}>
        
        {/* Soft Blue Glow Behind */}
        <div className={`absolute -inset-0.5 bg-gradient-to-b from-blue-50 to-indigo-100 blur-sm opacity-50 group-hover:opacity-100 transition duration-500 ${glowRoundClass}`}></div>
        
        {/* Card Body - Crisp White with thick borders */}
        <div className={`relative bg-white p-5 pb-5 ${shadowClass} backdrop-blur-sm overflow-hidden border border-slate-100 flex flex-col items-center ${bgRoundClass}`}>
             
            {/* Image Container - Vertical Portrait Layout aspect-[3/4] */}
            {/* Added a thin border around the image to separate it from the white frame nicely */}
            <div className={`relative w-full ${aspectRatioClass} ${imageRoundedClass} overflow-hidden bg-slate-50 mb-5 shadow-inner border border-slate-100 ${!imageSrc && 'flex items-center justify-center'}`}>
                {imageSrc ? (
                    <Image src={imageSrc} alt={title} fill className={`object-cover opacity-100 ${variant === 'library-elegant-rounded' ? '' : 'group-hover:scale-[1.03]'} transition-transform duration-700`} unoptimized />
                ) : (
                    <div className="text-slate-300 font-serif italic text-xs">No Image</div>
                )}
                
                {/* Overlay & Play Button Logic */}
                {variant === 'library-elegant-rounded' ? (
                   <>
                     {/* Style D (like B): Center Play Button + Polaroid Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-orange-500/10 opacity-30 pointer-events-none mix-blend-overlay"></div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#818cf8] shadow-xl scale-90 group-hover:scale-100 transition-all cursor-pointer">
                            <Play fill="currentColor" size={24} className="ml-1" />
                        </div>
                     </div>
                   </>
                ) : (
                   <>
                     {/* Style C: Original Subtle Sheen + Bottom Right Button */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
                     <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 translate-y-2 group-hover:translate-y-0">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                            <Play fill="currentColor" size={16} className="ml-0.5" />
                        </div>
                     </div>
                   </>
                )}
            </div>

            {/* Content Area - Clean Layout */}
            <div className="w-full flex flex-col relative px-1"> 
                 
                 <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-medium text-lg text-[#818cf8] tracking-tight leading-tight">
                        {title}
                      </h3>
                      <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest shrink-0 ml-2">
                        {date || 'NOW'}
                      </span>
                 </div>

                 <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-normal">
                          {author || 'Unknown Artist'}
                      </span>
                 </div>

                 {/* Signature Space - Reserved Area */}
                 {/* Visual placeholder for where the signature will go */}
                 <div className="mt-4 w-full h-8 flex items-center justify-center relative">
                      <div className="absolute bottom-0 w-2/3 h-[1px] bg-slate-100"></div>
                      <span className="text-[9px] text-slate-200 uppercase tracking-[0.2em] select-none">Signature Area</span>
                 </div>
            </div>
        </div>
      </div>
    );
  }

  // Variant: Library (Default Instagram / "Like Before")
  if (variant === 'library') {
    return (
      <div className="bg-white rounded-2xl p-4 pb-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative flex flex-col h-auto border border-slate-100/60 group">
        
        {/* Header - Avatar + Name */}
        <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2.5">
               <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center overflow-hidden">
                  {imageSrc ? (
                     <Image src={imageSrc} width={32} height={32} alt="avatar" className="object-cover w-full h-full" unoptimized />
                  ) : (
                     <span className="text-[10px] font-bold text-indigo-400">?</span>
                  )}
               </div>
               <span className="text-sm font-bold text-slate-800">{author || 'user_xpu6'}</span>
            </div>
            <MoreHorizontal size={20} className="text-slate-400 cursor-pointer hover:text-slate-600" />
        </div>
  
        {/* Main Image */}
        <div className={`rounded-xl overflow-hidden relative w-full aspect-[4/5] bg-slate-100 mb-3 shadow-sm`}>
          {imageSrc ? (
              <Image src={imageSrc} alt={title} fill className="object-cover" unoptimized />
          ) : (
             <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <Gamepad2 className="text-indigo-200" size={32} />
             </div>
          )}
          
          {/* Play Button Overlay - Appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[1px]">
             <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-indigo-600 shadow-xl scale-90 group-hover:scale-100 transition-all cursor-pointer hover:bg-indigo-600 hover:text-white border border-white/50">
                <Play fill="currentColor" size={24} className="ml-1" />
             </div>
          </div>
        </div>
  
        {/* Action Icons */}
        <div className="flex items-center gap-4 mb-3 px-1 text-slate-800">
            <Heart size={22} className="cursor-pointer hover:text-red-500 hover:fill-red-50 transition-colors" />
            <MessageCircle size={22} className="cursor-pointer hover:text-indigo-500 transition-colors" />
            <Send size={22} className="cursor-pointer hover:text-indigo-500 -mt-0.5 transition-colors" />
            <div className="flex-1"></div>
        </div>
  
        {/* Text Content */}
        <div className="px-1 flex flex-col gap-1">
          <h3 className="font-bold text-base text-slate-900 leading-tight">
             {title}
          </h3>
          <p className="text-sm text-slate-500 font-normal leading-relaxed">
             {description || 'No Description'}
          </p>
          <div className="mt-2 text-xs text-slate-400 font-normal">
             {date || '2026年1月1日'}
          </div>
        </div>
      </div>
    );
  }

  // Fallback (Should be covered by variants above but satisfy TS)
  return <div className="hidden"></div>;
}
