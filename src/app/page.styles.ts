export const pageStyles = {
  wrapper: [
    "min-h-screen",
    "bg-black",
    "text-white",
    "pt-32"
  ].join(" "),
  
  main: "relative",
  
  hero: {
    wrapper: [
      "max-w-6xl",
      "mx-auto",
      "px-6"
    ].join(" "),

    container: [
      "w-full",
      "py-24",
      "text-center",
      "flex flex-col items-center",
      "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600",
      "rounded-3xl"
    ].join(" "),
    
    title: [
      "text-6xl md:text-7xl lg:text-8xl",
      "font-bold",
      "mb-6",
      "text-white",
      "tracking-tight"
    ].join(" "),
    
    subtitle: [
      "text-xl md:text-2xl",
      "text-gray-400",
      "mb-12",
      "max-w-2xl",
      "mx-auto"
    ].join(" "),

    button: [
      "text-lg",
      "!bg-gradient-to-r !from-blue-500 !to-purple-600",
      "transition-all duration-300"
    ].join(" ")
  },
  stats: {
    wrapper: [
      "max-w-6xl",
      "mx-auto",
      "px-6",
      "py-24"
    ].join(" "),

    container: [
      "grid",
      "grid-cols-1 md:grid-cols-3",
      "gap-12",
      "text-center"
    ].join(" "),

    item: [
      "space-y-2"
    ].join(" "),

    number: [
      "text-4xl md:text-5xl",
      "font-bold",
      "bg-gradient-to-r from-blue-400 to-purple-400",
      "text-transparent bg-clip-text"
    ].join(" "),

    label: [
      "text-gray-400",
      "text-lg"
    ].join(" ")
  },
  features: {
    wrapper: [
      "max-w-6xl",
      "mx-auto",
      "px-6",
      "py-24"
    ].join(" "),

    container: [
      "text-center",
      "space-y-12"
    ].join(" "),

    title: [
      "text-3xl md:text-4xl",
      "font-bold",
      "mb-4"
    ].join(" "),

    grid: [
      "grid",
      "grid-cols-1 md:grid-cols-3",
      "gap-8"
    ].join(" "),

    card: [
      "p-6",
      "rounded-xl",
      "bg-gray-900",
      "text-left",
      "hover:bg-gray-800",
      "transition-colors"
    ].join(" "),

    cardTitle: [
      "text-xl",
      "font-semibold",
      "mb-3"
    ].join(" "),

    cardText: [
      "text-gray-400",
      "leading-relaxed"
    ].join(" ")
  },
  cta: {
    wrapper: [
      "max-w-6xl",
      "mx-auto",
      "px-6",
      "py-24"
    ].join(" "),

    container: [
      "text-center",
      "space-y-8",
      "bg-gradient-to-r from-blue-600/20 to-purple-600/20",
      "rounded-3xl",
      "p-12"
    ].join(" "),

    title: [
      "text-3xl md:text-4xl",
      "font-bold"
    ].join(" "),

    text: [
      "text-xl",
      "text-gray-400"
    ].join(" "),

    button: [
      "mt-8",
      "!bg-gradient-to-r !from-blue-500 !to-purple-600",
      "transition-all duration-300"
    ].join(" ")
  },
  form: {
    wrapper: [
      "max-w-md",
      "mx-auto",
      "mb-12",
      "px-0"
    ].join(" "),
    container: [
      "flex",
      "justify-center"
    ].join(" "),
    input: "flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500",
    button: "px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
  },
  footer: {
    wrapper: [
      "w-full"
    ].join(" "),
    container: [
      "border-t",
      "border-gray-800",
      "max-w-6xl",
      "mx-auto",
      "py-8",
      "px-6",
      "text-center",
      "text-gray-500"
    ].join(" ")
  }
} as const;

export const featureItems = [
  {
    title: 'Fast & Efficient',
    description: 'Build and deploy in record time'
  },
  {
    title: 'Collaborative',
    description: 'Work together seamlessly with your team'
  },
  {
    title: 'Secure',
    description: 'Enterprise-grade security out of the box'
  }
] as const; 