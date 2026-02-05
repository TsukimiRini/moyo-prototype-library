export default function Mascot() {
  return (
    <div className="fixed bottom-4 right-8 z-50 pointer-events-none">
      {/* Worm/cat mascot similar to logo */}
      <svg viewBox="0 0 120 60" className="w-28 h-14 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body waves */}
        <path 
          d="M10 45 Q 25 20 40 45 T 70 45 Q 85 20 90 35 L 90 20 Q 90 8 105 8 Q 115 8 115 20 L 115 35" 
          stroke="#6366F1" 
          strokeWidth="14" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          className="opacity-90"
        />
        {/* Ears */}
        <polygon points="92,15 97,2 107,15" fill="#6366F1" />
        <polygon points="108,15 113,2 118,15" fill="#6366F1" />
        {/* Eyes */}
        <circle cx="100" cy="22" r="2.5" fill="white" />
        <circle cx="110" cy="22" r="2.5" fill="white" />
      </svg>
    </div>
  );
}
