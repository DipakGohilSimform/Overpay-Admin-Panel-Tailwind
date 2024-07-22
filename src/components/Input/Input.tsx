interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
}

function Input({ type = "text", placeholder, className }: InputProps) {
  return (
    <input
      type={type}
      className={`w-full p-4 bg-white text-gray-500 border border-gray-300 dark:border-gray-700 border-solid rounded-2xl ${className}`}
      placeholder={placeholder}
    />
  );
}

export default Input;
