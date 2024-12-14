const baseStyles = [
  "group",
  "px-6 py-3 h-12",
  "rounded-lg",
  "flex items-center justify-center",
  "font-semibold text-[16px]",
  "transition-colors"
].join(" ");

export const buttonStyles = {
  default: [
    baseStyles,
    "bg-white text-gray-900",
    "border border-gray-300",
    "hover:bg-gray-100 hover:border-gray-400"
  ].join(" "),

  primary: [
    baseStyles,
    "bg-blue-600 text-white",
    "hover:bg-blue-700"
  ].join(" "),

  outline: [
    baseStyles,
    "bg-black",
    "border-2 border-gray-300",
    "text-white",
    "hover:bg-gray-900 hover:border-white hover:text-gray-100"
  ].join(" ")
} as const;