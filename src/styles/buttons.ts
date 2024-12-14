// 基础按钮样式
const baseButton = {
  base: "group px-6 py-3 h-12 flex items-center font-semibold text-[16px] overflow-hidden"
} as const;

// 按钮变体样式
const variants = {
  default: `${baseButton.base} bg-white text-black rounded-lg hover:bg-gray-200 transition-colors`,
  primary: `${baseButton.base} w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 justify-center transition-colors`,
  outline: `${baseButton.base} border-2 border-gray-700 rounded-lg hover:rounded-none transition-[border-radius] duration-300`
} as const;

// 按钮子组件样式
const components = {
  label: "relative transition-transform duration-300 group-hover:translate-x-2 flex items-center",
  icon: "absolute left-[-28px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 flex items-center"
} as const;

export const buttonStyles = {
  variants,
  components
} as const; 