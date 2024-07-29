/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import IconHome from "../Icons/IconHome";
import IconInvoice from "../Icons/IconInvoice";
import IconMessage from "../Icons/IconMessage";
import IconTerminal from "../Icons/IconTerminal";
import IconActivity from "../Icons/IconActivity";
import Images from "@/config/images";
import IconArrow from "../Icons/IconArrow";

export default function Sidebar() {
  const [isActivityOpen, setIsActivityOpen] = useState(false);

  const toggleActivitySubmenu = () => {
    setIsActivityOpen(!isActivityOpen);
  };

  const navLinkClasses = ({ isActive }: any) =>
    isActive
      ? "bg-primary-1 text-gray-100 rounded-xl font-800 text-16 leading-5"
      : "font-400 text-16 leading-5 text-gray-600";

  return (
    <aside className="fixed top-0 bottom-0 left-0 w-64 text-gray-600 bg-gray-50">
      <div className="flex gap-1 items-center py-9 border-solid border-b-[1px] border-b-gray-300 mx-9 mb-10">
        <Link
          to="#"
          className="flex items-center gap-1 text-gray-900 text-24 font-900"
        >
          <img src={Images.LogoSm} alt="logo" className="h-7" />
          Overpay.
        </Link>
      </div>
      <nav className="flex flex-col justify-between px-8">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                  isActive,
                })}`
              }
            >
              <div className="text-20">
                <IconHome />
              </div>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoices"
              className={({ isActive }) =>
                `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                  isActive,
                })}`
              }
            >
              <div className="text-20">
                <IconInvoice />
              </div>
              Invoices
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                  isActive,
                })}`
              }
            >
              <div className="text-20">
                <IconMessage />
              </div>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-wallet"
              className={({ isActive }) =>
                `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                  isActive,
                })}`
              }
            >
              <div className="text-20">
                <IconTerminal />
              </div>
              My Wallets
            </NavLink>
          </li>
          <li>
            <button
              onClick={toggleActivitySubmenu}
              className={`relative flex items-center w-full text-left p-3 gap-3 mb-3 ${navLinkClasses(
                {
                  isActive: false,
                }
              )}`}
            >
              <div className="text-20">
                <IconActivity />
              </div>
              Activity
              <div
                className={`${
                  isActivityOpen === true ? "rotate-180" : ""
                } absolute right-0 top-4`}
              >
                <div className="text-20">
                  <IconArrow />
                </div>
              </div>
            </button>
            {isActivityOpen && (
              <ul className="ml-6">
                <li>
                  <NavLink
                    to="/transactions"
                    className={({ isActive }) =>
                      `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                        isActive,
                      })}`
                    }
                  >
                    Transactions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/recipients"
                    className={({ isActive }) =>
                      `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                        isActive,
                      })}`
                    }
                  >
                    Recipients
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
