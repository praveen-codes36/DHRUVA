import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = 'rounded-md',
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-[var(--surface-2)]/60 ${rounded} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"
        style={{
          backgroundImage:
            'linear-gradient(90deg, transparent 0%, var(--border-strong) 50%, transparent 100%)',
        }}
      />
    </div>
  );
};
