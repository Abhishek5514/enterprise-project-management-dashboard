import {
  FolderKanban,
  CheckCircle2,
  Users,
  BarChart3,
} from "lucide-react";

import { useApp } from "../../context/AppContext";

const StatsCards = ({ tasks, members }) => {
  const { theme } = useApp();

  const completedTasks = tasks.filter(
    (task) => task.status === "done"
  ).length;

  const completionRate =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const stats = [
    {
      title: "Total Tasks",
      value: tasks.length,
      icon: FolderKanban,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Completed Tasks",
      value: completedTasks,
      icon: CheckCircle2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Team Members",
      value: members.length,
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Completion Rate",
      value: `${completionRate}%`,
      icon: BarChart3,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm ${
                    theme === "dark"
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  {item.title}
                </p>

                <h2
                  className={`mt-2 text-3xl font-bold ${
                    theme === "dark"
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;