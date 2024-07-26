import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
import IconApple from "@/components/Icons/IconApple";
import IconGoogle from "@/components/Icons/IconGoogle";
import Input from "@/components/Input/Input";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <AuthWrapper page="signin">
      <form className="max-w-[427px]">
        <h2 className="mb-4 text-center text-gray-900 text-32 font-800">
          Sign in to Overpay
        </h2>
        <p className="mb-10 leading-6 text-center text-gray-600 text-16">
          Send, spend and save smarter
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="flex gap-2 p-4 text-gray-900 transition-all border border-gray-300 border-solid rounded-xl hover:bg-gray-100">
            <IconGoogle />
            Sign In with Google
          </button>
          <button className="flex gap-2 p-4 text-gray-900 transition-all border border-gray-300 border-solid rounded-xl hover:bg-gray-100">
            <IconApple />
            Sign In with Apple
          </button>
        </div>
        <div className="flex items-center mb-6 text-gray-600 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6">
          Or with email
        </div>
        <div className="mb-6">
          <Input placeholder="Email" className="mb-4" />
          <Input placeholder="Password" />
        </div>
        <div className="flex justify-between mb-8">
          <div className="flex gap-2">
            <Checkbox />
            <label
              className="leading-6 text-gray-900 text-16 font-600"
              htmlFor="remember"
            >
              Remember me
            </label>
          </div>
          <Link to="#" className="leading-6 text-primary-1 text-16 font-600">
            Forgot Password?
          </Link>
        </div>
        <Link to="/dashboard">
          <Button text="Sign In" variant="primary" className="w-full mb-8" />
        </Link>
        <p className="leading-6 text-center text-gray-900 text-16 font-500">
          Don't have an account?{" "}
          <Link to="/sign-up" className="font-800">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
}
