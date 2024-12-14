'use client';

import { signupButtonStyles } from './styles';

interface SignupButtonProps {
  onClick: () => void;
}

export default function SignupButton({ onClick }: SignupButtonProps) {
  return (
    <a
      href="/signup"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={signupButtonStyles.button}
    >
      <span className={signupButtonStyles.label}>
        Get started for free
      </span>
    </a>
  );
} 