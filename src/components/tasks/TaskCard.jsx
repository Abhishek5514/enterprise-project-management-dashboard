import { Pencil, Trash2 } from "lucide-react";
import { useApp } from "../../context/AppContext";

const priorityStyles = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-emerald-100 text-emerald-700",
};

const TaskCard = ({ task, onDelete, onEdit }) => {
  const { theme } = useApp();

  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        theme === "dark"
          ? "border-slate-700 bg-slate-900"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <h3
          className={`text-base font-semibold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {task.title}
        </h3>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(task)}
            className={`rounded-lg p-2 transition ${
              theme === "dark"
                ? "text-slate-400 hover:bg-blue-900/40 hover:text-blue-400"
                : "text-slate-400 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <Pencil size={18} />
          </button>

          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className={`rounded-lg p-2 transition ${
              theme === "dark"
                ? "text-slate-400 hover:bg-red-900/40 hover:text-red-400"
                : "text-slate-400 hover:bg-red-50 hover:text-red-600"
            }`}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <p
        className={`mt-3 text-sm ${
          theme === "dark"
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >
        {task.description || "No description"}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${priorityStyles[task.priority]}`}
        >
          {task.priority}
        </span>

        <span
          className={`text-xs ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          {task.dueDate || "No Due Date"}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          {task.assignee}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;