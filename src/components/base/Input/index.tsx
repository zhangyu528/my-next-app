'use client';

import { inputStyles } from '@/styles/theme/inputs';
import { InputProps } from './types';

export default function Input({
  appearance = 'default',
  inputSize = 'md',
  error,
  success,
  disabled,
  className = '',
  ...props
}: InputProps) {
  const baseStyle = inputStyles.base;
  const appearanceStyle = inputStyles.appearances[appearance];
  const sizeStyle = inputStyles.sizes[inputSize];
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
        appearanceStyle,
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