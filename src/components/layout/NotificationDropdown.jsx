import {
  Bell,
  CheckCircle,
  CheckCheck,
  Trash2,
} from "lucide-react";

import { useApp } from "../../context/AppContext";

const NotificationDropdown = ({ onClose }) => {
  const {
    notifications,
    markAllAsRead,
    clearNotifications,
    theme,
  } = useApp();

  return (
    <div
      className={`absolute right-0 top-16 z-50 w-96 overflow-hidden rounded-2xl border shadow-2xl transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`flex items-center justify-between border-b px-5 py-4 ${
          theme === "dark"
            ? "border-slate-700"
            : "border-slate-200"
        }`}
      >
        <h2
          className={`flex items-center gap-2 text-lg font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          <Bell size={20} />
          Notifications
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={markAllAsRead}
            title="Mark all as read"
            className={`rounded-lg p-2 transition ${
              theme === "dark"
                ? "hover:bg-slate-700 text-slate-300"
                : "hover:bg-slate-100 text-slate-600"
            }`}
          >
            <CheckCheck size={18} />
          </button>

          <button
            onClick={clearNotifications}
            title="Clear all"
            className={`rounded-lg p-2 transition ${
              theme === "dark"
                ? "hover:bg-slate-700 text-slate-300"
                : "hover:bg-slate-100 text-slate-600"
            }`}
          >
            <Trash2 size={18} />
          </button>

          <button
            onClick={onClose}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Close
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-12">
            <Bell
              size={42}
              className={`mb-4 ${
                theme === "dark"
                  ? "text-slate-500"
                  : "text-slate-300"
              }`}
            />

            <h3
              className={`text-lg font-semibold ${
                theme === "dark"
                  ? "text-white"
                  : "text-slate-700"
              }`}
            >
              No Notifications
            </h3>

            <p
              className={`mt-2 text-center text-sm ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              You're all caught up.
            </p>
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              className={`flex gap-4 border-b px-5 py-4 transition ${
                theme === "dark"
                  ? `border-slate-700 hover:bg-slate-700 ${
                      item.read
                        ? "bg-slate-800"
                        : "bg-slate-900"
                    }`
                  : `border-slate-100 hover:bg-slate-50 ${
                      item.read
                        ? "bg-white"
                        : "bg-blue-50"
                    }`
              }`}
            >
              <div className="mt-1 rounded-full bg-green-100 p-2">
                <CheckCircle
                  size={18}
                  className="text-green-600"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-semibold ${
                      theme === "dark"
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {!item.read && (
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                  )}
                </div>

                <p
                  className={`mt-1 text-sm ${
                    theme === "dark"
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  {item.message}
                </p>

                <span
                  className={`mt-2 block text-xs ${
                    theme === "dark"
                      ? "text-slate-500"
                      : "text-slate-400"
                  }`}
                >
                  {item.time}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <div
        className={`border-t px-5 py-3 ${
          theme === "dark"
            ? "border-slate-700 bg-slate-900"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <button className="w-full rounded-xl py-2 text-center font-semibold text-blue-600 transition hover:bg-blue-50">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;