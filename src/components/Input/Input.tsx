interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
}

function Input({ type = "text", placeholder, className }: InputProps) {
  return (
    <input
      type={type}
      className={`w-full p-4 border border-gray-300 border-solid rounded-2xl ${className}`}
      placeholder={placeholder}
    />
  );
}

export default Input;
