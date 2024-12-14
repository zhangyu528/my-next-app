'use client';

import { inputStyles } from '@/styles/theme/inputs';
import { InputProps } from './types';

export default function Input({
  variant = 'default',
  sizeVariant = 'md',
  error,
  success,
  disabled,
  className = '',
  ...props
}: InputProps) {
  const baseStyle = inputStyles.base;
  const variantStyle = inputStyles.variants[variant];
  const sizeStyle = inputStyles.sizes[sizeVariant];
  const stateStyle = error 
    ? inputStyles.states.error 
    : success 
    ? inputStyles.states.success 
    : '';
  const disabledStyle = disabled ? inputStyles.states.disabled : '';

  return (
    <input
      className={[
        baseStyle,
        variantStyle,
        sizeStyle,
        stateStyle,
        disabledStyle,
        className
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      {...props}
    />
  );
} 