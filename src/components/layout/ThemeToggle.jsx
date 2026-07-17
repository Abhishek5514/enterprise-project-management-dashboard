import { Moon, Sun } from "lucide-react";
import { useApp } from "../../context/AppContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useApp();

  return (
    <button
      onClick={toggleTheme}
      title={
        theme === "light"
          ? "Switch to Dark Mode"
          : "Switch to Light Mode"
      }
      className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800 text-yellow-400 hover:bg-slate-700"
          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
      }`}
    >
      {theme === "light" ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;