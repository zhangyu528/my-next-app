'use client';

import Button from '../Button';
import ArrowIcon from '@/components/icons/ArrowIcon';
import { arrowButtonStyles } from './styles';
import { ArrowButtonProps } from './types';

export default function ArrowButton({ 
  children, 
  onClick, 
  variant = 'default',
  className = '',
  ...props 
}: ArrowButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={`relative overflow-hidden hover:rounded-none transition-[border-radius] duration-300 ${className}`}
      {...props}
    >
      <span className={arrowButtonStyles.label}>
        <span className={arrowButtonStyles.icon}>
          <ArrowIcon />
        </span>
        {children}
      </span>
    </Button>
  );
} 