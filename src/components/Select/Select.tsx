import { useState } from "react";
import IconArrow from "../Icons/IconArrow";

interface SelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

function Select({ options, placeholder, className }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div
      onClick={toggleDropdown}
      className={`relative w-full leading-6 text-gray-900 bg-white text-18 font-600 p-3 h-[48px] select-none border border-gray-300 border-solid cursor-pointer rounded-2xl ${className}`}
    >
      <div className="absolute top-[40%] right-4">
        <IconArrow />
      </div>
      {selectedOption
        ? options.find((option) => option.value === selectedOption)?.label
        : placeholder}
      {isOpen && (
        <ul className="absolute left-[3px] top-[57px] z-10 w-full mt-1 bg-white border border-gray-300 border-solid rounded-2xl">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="p-3 h-[48px] leading-6 text-gray-900 text-16 font-600 cursor-pointer pr-1"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
