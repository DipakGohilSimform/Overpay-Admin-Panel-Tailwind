interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
}

function Input({ type = "text", placeholder, className, value }: InputProps) {
  return (
    <input
      type={type}
      className={`w-full p-4 bg-white text-gray-900 font-500 border border-gray-300 border-solid select-none rounded-2xl ${className}`}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;
