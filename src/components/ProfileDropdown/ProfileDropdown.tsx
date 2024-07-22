import React, { useEffect, useRef, useState } from "react";
import IconUser from "../Icons/IconUser";
import { Link } from "react-router-dom";
import IconSetting from "../Icons/IconSetting";
import IconLogout from "../Icons/IconLogout";
import Images from "@/config/images";
import IconArrow from "../Icons/IconArrow";
import Switch from "../Switch/Switch";

interface DropdownProps {
  onSelect?: (value: string) => void;
}

const ProfileDropdown: React.FC<DropdownProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true;
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  function handleToggle() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative w-40 rounded-3xl" ref={dropdownRef}>
      <div
        className="flex items-center justify-center gap-2 p-2 cursor-pointer select-none bg-gray-50 rounded-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={Images.User} alt="user" className="rounded-full" />
        <p className="leading-6 text-gray-900 text-16 font-800">Alesia K.</p>
        <span className="text-gray-900">
          <IconArrow />
        </span>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 px-4 py-2 mt-1 rounded-lg bg-gray-50 dropdown-box-shadow w-60">
          <div className="pb-4 mb-2 border-b-[1px] border-gray-200 py-2">
            <h2 className="mb-1 leading-6 text-gray-900 text-16 font-800">
              Alesia Karapova
            </h2>
            <p className="leading-4 text-gray-600 text-12 from-neutral-500">
              Business account
            </p>
          </div>
          <div>
            <Link to="#" className="flex items-center gap-3 py-3 text-gray-900">
              <div className="text-">
                <IconUser />
              </div>
              <p className="leading-5 text-16 font-600">Your details</p>
            </Link>
            <Link to="#" className="flex items-center gap-3 py-3 text-gray-900">
              <div>
                <IconSetting />
              </div>
              <p className="leading-5 text-16 font-600">Account settings</p>
            </Link>
            <Link
              to="/"
              className="flex text-gray-900 items-center gap-3 py-3 border-b-[1px] border-gray-200 mb-2"
            >
              <div>
                <IconLogout />
              </div>
              <p className="leading-5 text-16 font-600">Log out</p>
            </Link>
          </div>
          <div className="flex items-center justify-between py-3 select-none">
            <p className="leading-5 text-gray-900 text-14 font-600">
              Dark mode
            </p>
            <Switch isOn={isDarkMode} handleToggle={handleToggle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
