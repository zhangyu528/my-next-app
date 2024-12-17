'use client';

import { buttonVariants } from '@/styles/theme/buttons';
import { ButtonProps } from './types';

export default function Button({ 
  children, 
  onClick, 
  styleType = 'primary',
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={[
        buttonVariants[styleType],
        className
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
} 