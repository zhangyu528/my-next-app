'use client';

import { buttonStyles } from '@/styles/theme/buttons';
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
        buttonStyles[styleType],
        className
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
} 