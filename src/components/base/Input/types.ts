import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'search' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  success?: boolean;
} 