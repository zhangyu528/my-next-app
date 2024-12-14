'use client';

import { loginButtonStyles } from './styles';

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
        Log in
      </span>
    </a>
  );
} 