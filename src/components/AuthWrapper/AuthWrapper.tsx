import React, { ReactNode } from "react";
import Images from "@/config/images";
import IconIndicator from "../Icons/IconIndicator";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

interface AuthWrapperProps {
  children: ReactNode;
  page: "signin" | "signup" | "otp" | "forget" | "reason";
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children, page }) => {
  return (
    <>
      {/* dynamic header */}
      {["otp", "forget", "reason"].includes(page) && (
        <div className="sm:fixed top-0 left-0 right-0 flex justify-between items-center w-screen px-5 sm:px-12 bg-gray-900 h-[100px] z-10">
          <img src={Images.LogoWhite} alt="logo" className="h-8" />
          <Link to="/" className={`${page === "otp" ? "block" : "hidden"}`}>
            <Button
              text="Sign In"
              variant="primary"
              className={`w-[150px] ${page === "otp" ? "block" : "hidden"}`}
            />
          </Link>
          <div
            className={`flex gap-5 text-white ${
              page === "reason" ? "flex" : "hidden"
            }`}
          >
            <Link to="#">Personal</Link>
            <Link to="#">Business</Link>
            <Link to="#">Partners</Link>
            <Link to="#">Help & FAQ</Link>
          </div>
        </div>
      )}

      <div className="min-h-screen p-6 bg-gray-50 ">
        <div
          className={`relative flex max-h-full ${
            page === "signup" ? "flex-row-reverse" : ""
          }`}
        >
          <div className="relative flex items-center justify-center p-12 grow shrink basis-auto max-h-screen-viewport-less-48">
            {["signin", "signup"].includes(page) && (
              <img
                src={Images.Logo}
                alt="logo"
                className={`absolute top-6 left-6 h-8 ${
                  page === "signup" ? "hidden" : ""
                }`}
              />
            )}
            {children}
            <div className="absolute bottom-0 flex justify-between w-full pb-6 pl-6 pr-12">
              <p className="leading-6 text-gray-500 text-16 font-600">
                Privacy Policy
              </p>
              <p className="leading-6 text-gray-500 text-16 font-600">
                Copyright 2022
              </p>
            </div>
          </div>
          {["signin", "signup"].includes(page) && (
            <div className="hidden relative w-full bg-primary-1 basis-[639px] max-h-screen-viewport-less-48 p-16 xl:block">
              <img
                src={Images.LogoWhite}
                alt="logo"
                className={`absolute top-6 left-6 h-8 ${
                  page === "signin" ? "hidden" : ""
                }`}
              />
              <img
                src={Images.SquareDesign}
                className="absolute bottom-3 left-3"
              />
              <img
                src={Images.VerticalDesign}
                className="absolute top-3 right-3"
              />
              <img
                src={Images.SendMoney}
                alt="auth-mockup"
                className="object-contain mb-16 mt-7"
              />
              <h3 className="mb-5 text-center text-white text-40 font-800">
                Get better with money
              </h3>
              <p className="mb-8 text-center text-white text-14">
                Overpay help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus when you receive qualifying direct
                deposits
              </p>
              <div className="flex justify-center">
                <IconIndicator />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthWrapper;
