import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useMemo } from "react";
import { useTasks } from "../../context/TaskContext";
import { useApp } from "../../context/AppContext";

const WeeklyActivity = () => {
  const { tasks } = useTasks();
  const { theme } = useApp();

  const chartData = useMemo(() => {
    const days = [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ];

    const activity = days.map((day) => ({
      day,
      Completed: 0,
      Pending: 0,
    }));

    tasks.forEach((task) => {
      if (!task.dueDate) return;

      const date = new Date(task.dueDate);

      if (isNaN(date.getTime())) return;

      const dayIndex = (date.getDay() + 6) % 7;

      if (task.status === "done") {
        activity[dayIndex].Completed += 1;
      } else {
        activity[dayIndex].Pending += 1;
      }
    });

    return activity;
  }, [tasks]);

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2
            className={`text-xl font-bold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Weekly Activity
          </h2>

          <p
            className={`mt-1 text-sm ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Completed vs Pending Tasks
          </p>
        </div>
      </div>
<div className="h-80">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={chartData}>
      <CartesianGrid
        strokeDasharray="3 3"
        stroke={
          theme === "dark"
            ? "#334155"
            : "#E5E7EB"
        }
      />

      <XAxis
        dataKey="day"
        tick={{
          fill:
            theme === "dark"
              ? "#CBD5E1"
              : "#475569",
          fontSize: 12,
        }}
        axisLine={false}
        tickLine={false}
      />

      <YAxis
        allowDecimals={false}
        tick={{
          fill:
            theme === "dark"
              ? "#CBD5E1"
              : "#475569",
          fontSize: 12,
        }}
        axisLine={false}
        tickLine={false}
      />

      <Tooltip
        contentStyle={{
          backgroundColor:
            theme === "dark"
              ? "#1E293B"
              : "#FFFFFF",
          border:
            theme === "dark"
              ? "1px solid #334155"
              : "1px solid #E2E8F0",
          borderRadius: "12px",
          color:
            theme === "dark"
              ? "#FFFFFF"
              : "#0F172A",
        }}
      />

      <Bar
        dataKey="Completed"
        fill="#10B981"
        radius={[8, 8, 0, 0]}
      />

      <Bar
        dataKey="Pending"
        fill="#F59E0B"
        radius={[8, 8, 0, 0]}
      />
    </BarChart>
  </ResponsiveContainer>
</div>
 

      <div className="mt-6 flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-500"></div>

          <span
            className={`text-sm ${
              theme === "dark"
                ? "text-slate-300"
                : "text-slate-600"
            }`}
          >
            Completed
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-amber-500"></div>

          <span
            className={`text-sm ${
              theme === "dark"
                ? "text-slate-300"
                : "text-slate-600"
            }`}
          >
            Pending
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivity;