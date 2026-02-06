import { Volume2 } from 'lucide-react';

interface DashboardSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string; // For additional styling
  action?: React.ReactNode;
}

export default function DashboardSection({ title, icon, children, className = "", action }: DashboardSectionProps) {
  return (
    <section className={`mb-10 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-lg font-bold text-[#818CF8]">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
