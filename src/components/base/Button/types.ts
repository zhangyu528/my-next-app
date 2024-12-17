import { ButtonHTMLAttributes } from 'react';
import { buttonVariants } from '@/styles/theme/buttons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: keyof typeof buttonVariants;
  className?: string;
} 