import { Moon } from "lucide-react";
import { useApp } from "../../context/AppContext";

const AppearanceSettings = ({
  darkMode,
  setDarkMode,
}) => {
  const { theme } = useApp();

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        <Moon className="text-blue-600" />

        <h2
          className={`text-xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Appearance
        </h2>
      </div>

      <div
        className={`flex items-center justify-between rounded-xl border p-4 ${
          theme === "dark"
            ? "border-slate-700 bg-slate-900"
            : "border-slate-200 bg-white"
        }`}
      >
        <div>
          <h3
            className={`font-semibold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Dark Mode
          </h3>

          <p
            className={`text-sm ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Enable dark theme for the dashboard.
          </p>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`relative h-7 w-14 rounded-full transition-all duration-300 ${
            darkMode
              ? "bg-blue-600"
              : "bg-slate-400"
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-300 ${
              darkMode
                ? "left-8"
                : "left-1"
            }`}
          />
        </button>
      </div>

      <div
        className={`mt-5 rounded-xl p-4 ${
          theme === "dark"
            ? "bg-blue-900/20 border border-blue-800"
            : "bg-blue-50"
        }`}
      >
        <p
          className={`text-sm ${
            theme === "dark"
              ? "text-blue-300"
              : "text-blue-700"
          }`}
        >
          <strong>Note:</strong> Theme preference will be saved.
          Full application dark mode will be enabled in the next
          update.
        </p>
      </div>
    </div>
  );
};

export default AppearanceSettings;