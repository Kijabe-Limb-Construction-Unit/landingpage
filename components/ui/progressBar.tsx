'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ProgressBarProps {
  amountRaised?: number;
  expectedAmount?: number;
  className?: string;
  barClassName?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  amountRaised,
  expectedAmount,
  className,
  barClassName,
}) => {
  const progressPercentage = amountRaised && expectedAmount 
    ? Math.min((amountRaised / expectedAmount) * 100, 100) 
    : 0;

  return (
    <div 
      className={twMerge(
        'mx-auto w-full h-5 rounded-sm text-center bg-[#9B9C9F] relative overflow-hidden',
        className
      )}
    >
      {/* Progress Bar */}
      <div
        className={twMerge(
          'h-full rounded-sm bg-[#009EE0] transition-all duration-[2000ms] ease-out',
          barClassName
        )}
        style={{
          width: `${progressPercentage}%`,
        }}
      >
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;