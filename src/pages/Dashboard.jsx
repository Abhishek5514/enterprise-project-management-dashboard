import DashboardStats from "../components/dashboard/DashboardStats";
import ProjectProgress from "../components/dashboard/ProjectProgress";
import RecentActivity from "../components/dashboard/RecentActivity";
import CalendarWidget from "../components/dashboard/CalendarWidget";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import WeeklyActivity from "../components/dashboard/WeeklyActivity";
import { useApp } from "../context/AppContext";

const Dashboard = () => {
  const {
    activities,
    notifications,
    theme,
  } = useApp();

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <h1
            className={`text-4xl font-bold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Dashboard Overview
          </h1>

          <p
            className={`mt-2 ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Welcome back, Abhishek 
          </p>

        </div>

        <div
          className={`rounded-2xl border px-6 py-4 shadow-sm ${
            theme === "dark"
              ? "border-slate-700 bg-slate-800"
              : "border-slate-200 bg-white"
          }`}
        >
          <h3
            className={`text-sm font-medium ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Notifications
          </h3>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {notifications.length}
          </p>

        </div>

      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

       <div className="space-y-6 xl:col-span-2">

  <ProjectProgress />

  <WeeklyActivity />

</div>

        <div className="space-y-6">

          <CalendarWidget />

          <UpcomingDeadlines />

          <RecentActivity />
                    <div
            className={`rounded-2xl border p-6 shadow-sm ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800"
                : "border-slate-200 bg-white"
            }`}
          >
            <h2
              className={`mb-5 text-xl font-bold ${
                theme === "dark"
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              Live Activity Timeline
            </h2>

            {activities.length === 0 ? (
              <div className="py-8 text-center">
                <p
                  className={
                    theme === "dark"
                      ? "text-slate-400"
                      : "text-slate-500"
                  }
                >
                  No recent activity.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {activities
                  .slice(0, 6)
                  .map((activity) => (
                    <div
                      key={activity.id}
                      className={`flex items-start gap-3 rounded-xl border p-4 ${
                        theme === "dark"
                          ? "border-slate-700 bg-slate-900"
                          : "border-slate-100 hover:bg-slate-50"
                      }`}
                    >
                      <div className="mt-1 h-3 w-3 rounded-full bg-blue-600"></div>

                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            theme === "dark"
                              ? "text-white"
                              : "text-slate-800"
                          }`}
                        >
                          {activity.title}
                        </p>

                        <span
                          className={`mt-1 block text-xs ${
                            theme === "dark"
                              ? "text-slate-400"
                              : "text-slate-400"
                          }`}
                        >
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;