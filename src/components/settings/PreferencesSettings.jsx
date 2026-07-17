import { Globe } from "lucide-react";
import { useApp } from "../../context/AppContext";

const PreferencesSettings = ({
  language,
  setLanguage,
  timezone,
  setTimezone,
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
        <Globe className="text-blue-600" />

        <h2
          className={`text-xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Preferences
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            className={`mb-2 block text-sm font-semibold ${
              theme === "dark"
                ? "text-slate-300"
                : "text-slate-700"
            }`}
          >
            Language
          </label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
              theme === "dark"
                ? "border-slate-600 bg-slate-900 text-white focus:border-blue-500"
                : "border-slate-200 bg-white text-slate-900 focus:border-blue-600"
            }`}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div>
          <label
            className={`mb-2 block text-sm font-semibold ${
              theme === "dark"
                ? "text-slate-300"
                : "text-slate-700"
            }`}
          >
            Time Zone
          </label>

          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
              theme === "dark"
                ? "border-slate-600 bg-slate-900 text-white focus:border-blue-500"
                : "border-slate-200 bg-white text-slate-900 focus:border-blue-600"
            }`}
          >
            <option value="Asia/Kolkata">
              Asia/Kolkata (IST)
            </option>

            <option value="UTC">
              UTC
            </option>

            <option value="America/New_York">
              America/New_York
            </option>

            <option value="Europe/London">
              Europe/London
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PreferencesSettings;