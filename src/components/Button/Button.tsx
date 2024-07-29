import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  className?: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  onClick?: () => void;
}

function Button({
  type = "button",
  text,
  className,
  variant,
  icon,
  onClick,
}: ButtonProps) {
  const baseClasses = "px-4 py-2 font-semibold rounded-lg";
  const variantClasses =
    variant === "primary"
      ? "rounded-xl p-4 text-16 font-800 leading-6 text-gray-100 bg-primary-1 hover:bg-primary-2 "
      : "rounded-xl p-4 text-16 font-800 leading-6 text-primary-1 border border-primary-1 border-solid hover:bg-gray-200";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className} h-[56px] flex items-center justify-center gap-1`}
    >
      {text}
      {icon}
    </button>
  );
}

export default Button;
