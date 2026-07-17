import { CalendarDays } from "lucide-react";
import { useTasks } from "../../context/TaskContext";
import { useApp } from "../../context/AppContext";

const UpcomingDeadlines = () => {
  const { tasks } = useTasks();
  const { theme } = useApp();

  const upcomingTasks = [...tasks]
    .filter(
  (task) =>
    task.dueDate &&
    task.status !== "done"
)
    .sort(
      (a, b) =>
        new Date(a.dueDate) - new Date(b.dueDate)
    )
    .slice(0, 5);

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-5 flex items-center gap-3">
        <CalendarDays className="text-blue-600" />

        <h2
          className={`text-xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Upcoming Deadlines
        </h2>
        <p
  className={`mt-1 text-sm ${
    theme === "dark"
      ? "text-slate-400"
      : "text-slate-500"
  }`}
>
  Next upcoming task deadlines
</p>
      </div>

      {upcomingTasks.length === 0 ? (
        <div className="py-6 text-center">
          <p
            className={
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }
          >
            No upcoming deadlines.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className={`rounded-xl border p-4 transition ${
                theme === "dark"
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-100 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`font-semibold ${
                    theme === "dark"
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {task.title}
                </h3>

                <span
                  className={`text-xs ${
                    theme === "dark"
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                     {task.dueDate}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {task.priority}
                </span>
                <span
  className={`rounded-full px-3 py-1 text-xs font-semibold ${
    task.status === "done"
      ? "bg-green-100 text-green-700"
      : task.status === "inprogress"
      ? "bg-blue-100 text-blue-700"
      : "bg-slate-100 text-slate-700"
  }`}
>
  {task.status === "done"
    ? "Completed"
    : task.status === "inprogress"
    ? "In Progress"
    : "Todo"}
</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingDeadlines;