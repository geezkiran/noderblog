import React from 'react';
import { cn } from '@/lib/utils';

const SectionBadge = ({ children, className }) => {
  return (
    <span className={cn(
      "text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-archivo font-normal mb-4 block",
      className
    )}>
      {children}
    </span>
  );
};

export default SectionBadge;
