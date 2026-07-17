import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { TaskContext } from "../../context/TaskContext";
import { useApp } from "../../context/AppContext";

const AddTaskModal = ({ setOpenModal, editingTask }) => {
  const { addTask, updateTask } = useContext(TaskContext);
  const { theme } = useApp();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");
  const [status, setStatus] = useState("todo");
  const [dueDate, setDueDate] = useState("");
  const [assignee, setAssignee] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
      setPriority(editingTask.priority || "High");
      setStatus(editingTask.status || "todo");
      setDueDate(editingTask.dueDate || "");
      setAssignee(editingTask.assignee || "");
    } else {
      setTitle("");
      setDescription("");
      setPriority("High");
      setStatus("todo");
      setDueDate("");
      setAssignee("");
    }
  }, [editingTask]);

  const handleSave = () => {
    if (!title.trim()) {
      toast.error("Task title is required");
      return;
    }

    const taskData = {
      id: editingTask
        ? editingTask.id
        : Date.now().toString(),

      title: title.trim(),
      description: description.trim(),
      priority,
      status,
      dueDate,

      assignee: assignee
        ? assignee.charAt(0).toUpperCase()
        : "U",
    };

    if (editingTask) {
      updateTask(taskData);
      toast.success("Task updated successfully");
    } else {
      addTask(taskData);
      toast.success("Task added successfully");
    }

    setOpenModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div
        className={`w-full max-w-lg rounded-2xl p-6 shadow-2xl transition-all duration-300 ${
          theme === "dark"
            ? "bg-slate-800 border border-slate-700"
            : "bg-white"
        }`}
      >
        <h2
          className={`mb-6 text-2xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {editingTask ? "Edit Task" : "Add New Task"}
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
              theme === "dark"
                ? "border-slate-600 bg-slate-900 text-white placeholder:text-slate-400 focus:border-blue-500"
                : "border-slate-200 bg-white text-slate-900 focus:border-blue-600"
            }`}
          />

          <textarea
            rows={4}
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition ${
              theme === "dark"
                ? "border-slate-600 bg-slate-900 text-white placeholder:text-slate-400 focus:border-blue-500"
                : "border-slate-200 bg-white text-slate-900 focus:border-blue-600"
            }`}
          />

          <div className="grid grid-cols-2 gap-4">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={`rounded-xl border px-4 py-3 outline-none ${
                theme === "dark"
                  ? "border-slate-600 bg-slate-900 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={`rounded-xl border px-4 py-3 outline-none ${
                theme === "dark"
                  ? "border-slate-600 bg-slate-900 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={`w-full rounded-xl border px-4 py-3 outline-none ${
              theme === "dark"
                ? "border-slate-600 bg-slate-900 text-white"
                : "border-slate-200 bg-white"
            }`}
          />

          <input
            type="text"
            placeholder="Assignee Name"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            className={`w-full rounded-xl border px-4 py-3 outline-none ${
              theme === "dark"
                ? "border-slate-600 bg-slate-900 text-white placeholder:text-slate-400"
                : "border-slate-200 bg-white"
            }`}
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => setOpenModal()}
              className={`rounded-xl border px-5 py-2 transition ${
                theme === "dark"
                  ? "border-slate-600 text-white hover:bg-slate-700"
                  : "border-slate-200 hover:bg-slate-100"
              }`}
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
            >
              {editingTask ? "Update Task" : "Save Task"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;