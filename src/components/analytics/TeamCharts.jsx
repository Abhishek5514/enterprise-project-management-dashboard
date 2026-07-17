import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import { useApp } from "../../context/AppContext";

const COLORS = ["#22C55E", "#94A3B8"];

const TeamCharts = ({ members }) => {
  const { theme } = useApp();

  const data = [
    {
      name: "Online",
      value: members.filter(
        (member) => member.status === "Online"
      ).length,
    },
    {
      name: "Offline",
      value: members.filter(
        (member) => member.status === "Offline"
      ).length,
    },
  ];

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
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
        Team Availability
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend
              wrapperStyle={{
                color:
                  theme === "dark"
                    ? "#ffffff"
                    : "#0f172a",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TeamCharts;