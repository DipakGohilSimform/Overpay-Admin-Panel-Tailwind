interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

function Button({
  type = "button",
  text,
  className,
  variant,
  onClick,
}: ButtonProps) {
  const baseClasses = "px-4 py-2 font-semibold rounded-lg";
  const variantClasses =
    variant === "primary"
      ? "rounded-xl p-4 text-16 font-800 leading-6 text-white bg-primary-1 hover:bg-primary-2 "
      : "rounded-xl p-4 text-16 font-800 leading-6 text-primary-1 border border-primary-1 border-solid  bg-white hover:bg-gray-100";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className} h-[56px]`}
    >
      {text}
    </button>
  );
}

export default Button;
