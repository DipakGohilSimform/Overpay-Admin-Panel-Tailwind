import {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import Button from "@/components/Button/Button";

const OTP = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const isNumeric = (value: string) => /^[0-9]$/.test(value);

  const handleChange = (index: number, value: string) => {
    if (value && !isNumeric(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData
      .getData("text")
      .split("")
      .filter(isNumeric)
      .slice(0, otp.length);

    const newOtp = [...otp];
    pasteData.forEach((char, i) => {
      newOtp[i] = char;
    });

    setOtp(newOtp);

    // Move focus to the next empty input field
    const nextIndex = pasteData.findIndex((_, i) => !newOtp[i]);
    if (nextIndex !== -1) {
      inputRefs.current[nextIndex]?.focus();
    } else {
      inputRefs.current[otp.length - 1]?.focus();
    }
  };

  return (
    <AuthWrapper page="otp">
      <div className="flex items-center justify-center">
        <div className="max-w-[510px] p-10 bg-white box-shadow rounded-xl">
          <h2 className="mb-4 leading-10 text-center  text-32 font-800">
            Verify your email
          </h2>
          <p className="mb-10 text-center text-gray-600 text-16">
            We have sent code to your email
            <br />
            <span className="text-gray-900">alesiaka******@mail.com</span>
          </p>
          <div className="flex gap-6 mb-10" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, e.target.value)
                }
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(index, e)
                }
                className="otp-input"
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength={1}
              />
            ))}
          </div>
          <Button
            text="Verify Account"
            variant="primary"
            className="w-full mb-6"
          />
          <p className="leading-6 text-center text-gray-600 font-500 text-16">
            Resend code in <span className="text-gray-900 font-800">59:00</span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 flex justify-between w-full pb-6 pl-6 pr-12">
        <p className="leading-6 text-gray-500 text-16 font-600">
          Privacy Policy
        </p>
        <p className="leading-6 text-gray-500 text-16 font-600">
          Copyright 2022
        </p>
      </div>
    </AuthWrapper>
  );
};

export default OTP;
