export const inputStyles = {
  base: "appearance-none outline-none",
  variants: {
    default: [
      "w-full px-4 py-2",
      "bg-gray-800",
      "rounded-lg",
      "text-white placeholder-gray-400",
      "hover:border border-gray-500",
      "focus:border-blue-500",
      "transition-[border-color]",
      "duration-200",
      "ease-in-out"
    ].join(" ")
  },
  sizes: {
    sm: "h-9 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-lg"
  },
  states: {
    error: [
      "hover: border border-red-400",
    ].join(" "),
    success: [
      "border border-green-500",
      "hover:border border-green-400",
    ].join(" "),
    disabled: "opacity-50 cursor-not-allowed"
  },
  wrapper: {
    default: "relative",
    withIcon: "relative flex items-center"
  },
  icon: {
    left: "absolute left-3 text-gray-400",
    right: "absolute right-3 text-gray-400"
  }
} as const; 