'use client';

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
      className="px-6 py-3 h-12 bg-white text-black rounded-lg flex items-center font-semibold text-[16px]"
    >
      <span className="inline-block transition-all duration-300 hover:pl-2">
        Get started for free
      </span>
    </a>
  );
} 