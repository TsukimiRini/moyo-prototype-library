import React from 'react';

/**
 * Loading Component with Multiple Variants
 * @param {'spinner' | 'dots' | 'pulse' | 'ring'} variant - Type of loader to display
 * @param {'sm' | 'md' | 'lg'} size - Size of the loader
 * @param {string} color - Tailwind color class (e.g., 'text-indigo-500')
 */
interface LoadingProps {
    variant?: 'spinner' | 'dots' | 'ring' | 'spinner-text' | 'spinner-vertical' | 'spinner-thick' | 'spinner-combo';
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    text?: string;
    className?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
    variant = 'spinner', 
    size = 'md', 
    className = '',
    text 
}) => {
    
    // Size Mappings
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    };

    const dotSizes = {
        sm: 'w-1 h-1',
        md: 'w-2 h-2',
        lg: 'w-3 h-3',
    };

    // Common Color Class (Indigo-500 default if not specified in parent, but here we hardcode or accept prop? 
    // The previous implementation took a 'color' prop string like 'text-indigo-500'. 
    // Let's stick to using 'text-current' so parent can control color via className text-color.
    // But for this component library, providing a default color is nice.
    const defaultColor = 'text-[#818CF8]'; 

    // --- Variant: Spiner (Simple) ---
    if (variant === 'spinner') {
        return (
            <div className={`animate-spin inline-block rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]} ${defaultColor} ${className}`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    // --- Variant: Dots (Bouncing) ---
    if (variant === 'dots') {
        return (
            <div className={`flex items-center gap-1 ${className}`} role="status">
                <div className={`${dotSizes[size]} rounded-full ${defaultColor} bg-current animate-[bounce_1s_infinite_0ms]`}></div>
                <div className={`${dotSizes[size]} rounded-full ${defaultColor} bg-current animate-[bounce_1s_infinite_200ms]`}></div>
                <div className={`${dotSizes[size]} rounded-full ${defaultColor} bg-current animate-[bounce_1s_infinite_400ms]`}></div>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    // --- Variant: Ring (Elegant) ---
    if (variant === 'ring') {
       return (
            <div className={`relative ${sizeClasses[size]} ${className}`}>
                <div className="absolute w-full h-full rounded-full border-2 border-slate-100"></div>
                <div className={`absolute w-full h-full rounded-full border-2 border-transparent border-t-[#818CF8] animate-spin`}></div>
            </div>
       );
    }

    // --- Variant: Spinner with Text (Horizontal) ---
    if (variant === 'spinner-text') {
        return (
             <div className={`flex items-center gap-2 ${defaultColor} ${className}`} role="status">
                <div className={`animate-spin inline-block rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]}`}></div>
                <span className="font-medium text-sm">{text || '加载中...'}</span>
             </div>
        );
    }

    // --- Variant: Spinner with Text (Vertical) ---
    if (variant === 'spinner-vertical') {
        return (
             <div className={`flex flex-col items-center gap-2 ${defaultColor} ${className}`} role="status">
                <div className={`animate-spin inline-block rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]}`}></div>
                <span className="font-medium text-xs uppercase tracking-wider">{text || '加载中...'}</span>
             </div>
        );
    }

    // --- Variant: Thick Rounded Spinner (SVG) ---
    if (variant === 'spinner-thick') {
         // Custom sizes for SVG if needed, but sizeClasses usually work for w/h
         // Use existing size mappings.
        return (
            <div className={`inline-block ${className}`} role="status">
                <svg className={`animate-spin ${sizeClasses[size]} ${defaultColor}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40 200" strokeLinecap="round" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    // --- Variant: Combo (Spinner + Text + Dots) ---
    if (variant === 'spinner-combo') {
        const miniDotSizes = {
            sm: 'w-0.5 h-0.5',
            md: 'w-1 h-1',
            lg: 'w-1.5 h-1.5',
        };
        const currentDotSize = miniDotSizes[size];

        return (
             <div className={`flex flex-col items-center gap-3 ${defaultColor} ${className}`} role="status">
                <svg className={`animate-spin ${sizeClasses[size]}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40 200" strokeLinecap="round" />
                </svg>
                <div className="flex items-baseline font-medium text-xs uppercase tracking-wider">
                    <span>{text || '加载中'}</span>
                    <span className="flex ml-0.5 gap-0.5">
                        <span className={`rounded-full bg-current ${currentDotSize} animate-[bounce_1s_infinite_0ms]`}></span>
                        <span className={`rounded-full bg-current ${currentDotSize} animate-[bounce_1s_infinite_200ms]`}></span>
                        <span className={`rounded-full bg-current ${currentDotSize} animate-[bounce_1s_infinite_400ms]`}></span>
                    </span>
                </div>
             </div>
        );
    }

    return null;
};

export default Loading;
