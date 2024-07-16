import { NavLink } from "react-router-dom";
import IconHome from "../Icons/IconHome";
import IconInvoice from "../Icons/IconInvoice";
import IconMessage from "../Icons/IconMessage";
import IconTerminal from "../Icons/IconTerminal";
import IconActivity from "../Icons/IconActivity";
import IconAnalytics from "../Icons/IconAnalytics";
import Images from "@/config/images";

export default function Sidebar() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-primary-1 text-gray-100 rounded-xl font-800 text-16 leading-5"
      : "font-400 text-16 leading-5 text-gray-600";

  return (
    <aside className="w-64 text-gray-600 bg-gray-50 ">
      <div className="flex gap-1 items-center py-9 border-solid border-b-[1px] border-b-gray-300 mx-9 mb-10">
        <img src={Images.LogoSm} alt="logo" className="h-7" />
        <h3 className="text-gray-900 text-24 font-900">Overpay.</h3>
      </div>
      <nav className="px-8">
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
              <IconHome />
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
              <IconInvoice />
              Invoices
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/intro"
              className={({ isActive }) =>
                `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                  isActive,
                })}`
              }
            >
              <IconMessage />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/intro"
              className={({ isActive }) =>
                `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                  isActive,
                })}`
              }
            >
              <IconTerminal />
              My Wallets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/intro"
              className={({ isActive }) =>
                `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                  isActive,
                })}`
              }
            >
              <IconActivity />
              Activity
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/intro"
              className={({ isActive }) =>
                `flex items-center p-3 gap-3 mb-3 ${navLinkClasses({
                  isActive,
                })}`
              }
            >
              <IconAnalytics />
              Analytics
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
