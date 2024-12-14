'use client';

import Button from '../Button';
import ArrowIcon from '@/components/icons/ArrowIcon';
import { buttonStyles } from '@/styles/buttons';
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
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <span className={buttonStyles.components.label}>
        <span className={buttonStyles.components.icon}>
          <ArrowIcon />
        </span>
        {children}
      </span>
    </Button>
  );
} 