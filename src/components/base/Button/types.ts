import { ButtonHTMLAttributes } from 'react';
import { buttonStyles } from '@/styles/theme/buttons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: keyof typeof buttonStyles;
  className?: string;
} 