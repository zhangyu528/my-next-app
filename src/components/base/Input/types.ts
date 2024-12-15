import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default';
  sizeVariant?: 'sm' | 'md' | 'lg';
  error?: boolean;
  success?: boolean;
} 