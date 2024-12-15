export const navStyles = {
  nav: "fixed w-full p-6 bg-black/50 backdrop-blur-sm border-b border-white/10 z-50",
  container: "max-w-6xl mx-auto flex justify-between items-center",
  logo: "flex items-center p-1 hover:opacity-80 transition-all duration-200 cursor-pointer",
  itemsWrapper: "flex items-center gap-4",
} as const;

export const defaultNavItems = [
  { label: "Log in", href: "/login", isButton: false },
  { label: "Get started for free", href: "/signup", isButton: true }
] as const;