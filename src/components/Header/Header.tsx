import IconBell from "../Icons/IconBell";
import IconSearch from "../Icons/IconSearch";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className="flex items-center justify-between pt-6 pb-10 bg-white">
      <h2 className="leading-8 text-gray-900 text-24 font-800">{title}</h2>
      <div className="flex items-center justify-center gap-4">
        <button className="flex items-center justify-center w-12 h-12 text-gray-900 rounded-full font-900 bg-gray-50 text-16">
          <IconSearch />
        </button>
        <button className="flex items-center justify-center w-12 h-12 text-gray-900 rounded-full font-900 bg-gray-50 text-16">
          <IconBell />
        </button>
        <ProfileDropdown />
      </div>
    </div>
  );
}

export default Header;
