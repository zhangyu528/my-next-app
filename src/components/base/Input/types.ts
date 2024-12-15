import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  appearance?: 'default';
  inputSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  success?: boolean;
}