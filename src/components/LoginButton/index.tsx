'use client';

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
      className="px-6 py-3 h-12 border border-gray-700 rounded-lg flex items-center font-semibold text-[16px]"
    >
      <span className="inline-block transition-all duration-300 hover:pl-2">
        Log in
      </span>
    </a>
  );
} 