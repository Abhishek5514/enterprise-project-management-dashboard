import { useContext } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";

import { TaskContext } from "../../context/TaskContext";
import { useApp } from "../../context/AppContext";

import TaskColumn from "./TaskColumn";

const TaskBoard = ({ tasks, onDelete, onEdit }) => {
  const { moveTask } = useContext(TaskContext);
  const { theme } = useApp();

  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  );

  const inProgressTasks = tasks.filter(
    (task) => task.status === "inprogress"
  );

  const doneTasks = tasks.filter(
    (task) => task.status === "done"
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    if (active.id === over.id) return;

    moveTask(active.id, over.id);
  };

  if (tasks.length === 0) {
    return (
      <div
        className={`flex h-80 flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 ${
          theme === "dark"
            ? "border-slate-700 bg-slate-800"
            : "border-slate-300 bg-white"
        }`}
      >
        <div className="mb-4 text-6xl">📋</div>

        <h2
          className={`text-2xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-700"
          }`}
        >
          No Tasks Found
        </h2>

        <p
          className={`mt-2 text-center ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Create your first task to get started.
        </p>
      </div>
    );
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <TaskColumn
          title="To Do"
          status="todo"
          tasks={todoTasks}
          onDelete={onDelete}
          onEdit={onEdit}
        />

        <TaskColumn
          title="In Progress"
          status="inprogress"
          tasks={inProgressTasks}
          onDelete={onDelete}
          onEdit={onEdit}
        />

        <TaskColumn
          title="Done"
          status="done"
          tasks={doneTasks}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    </DndContext>
  );
};

export default TaskBoard;