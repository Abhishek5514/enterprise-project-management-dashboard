import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import { useApp } from "../../context/AppContext";

const COLORS = ["#2563EB", "#F59E0B", "#10B981"];

const TaskCharts = ({ tasks }) => {
  const { theme } = useApp();

  const statusData = [
    {
      name: "To Do",
      value: tasks.filter((task) => task.status === "todo").length,
    },
    {
      name: "In Progress",
      value: tasks.filter(
        (task) => task.status === "inprogress"
      ).length,
    },
    {
      name: "Completed",
      value: tasks.filter((task) => task.status === "done").length,
    },
  ];

  const priorityData = [
    {
      name: "High",
      value: tasks.filter((task) => task.priority === "High").length,
    },
    {
      name: "Medium",
      value: tasks.filter((task) => task.priority === "Medium").length,
    },
    {
      name: "Low",
      value: tasks.filter((task) => task.priority === "Low").length,
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div
        className={`rounded-2xl border p-6 shadow-sm ${
          theme === "dark"
            ? "border-slate-700 bg-slate-800"
            : "border-slate-200 bg-white"
        }`}
      >
        <h2
          className={`mb-6 text-xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Task Status
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={
                  theme === "dark"
                    ? "#475569"
                    : "#E2E8F0"
                }
              />

              <XAxis
                dataKey="name"
                stroke={
                  theme === "dark"
                    ? "#CBD5E1"
                    : "#475569"
                }
              />

              <YAxis
                allowDecimals={false}
                stroke={
                  theme === "dark"
                    ? "#CBD5E1"
                    : "#475569"
                }
              />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="value"
                radius={[8, 8, 0, 0]}
                fill="#2563EB"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        className={`rounded-2xl border p-6 shadow-sm ${
          theme === "dark"
            ? "border-slate-700 bg-slate-800"
            : "border-slate-200 bg-white"
        }`}
      >
        <h2
          className={`mb-6 text-xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Priority Distribution
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={priorityData}
                dataKey="value"
                outerRadius={110}
                label
              >
                {priorityData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TaskCharts;