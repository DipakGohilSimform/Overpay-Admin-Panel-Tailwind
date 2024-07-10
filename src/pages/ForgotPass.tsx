import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import Button from "@/components/Button/Button";
import { Link } from "react-router-dom";

export default function ForgotPass() {
  return (
    <AuthWrapper page="otp">
      <div className="flex items-center justify-center">
        <div className="max-w-[510px] p-10 bg-white box-shadow rounded-xl">
          <h2 className="mb-4 leading-10 text-center text-32 font-800">
            Need help with your account?
          </h2>
          <p className="mb-10 text-center text-gray-600 text-16">
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </p>
          <div className="flex gap-6 mb-10">
            <input
              type="email"
              className="w-full p-4 leading-6 text-gray-900 border border-gray-300 border-solid rounded-xl h-14 text-16 font-500"
            />
          </div>
          <Button text="Send Link" variant="primary" className="w-full mb-6" />
          <div className="flex justify-center">
            <Link
              to="#"
              className="m-auto leading-6 text-center text-secondary-1 font-900 text-16"
            >
              Forgot your email?
            </Link>
          </div>
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
}
