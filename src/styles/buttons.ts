export const buttonStyles = {
  default: "group px-6 py-3 h-12 bg-white text-black rounded-lg hover:bg-gray-200 flex items-center font-semibold text-[16px] overflow-hidden transition-colors",
  primary: "group w-full px-6 py-3 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center font-semibold text-[16px] transition-colors",
  outline: "group px-6 py-3 h-12 border-2 border-gray-700 rounded-lg hover:rounded-none flex items-center font-semibold text-[16px] overflow-hidden transition-[border-radius] duration-300",
  label: "relative transition-transform duration-300 group-hover:translate-x-2 flex items-center",
  icon: "absolute left-[-28px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 flex items-center"
} as const; 