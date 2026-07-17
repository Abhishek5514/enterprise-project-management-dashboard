import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

import { useApp } from "../../context/AppContext";
import { useProjects } from "../../context/ProjectContext";

const ActionMenu = ({
  project,
  setEditingProject,
}) => {
  const { theme } = useApp();

  const { deleteProject } =
    useProjects();

  const [showDelete, setShowDelete] =
    useState(false);

  const handleView = () => {
    toast.success(
      `Project: ${project.name}`
    );
  };

  const handleEdit = () => {
    setEditingProject(project);
  };

  const handleDelete = () => {
    deleteProject(project.id);

    toast.success(
      "Project deleted successfully."
    );

    setShowDelete(false);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2">

        <button
          title="View"
          onClick={handleView}
          className={`rounded-lg p-2 transition-all duration-200 ${
            theme === "dark"
              ? "text-slate-300 hover:bg-blue-900/40 hover:text-blue-400"
              : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <FaEye size={15} />
        </button>

        <button
          title="Edit"
          onClick={handleEdit}
          className={`rounded-lg p-2 transition-all duration-200 ${
            theme === "dark"
              ? "text-slate-300 hover:bg-amber-900/40 hover:text-amber-400"
              : "text-slate-500 hover:bg-amber-50 hover:text-amber-600"
          }`}
        >
          <FaPen size={15} />
        </button>

        <button
          title="Delete"
          onClick={() =>
            setShowDelete(true)
          }
          className={`rounded-lg p-2 transition-all duration-200 ${
            theme === "dark"
              ? "text-slate-300 hover:bg-red-900/40 hover:text-red-400"
              : "text-slate-500 hover:bg-red-50 hover:text-red-600"
          }`}
        >
          <FaTrash size={15} />
        </button>

      </div>

      {showDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          <div
            className={`w-full max-w-md rounded-2xl p-6 shadow-xl ${
              theme === "dark"
                ? "bg-slate-800"
                : "bg-white"
            }`}
          >
            <h2
              className={`text-xl font-bold ${
                theme === "dark"
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              Delete Project
            </h2>

            <p
              className={`mt-3 ${
                theme === "dark"
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              Are you sure you want to delete
              <span className="font-semibold">
                {" "}
                {project.name}
              </span>
              ?
            </p>

            <div className="mt-6 flex justify-end gap-3">

              <button
                onClick={() =>
                  setShowDelete(false)
                }
                className="rounded-xl border border-slate-300 px-5 py-2 font-semibold hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
              >
                Delete
              </button>

            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default ActionMenu;