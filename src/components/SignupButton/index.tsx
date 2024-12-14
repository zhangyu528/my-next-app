'use client';

import { signupButtonStyles } from './styles';
import ArrowIcon from '../icons/ArrowIcon';

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
        <span className={signupButtonStyles.icon}>
          <ArrowIcon />
        </span>
        Get started for free
      </span>
    </a>
  );
} 