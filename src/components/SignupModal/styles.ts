export const modalStyles = {
  overlay: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
  container: "bg-gray-900 p-8 rounded-lg w-full max-w-md relative",
  closeButton: "absolute top-4 right-4 text-gray-400 hover:text-white",
  title: "text-2xl font-bold mb-6",
  form: "space-y-4",
  formGroup: {
    label: "block text-sm font-medium mb-2",
    input: "w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
  },
  submitButton: "w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
} as const; 