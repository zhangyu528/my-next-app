'use client';

import { buttonStyles } from '@/styles/buttons';
import { ButtonProps } from './types';

export default function Button({ 
  children, 
  onClick, 
  variant = 'default',
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${buttonStyles.variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 