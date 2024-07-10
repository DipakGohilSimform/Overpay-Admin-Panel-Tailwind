import { ReactNode } from "react";

interface OverpayReasonProps {
  icon: ReactNode;
  text: ReactNode;
}

export default function OverpayReason({ icon, text }: OverpayReasonProps) {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 border-solid rounded-xl p-9 basis-[200px] grow">
      <div className="flex items-center justify-center mb-6 bg-gray-200 rounded-full h-14 w-14">
        {icon}
      </div>
      <p className="leading-6 text-center text-gray-900 text-16 font-600 max-w-[132px]">
        {text}
      </p>
    </div>
  );
}
