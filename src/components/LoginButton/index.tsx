'use client';

import { loginButtonStyles } from './styles';
import ArrowIcon from '../icons/ArrowIcon';

interface LoginButtonProps {
  onClick: () => void;
  variant?: 'default' | 'primary';
}

export default function LoginButton({ onClick, variant = 'default' }: LoginButtonProps) {
  return (
    <a
      href="/login"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={variant === 'default' ? loginButtonStyles.button : loginButtonStyles.primaryButton}
    >
      <span className={loginButtonStyles.label}>
        <span className={loginButtonStyles.icon}>
          <ArrowIcon />
        </span>
        Log in
      </span>
    </a>
  );
} 