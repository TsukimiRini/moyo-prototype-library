import { Play, MoreHorizontal, Clock, Gamepad2, Save } from 'lucide-react';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  author?: string;
  date?: string;
  isComingSoon?: boolean;
  variant?: 'recent' | 'recent-fade' | 'recent-pixel' | 'recent-halftone' | 'recent-grid-fade' | 'library';
  saveName?: string;
}

// Pseudo-random function
const pseudoRandom = (x: number, y: number) => {
  return Math.abs(Math.sin(x * 12.9898 + y * 4.1414) * 43758.5453) % 1;
};

// --- Variant E (Final Refined Ultra): Grid Fade Overlay ---
// Higher density. Larger effect area.
function HalftoneGridOverlay() {
  const width = 400; 
  const height = 200;
  
  // CONFIGURATION
  // 1. Solid White Ratio
  const solidRatio = 0.25; 
  // 2. Fade End Ratio
  const fadeEndRatio = 0.85; 

  const fadeHeight = fadeEndRatio - solidRatio;
  
  // Ultra High Density: 80 Rows, 160 Cols -> 2.5px cells.
  // This allows for extremely fine texture.
  const rows = 80; 
  const cols = 160; 
  
  const cellW = width / cols; 
  const cellH = height / rows; 

  const dots = [];
  const maxR = 2.0; 

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      
      const ratio = y / rows; 
      
      let r = 0;
      
      // Phase 1: Solid Area
      if (ratio < solidRatio) {
          continue; 
      } 
      
      // Phase 2: Transition Zone
      else if (ratio < fadeEndRatio) {
          // Normalize ratio within the fade zone (0.0 to 1.0)
          const fadeProgress = (ratio - solidRatio) / fadeHeight;
          
          // Easing: Using Pow 0.8 to make dots shrink faster initially but linger at small sizes longer?
          // No, Pow > 1 keeps them big longer. Pow < 1 shrinks fast.
          // Let's use standard linear fade-out of Area, which implies Radius = sqrt(linear).
          // But visually, just linear radius often looks good.
          // Let's stick to Pow 1.1 for natural feel.
          r = maxR * (1 - Math.pow(fadeProgress, 1.1));
      }
      
      else {
          continue;
      }

      // Allow TINY dots. 
      // Previous threshold was 0.3. Lowering to 0.05 allows "dust" like particles.
      if (r > 0.05) {
          dots.push(
            <circle 
                key={`${x}-${y}`} 
                cx={x * cellW + cellW/2} 
                cy={y * cellH + cellH/2} 
                r={r} 
                fill="white" 
            />
          );
      }
    }
  }

  return (
    <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="absolute inset-0 w-full h-full pointer-events-none z-10" 
        preserveAspectRatio="none"
    >
       {/* Solid White Rect: Covers the solid ratio + tiny overlap */}
       <rect x="0" y="0" width={width} height={height * (solidRatio + 0.02)} fill="white" />
       {dots}
    </svg>
  );
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

  if (variant === 'recent') { /* ... */ return <div className="hidden"></div> } 
  if (variant === 'recent-halftone') { /* ... */ return <div className="hidden"></div> }

  // Variant E: Grid Fade
  if (variant === 'recent-grid-fade') {
    return (
      <div className="bg-white rounded-[28px] overflow-hidden relative flex flex-col h-[200px] shadow-[0_4px_24px_rgba(200,210,255,0.45)] hover:shadow-[0_8px_32px_rgba(180,195,255,0.6)] transition-all duration-300 hover:-translate-y-1 group border border-indigo-50/50">
         
         {/* Top Section */}
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
             
             {/* Bottom Metadata */}
             <div className="mt-auto z-20 flex items-center gap-3 text-xs font-semibold text-white/95 drop-shadow-md pb-1">
                 <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 hover:bg-black/30 transition-colors cursor-default">
                     <Clock size={12} className="text-indigo-200" />
                     <span>{date || 'Played recently'}</span>
                  </div>
             </div>
         </div>

         {/* Bottom Image Layer */}
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
            <div className="w-10 h-10 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-indigo-500 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer group-hover:scale-110 duration-200 border border-indigo-50">
               <Play fill="currentColor" size={18} className="ml-0.5" />
            </div>
         </div>
      </div>
    );
  }

  // Library Card (Unchanged for Library)
  return (
    <div className="bg-white rounded-3xl p-3 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-[320px] border border-transparent group">
      <div className="absolute top-5 right-5 z-20 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
         <MoreHorizontal className="text-white drop-shadow-md" size={24} />
      </div>
      <div className={`flex-1 rounded-3xl mb-3 overflow-hidden relative w-full ${!imageSrc ? 'bg-indigo-50' : ''} shadow-inner`}>
        {imageSrc ? (
          <div className="relative w-full h-full bg-red-100"> 
            <Image src={imageSrc} alt={title} fill className="object-cover" unoptimized />
            <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent"></div>
          </div>
        ) : (
           <div className="w-full h-full flex items-center justify-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full blur-2xl opacity-50"></div>
           </div>
        )}
      </div>
      <div className="px-1 pb-1 flex flex-col">
        <h3 className={`font-bold text-base tracking-tight mb-1 ${isComingSoon ? 'text-indigo-400' : 'text-indigo-600'}`}>
          {title}
        </h3>
        <p className="text-slate-400 text-xs font-medium">{description || 'No Description'}</p>
        
        {author && date && (
          <div className="mt-2 flex items-center gap-2 text-xs text-indigo-300 font-medium">
            <span>{author}</span>
            <span className="text-slate-200">•</span>
            <span>{date}</span>
          </div>
        )}

        <div className="absolute bottom-3 right-3 p-2 text-indigo-300 group-hover:text-indigo-500 transition-colors cursor-pointer group-hover:scale-110 duration-200">
           <Play fill="currentColor" size={28} className="drop-shadow-sm" />
        </div>
      </div>
    </div>
  );
}
