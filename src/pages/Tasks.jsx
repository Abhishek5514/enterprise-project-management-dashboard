import { useContext, useMemo, useState } from "react";

import { TaskContext } from "../context/TaskContext";
import { useApp } from "../context/AppContext";

import TaskToolbar from "../components/tasks/TaskToolbar";
import TaskBoard from "../components/tasks/TaskBoard";
import AddTaskModal from "../components/tasks/AddTaskModal";
import ConfirmModal from "../components/common/ConfirmModal";

import toast from "react-hot-toast";

const Tasks = () => {
  const { tasks, deleteTask } = useContext(TaskContext);
  const { theme } = useApp();

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  const handleEdit = (task) => {
    setEditingTask(task);
    setOpenModal(true);
  };

  const closeModal = () => {
    setEditingTask(null);
    setOpenModal(false);
  };

  const handleDeleteClick = (id) => {
    setSelectedTaskId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteTask(selectedTaskId);

    toast.success("Task deleted successfully");

    setConfirmOpen(false);
    setSelectedTaskId(null);
  };

  const cancelDelete = () => {
    setConfirmOpen(false);
    setSelectedTaskId(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1
          className={`text-4xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Tasks
        </h1>

        <p
          className={`mt-2 ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Organize and manage your daily tasks.
        </p>
      </div>

      <TaskToolbar
        setOpenModal={setOpenModal}
        search={search}
        setSearch={setSearch}
      />

      <TaskBoard
        tasks={filteredTasks}
        onDelete={handleDeleteClick}
        onEdit={handleEdit}
      />

      {openModal && (
        <AddTaskModal
          setOpenModal={closeModal}
          editingTask={editingTask}
        />
      )}

      {confirmOpen && (
        <ConfirmModal
          title="Delete Task"
          message="Are you sure you want to delete this task? This action cannot be undone."
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default Tasks;