import { NavLink } from "react-router-dom";
import { useApp } from "../../context/AppContext";

const SidebarItem = ({ icon, title, to }) => {
  const { theme } = useApp();

  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
          isActive
            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
            : theme === "dark"
            ? "text-slate-400 hover:bg-slate-800 hover:text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      <span className="flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>

      <span className="truncate">
        {title}
      </span>
    </NavLink>
  );
};

export default SidebarItem;