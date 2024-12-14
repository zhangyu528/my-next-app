export const inputStyles = {
  base: "appearance-none outline-none",
  variants: {
    default: [
      "w-full px-4 py-2",
      "bg-gray-800",
      "rounded-lg",
      "border border-gray-700",
      "text-white placeholder-gray-400",
      "[&:hover]:!border-blue-500",
      "transition-[border-color]",
      "duration-200",
      "ease-in-out"
    ].join(" "),
    search: [
      "w-full px-4 py-2",
      "bg-gray-800/50",
      "rounded-lg",
      "border border-gray-700",
      "text-white placeholder-gray-400",
      "[&:hover]:!border-blue-500",
      "transition-[border-color]",
      "duration-200",
      "ease-in-out"
    ].join(" "),
    minimal: [
      "w-full px-4 py-2",
      "bg-transparent",
      "border-b border-gray-700",
      "text-white placeholder-gray-400",
      "[&:hover]:!border-blue-500",
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
      "border-red-500",
      "hover:border-red-400",
      "transition-[border-color]",
      "duration-200"
    ].join(" "),
    success: [
      "border-green-500",
      "hover:border-green-400",
      "transition-[border-color]",
      "duration-200"
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