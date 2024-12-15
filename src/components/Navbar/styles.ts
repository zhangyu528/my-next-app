export const navStyles = {
  nav: "fixed w-full p-6 bg-black/50 backdrop-blur-sm border-b border-white/10",
  container: "max-w-6xl mx-auto flex justify-between items-center",
  logo: "flex items-center hover:opacity-80 transition-opacity cursor-pointer",
  itemsWrapper: "flex items-center gap-4",
} as const;

export const defaultNavItems = [
  { label: "Log in", href: "/login", isButton: false },
  { label: "Get started for free", href: "/signup", isButton: true }
] as const;