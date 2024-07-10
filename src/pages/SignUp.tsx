import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import Button from "@/components/Button/Button";
import IconApple from "@/components/Icons/IconApple";
import IconGoogle from "@/components/Icons/IconGoogle";
import Input from "@/components/Input/Input";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <AuthWrapper page="signup">
      <form className="max-w-[427px]">
        <h2 className="mb-4 text-center text-black text-32 font-800">
          Sign up for an account
        </h2>
        <p className="mb-10 leading-6 text-center text-gray-600 text-16">
          Send, spend and save smarter
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="flex justify-center w-full gap-2 p-4 text-gray-900 transition-all border border-gray-300 border-solid sm:w-auto rounded-xl hover:bg-gray-100">
            <IconGoogle />
            Sign In with Google
          </button>
          <button className="flex justify-center w-full gap-2 p-4 text-gray-900 transition-all border border-gray-300 border-solid sm:w-auto rounded-xl hover:bg-gray-100">
            <IconApple />
            Sign In with Apple
          </button>
        </div>
        <div className="flex items-center mb-6 text-gray-600 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6">
          Or with email
        </div>
        <div className="mb-6">
          <div className="gap-4 mb-4 sm:flex">
            <Input placeholder="First name" className="mb-4 sm:mb-0" />
            <Input placeholder="Last name" />
          </div>
          <Input placeholder="Username or email" className="mb-4" />
          <Input placeholder="Password" />
        </div>
        <p className="mb-8 leading-5 tracking-wide text-gray-600 text-14 font-500">
          By creating an account, you agreeing to our{" "}
          <Link to="#" className="text-gray-800 font-600">
            Privacy Policy
          </Link>
          , and{" "}
          <Link to="#" className="text-gray-800 font-600">
            Electronics Communication Policy.
          </Link>
        </p>
        <Button text="Sign In" variant="primary" className="w-full mb-8" />
        <p className="leading-6 text-center text-gray-900 text-16 font-500">
          Don't have an account?{" "}
          <Link to="/" className="font-800">
            Sign In
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
}
