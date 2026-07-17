import { TrendingDown, TrendingUp } from "lucide-react";
import { useApp } from "../../context/AppContext";

const StatsCard = ({
  title,
  value,
  change,
  positive,
  icon,
  iconBg,
}) => {
  const { theme } = useApp();

  return (
    <div
      className={`group rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3
            className={`text-sm font-medium ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            {title}
          </h3>

          <h2
            className={`mt-4 text-3xl font-bold tracking-tight ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {value}
          </h2>

          <div className="mt-5 flex items-center gap-2">
            {positive ? (
              <TrendingUp
                size={16}
                className="text-emerald-500"
              />
            ) : (
              <TrendingDown
                size={16}
                className="text-red-500"
              />
            )}

            <span
              className={`text-sm font-semibold ${
                positive
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              {change}
            </span>

            <span
              className={`text-sm ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              this month
            </span>
          </div>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-md ${iconBg}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;