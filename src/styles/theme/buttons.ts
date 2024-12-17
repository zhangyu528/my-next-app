const disabled = [
  "cursor-pointer",
  "disabled:opacity-50",
  "disabled:cursor-not-allowed",
];

const baseStyles = [
  "px-6 py-3 h-10",
  "rounded-lg",
  "flex items-center justify-center",
  "transition-colors duration-300",
  ...disabled
];

const defaultStyles = [
  ...baseStyles,
  "bg-white text-gray-900",
  "border border-gray-300",
  "hover:bg-gray-100",
].join(" ");

const primaryStyles = [
  ...baseStyles,
  "bg-blue-500 text-white",
  "hover:bg-blue-600",
].join(" ");

const outlineStyles = [
  ...baseStyles,
  "bg-black text-white",
  "border-2 border-gray-300",
  "hover:bg-gray-900 hover:border-white hover:text-gray-100",
].join(" ");

export const buttonVariants = {
  default: defaultStyles,

  primary: primaryStyles,

  outline: outlineStyles,
} as const;