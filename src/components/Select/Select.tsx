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
    <div className={`relative select-none ${className}`}>
      <div
        onClick={toggleDropdown}
        className="relative w-full p-3 h-[48px] leading-6 text-gray-900 text-18 font-800 bg-white border border-gray-300 border-solid cursor-pointer rounded-2xl"
      >
        <div className="absolute top-4 right-4">
          <IconArrow />
        </div>
        {selectedOption
          ? options.find((option) => option.value === selectedOption)?.label
          : placeholder}
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 border-solid dark:border-gray-700 rounded-2xl">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="p-3 h-[48px] leading-6 text-gray-900 text-16 font-800 text-center cursor-pointer pr-1"
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
