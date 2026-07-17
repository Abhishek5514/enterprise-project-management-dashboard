import { User } from "lucide-react";
import { useApp } from "../../context/AppContext";

const ProfileSettings = ({ profile, setProfile }) => {
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
        <User className="text-blue-600" />

        <h2
          className={`text-xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Profile Information
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
            Full Name
          </label>

          <input
            type="text"
            value={profile.name}
            onChange={(e) =>
              setProfile({
                ...profile,
                name: e.target.value,
              })
            }
            className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
              theme === "dark"
                ? "border-slate-600 bg-slate-900 text-white placeholder:text-slate-400 focus:border-blue-500"
                : "border-slate-200 bg-white text-slate-900 focus:border-blue-600"
            }`}
          />
        </div>

        <div>
          <label
            className={`mb-2 block text-sm font-semibold ${
              theme === "dark"
                ? "text-slate-300"
                : "text-slate-700"
            }`}
          >
            Email Address
          </label>

          <input
            type="email"
            value={profile.email}
            onChange={(e) =>
              setProfile({
                ...profile,
                email: e.target.value,
              })
            }
            className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
              theme === "dark"
                ? "border-slate-600 bg-slate-900 text-white placeholder:text-slate-400 focus:border-blue-500"
                : "border-slate-200 bg-white text-slate-900 focus:border-blue-600"
            }`}
          />
        </div>

        <div className="md:col-span-2">
          <label
            className={`mb-2 block text-sm font-semibold ${
              theme === "dark"
                ? "text-slate-300"
                : "text-slate-700"
            }`}
          >
            Role
          </label>

          <input
            type="text"
            value={profile.role}
            onChange={(e) =>
              setProfile({
                ...profile,
                role: e.target.value,
              })
            }
            className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
              theme === "dark"
                ? "border-slate-600 bg-slate-900 text-white placeholder:text-slate-400 focus:border-blue-500"
                : "border-slate-200 bg-white text-slate-900 focus:border-blue-600"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;