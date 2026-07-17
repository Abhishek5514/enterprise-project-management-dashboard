import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import { useApp } from "../../context/AppContext";

const TaskColumn = ({
  title,
  status,
  tasks,
  onDelete,
  onEdit,
}) => {
  const { theme } = useApp();

  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className={`rounded-2xl border p-5 transition-all duration-300 ${
        isOver
          ? "border-blue-500 bg-blue-100"
          : theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-slate-100"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <h2
          className={`text-lg font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {title}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            theme === "dark"
              ? "bg-slate-700 text-white"
              : "bg-white text-slate-700"
          }`}
        >
          {tasks.length}
        </span>
      </div>

      <div className="min-h-[250px] space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;