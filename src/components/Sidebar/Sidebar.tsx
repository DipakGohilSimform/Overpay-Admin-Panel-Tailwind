import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-header text-white hover:underline p-2 rounded w-[100%] block transition-all duration-300 ease-in-out"
      : "hover:underline p-2 rounded transition-all duration-300 ease-in-out";

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground p-4">
      <nav>
        <ul>
          <li className="mb-4 ">
            <NavLink to={"/intro"} className={navLinkClasses}>
              Getting Started
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to={"/install"} className={navLinkClasses}>
              Installation
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to={"/theming"} className={navLinkClasses}>
              Theming
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to={"/darkmode"} className={navLinkClasses}>
              Dark Mode
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to={"/components"} className={navLinkClasses}>
              Components
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
