import { Bell } from "lucide-react";
import { useApp } from "../../context/AppContext";

const NotificationSettings = ({
  notifications,
  setNotifications,
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
        <Bell className="text-blue-600" />

        <h2
          className={`text-xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Notification Settings
        </h2>
      </div>

      <div className="space-y-5">

        <label
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
              Email Notifications
            </h3>

            <p
              className={`text-sm ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              Receive updates through email.
            </p>
          </div>

          <button
            onClick={() =>
              setNotifications({
                ...notifications,
                email: !notifications.email,
              })
            }
            className={`relative h-7 w-14 rounded-full transition ${
              notifications.email
                ? "bg-blue-600"
                : "bg-slate-400"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                notifications.email
                  ? "left-8"
                  : "left-1"
              }`}
            />
          </button>
        </label>

        <label
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
              Push Notifications
            </h3>

            <p
              className={`text-sm ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              Receive browser notifications.
            </p>
          </div>

          <button
            onClick={() =>
              setNotifications({
                ...notifications,
                push: !notifications.push,
              })
            }
            className={`relative h-7 w-14 rounded-full transition ${
              notifications.push
                ? "bg-blue-600"
                : "bg-slate-400"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                notifications.push
                  ? "left-8"
                  : "left-1"
              }`}
            />
          </button>
        </label>

      </div>
    </div>
  );
};

export default NotificationSettings;