export const inputStyles = {
  base: "appearance-none outline-none",
  variants: {
    default: [
      "w-full px-4 py-2",
      "bg-gray-800",
      "rounded-lg",
      "text-white placeholder-gray-400",
      "border border-transparent",
      "hover:border-2 hover:border-gray-500",
      "focus:border-2 focus:border-blue-500",
      "transition-[border-color,border-width]",
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
      "!border !border-red-500",
      "hover:!border-2 !border-red-400",
    ].join(" "),
    success: [
      "!border !border-green-500",
      "hover:!border-2 !border-green-400",
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