export const navStyles = {
  nav: {
    base: [
      'fixed top-0 left-0 w-full z-50', // Positioning
      'bg-black/70 backdrop-blur-sm', // Background and blur
      'border-b border-white/5', // Border
      'flex justify-between items-center', // Layout
      'px-4 max-w-6xl h-16', // Padding, max-width, and height
      'mx-auto' // Center the navbar
    ].join(' ')
  },
  actionButtons: {
    wrapper: 'flex items-center space-x-4'
  }
};