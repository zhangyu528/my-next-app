'use client';

import { inputStyles } from '@/styles/theme/inputs';
import { InputProps } from './types';

export default function Input({
  variant = 'default',
  size = 'md',
  error,
  success,
  disabled,
  className = '',
  ...props
}: InputProps) {
  const baseStyle = inputStyles.variants[variant];
  const sizeStyle = inputStyles.sizes[size];
  const stateStyle = error 
    ? inputStyles.states.error 
    : success 
    ? inputStyles.states.success 
    : '';
  const disabledStyle = disabled ? inputStyles.states.disabled : '';

  return (
    <input
      className={`${baseStyle} ${sizeStyle} ${stateStyle} ${disabledStyle} ${className}`}
      disabled={disabled}
      {...props}
    />
  );
} 