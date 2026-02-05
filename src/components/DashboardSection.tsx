import { Volume2 } from 'lucide-react';

interface DashboardSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string; // For additional styling
}

export default function DashboardSection({ title, icon, children, className = "" }: DashboardSectionProps) {
  return (
    <section className={`mb-10 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className="text-lg font-bold text-[#818CF8]">{title}</h2>
      </div>
      {children}
    </section>
  );
}
