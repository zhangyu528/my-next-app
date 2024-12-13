export const navStyles = {
  nav: "fixed w-full p-6 bg-black/50 backdrop-blur-sm border-b border-white/10",
  container: "max-w-6xl mx-auto flex justify-between items-center",
  logo: "text-2xl font-bold",
  itemsWrapper: "flex items-center gap-4",
  link: "hover:text-gray-300 px-6 py-3 h-12 border border-gray-700 rounded-lg transition-colors flex items-center font-semibold text-[16px]",
  button: "px-6 py-3 h-12 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors flex items-center font-semibold text-[16px]"
} as const;

// 可以添加其他相关样式
export const defaultNavItems = [
  { label: "Log in", href: "/login" },
  { label: "Get started for free", href: "/signup", isButton: true }
] as const; 