'use client';

import Button from '../../index';
import ArrowIcon from '@/components/icons/ArrowIcon';
import { arrowButtonStyles } from './styles';
import { ArrowButtonProps } from './types';

export default function ArrowButton({ 
  children, 
  onClick, 
  styleType = 'primary',
  className = '',
  ...props 
}: ArrowButtonProps) {
  return (
    <Button
      onClick={onClick}
      styleType={styleType}
      className={[
        arrowButtonStyles.wrapper,
        className
      ].filter(Boolean).join(' ')}
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
