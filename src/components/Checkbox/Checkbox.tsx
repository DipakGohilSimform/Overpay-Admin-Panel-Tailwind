import { ReactNode } from "react";

interface CheckboxProps {
  className?: string;
  children?: ReactNode;
}
export default function Checkbox({ className, children }: CheckboxProps) {
  return (
    <div className="flex items-center gap-1">
      <label
        className={`relative flex items-center rounded-full cursor-pointer ${className}`}
        htmlFor="ripple-on"
        data-ripple-dark="true"
      >
        <input
          id="ripple-on"
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-1 checked:bg-primary-1 checked:before:bg-primary-1"
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        htmlFor="ripple-on"
        className="leading-6 text-gray-900 cursor-pointer select-none text-16 font-500"
      >
        {children}
      </label>
    </div>
  );
}
