import {
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useApp } from "../../context/AppContext";

const ProfileDropdown = ({ onClose }) => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const handleProfile = () => {
    navigate("/profile");
    onClose();
  };

  const handleSettings = () => {
    navigate("/settings");
    onClose();
  };

  const handleLogout = () => {
    toast.success("Logged out successfully.");
    onClose();
  };

  return (
    <div
      className={`absolute right-0 top-16 z-50 w-64 overflow-hidden rounded-2xl border shadow-2xl transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`border-b p-5 ${
          theme === "dark"
            ? "border-slate-700"
            : "border-slate-200"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            A
          </div>

          <div>
            <h3
              className={`font-bold ${
                theme === "dark"
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              Abhishek
            </h3>

            <p
              className={`text-sm ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              Frontend Developer
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleProfile}
        className={`flex w-full items-center gap-3 px-5 py-4 text-left transition ${
          theme === "dark"
            ? "text-slate-300 hover:bg-slate-700"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        <User size={18} />
        My Profile
      </button>

      <button
        onClick={handleSettings}
        className={`flex w-full items-center gap-3 px-5 py-4 text-left transition ${
          theme === "dark"
            ? "text-slate-300 hover:bg-slate-700"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        <Settings size={18} />
        Settings
      </button>

      <button
        onClick={handleLogout}
        className={`flex w-full items-center gap-3 px-5 py-4 text-left transition ${
          theme === "dark"
            ? "text-red-400 hover:bg-red-900/30"
            : "text-red-600 hover:bg-red-50"
        }`}
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;