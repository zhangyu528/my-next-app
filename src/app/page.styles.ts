export const pageStyles = {
  wrapper: "min-h-screen bg-gradient-to-b from-black to-gray-900 text-white",
  main: "pt-32 pb-20",
  hero: {
    container: "max-w-4xl mx-auto text-center px-6",
    title: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text",
    subtitle: "text-xl text-gray-400 mb-10",
  },
  form: {
    container: "max-w-md mx-auto mb-12",
    wrapper: "flex gap-2",
    input: "flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500",
    button: "px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
  },
  features: {
    container: "max-w-6xl mx-auto mt-32 px-6",
    grid: "grid md:grid-cols-3 gap-8",
    card: "p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors",
    title: "text-xl font-semibold mb-3",
    description: "text-gray-400"
  },
  footer: {
    wrapper: "border-t border-gray-800",
    container: "max-w-6xl mx-auto py-8 px-6 text-center text-gray-500"
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