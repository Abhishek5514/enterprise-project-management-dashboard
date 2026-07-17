import { useApp } from "../../context/AppContext";

const CalendarWidget = () => {
  const { theme } = useApp();

  const today = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
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
        Calendar
      </h2>

      <div className="rounded-xl bg-blue-600 p-6 text-center text-white">
        <p className="text-lg">
          {today.toLocaleDateString("en-IN", options)}
        </p>

        <h1 className="mt-4 text-6xl font-bold">
          {today.getDate()}
        </h1>

        <p className="mt-2 text-blue-100">
          {today.toLocaleString("default", {
            month: "long",
          })}
        </p>
      </div>

      <div
        className={`mt-5 rounded-xl p-4 ${
          theme === "dark"
            ? "bg-slate-900"
            : "bg-slate-50"
        }`}
      >
        <p
          className={`text-sm ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Today's Schedule
        </p>

        <p
          className={`mt-2 font-semibold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          No meetings scheduled
        </p>
      </div>
    </div>
  );
};

export default CalendarWidget;