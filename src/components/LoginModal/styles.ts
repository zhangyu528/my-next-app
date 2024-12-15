export const modalStyles = {
  overlay: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
  container: "bg-gray-900 p-8 rounded-lg w-full max-w-md relative",
  closeButton: "absolute top-4 right-4 text-gray-400 hover:text-white",
  title: "text-2xl font-bold mb-6",
  githubButton: "w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors",
  divider: "relative text-center my-4 before:absolute before:w-[45%] before:h-[1px] before:bg-gray-800 before:left-0 before:top-1/2 after:absolute after:w-[45%] after:h-[1px] after:bg-gray-800 after:right-0 after:top-1/2",
  form: "space-y-4",
  label: "block text-sm font-medium mb-2",
  submitButton: "w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
} as const;