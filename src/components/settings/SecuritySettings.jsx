import {
  Lock,
  ShieldCheck,
  LogOut,
} from "lucide-react";
import toast from "react-hot-toast";

import { useApp } from "../../context/AppContext";

const SecuritySettings = () => {
  const { theme } = useApp();

  const handleChangePassword = () => {
    toast.success("Password change feature coming soon.");
  };

  const handleLogoutAll = () => {
    toast.success("All devices logged out successfully.");
  };

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        <Lock className="text-blue-600" />

        <h2
          className={`text-xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Security
        </h2>
      </div>

      <div className="space-y-5">
        <div
          className={`flex items-center justify-between rounded-xl border p-4 ${
            theme === "dark"
              ? "border-slate-700 bg-slate-900"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-600" />

            <div>
              <h3
                className={`font-semibold ${
                  theme === "dark"
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                Change Password
              </h3>

              <p
                className={`text-sm ${
                  theme === "dark"
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >
                Update your account password.
              </p>
            </div>
          </div>

          <button
            onClick={handleChangePassword}
            className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Change
          </button>
        </div>

        <div
          className={`flex items-center justify-between rounded-xl border p-4 ${
            theme === "dark"
              ? "border-red-800 bg-red-950/20"
              : "border-red-200 bg-red-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <LogOut className="text-red-600" />

            <div>
              <h3
                className={`font-semibold ${
                  theme === "dark"
                    ? "text-red-300"
                    : "text-red-700"
                }`}
              >
                Logout All Devices
              </h3>

              <p
                className={`text-sm ${
                  theme === "dark"
                    ? "text-red-400"
                    : "text-red-500"
                }`}
              >
                Sign out from every active session.
              </p>
            </div>
          </div>

          <button
            onClick={handleLogoutAll}
            className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;