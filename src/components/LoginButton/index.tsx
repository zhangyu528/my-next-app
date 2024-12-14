'use client';

import { loginButtonStyles } from './styles';
import ArrowIcon from '../icons/ArrowIcon';

interface LoginButtonProps {
  onClick: () => void;
}

export default function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <a
      href="/login"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={loginButtonStyles.button}
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