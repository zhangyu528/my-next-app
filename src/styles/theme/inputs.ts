export const inputStyles = {
  variants: {
    default: "w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400",
    search: "w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400",
    minimal: "w-full px-4 py-2 bg-transparent border-b border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
  },
  sizes: {
    sm: "h-9 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-lg"
  },
  states: {
    error: "border-red-500 focus:border-red-500",
    success: "border-green-500 focus:border-green-500",
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