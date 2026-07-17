import {
  ArrowRight,
  Activity,
} from "lucide-react";

import { useApp } from "../../context/AppContext";

const RecentActivity = () => {
  const { theme, activities } = useApp();

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="text-blue-600" />

          <h2
            className={`text-xl font-bold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Recent Activity
          </h2>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {activities.length === 0 ? (
        <div className="py-10 text-center">
          <p
            className={
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }
          >
            No recent activity found.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {activities.slice(0, 6).map((activity) => (
            <div
              key={activity.id}
              className={`flex items-start gap-4 rounded-xl border p-4 transition-all ${
                theme === "dark"
                  ? "border-slate-700 hover:bg-slate-700"
                  : "border-slate-100 hover:bg-slate-50"
              }`}
            >
              <div className="mt-1 h-3 w-3 rounded-full bg-blue-600" />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-semibold ${
                      theme === "dark"
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >
                    {activity.title}
                  </h3>

                  <span
                    className={`text-xs ${
                      theme === "dark"
                        ? "text-slate-400"
                        : "text-slate-400"
                    }`}
                  >
                    {activity.time}
                  </span>
                </div>

                {activity.message && (
                  <p
                    className={`mt-1 text-sm ${
                      theme === "dark"
                        ? "text-slate-300"
                        : "text-slate-500"
                    }`}
                  >
                    {activity.message}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;