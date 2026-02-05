import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-2 mt-12 mb-20 text-xs text-[#A5B4FC]">
      <button className="p-1 hover:text-[#818CF8] disabled:opacity-50">
        <ChevronLeft size={16} />
      </button>
      
      <button className="w-6 h-6 flex items-center justify-center rounded bg-[#818CF8] text-white font-medium">1</button>
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#E0E7FF] hover:text-[#818CF8]">2</button>
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#E0E7FF] hover:text-[#818CF8]">3</button>
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#E0E7FF] hover:text-[#818CF8]">4</button>
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#E0E7FF] hover:text-[#818CF8]">5</button>
      
      <span className="mx-1">...</span>
      
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#E0E7FF] hover:text-[#818CF8]">50</button>

      <button className="p-1 hover:text-[#818CF8]">
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
