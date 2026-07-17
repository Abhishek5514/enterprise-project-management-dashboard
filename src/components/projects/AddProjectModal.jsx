import { useEffect, useState } from "react";
import { useProjects } from "../../context/ProjectContext";
import toast from "react-hot-toast";

const AddProjectModal = ({
  setOpenModal,
  editingProject,
}) => {
  const {
    addProject,
    updateProject,
  } = useProjects();

  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] =
    useState("In Progress");
  const [priority, setPriority] =
    useState("Medium");
  const [progress, setProgress] =
    useState(0);
  const [dueDate, setDueDate] =
    useState("");
  const [team, setTeam] =
    useState("");

  useEffect(() => {
    if (editingProject) {
      setName(editingProject.name || "");
      setClient(editingProject.client || "");
      setStatus(
        editingProject.status ||
          "In Progress"
      );
      setPriority(
        editingProject.priority ||
          "Medium"
      );
      setProgress(
        editingProject.progress || 0
      );
      setDueDate(
        editingProject.dueDate || ""
      );
      setTeam(
        editingProject.team
          ? editingProject.team.join(", ")
          : ""
      );
    } else {
      setName("");
      setClient("");
      setStatus("In Progress");
      setPriority("Medium");
      setProgress(0);
      setDueDate("");
      setTeam("");
    }
  }, [editingProject]);

  const handleSave = () => {
    if (
      !name.trim() ||
      !client.trim()
    ) {
      toast.error(
        "Please fill all required fields."
      );
      return;
    }

    const projectData = {
      id: editingProject
        ? editingProject.id
        : Date.now(),

      name: name.trim(),

      client: client.trim(),

      status,

      priority,

      progress: Number(progress),

      dueDate,

      team: team
        .split(",")
        .map((member) =>
          member.trim().toUpperCase()
        )
        .filter(Boolean),
    };

    if (editingProject) {
      updateProject(projectData);

      toast.success(
        "Project updated successfully."
      );
    } else {
      addProject(projectData);

      toast.success(
        "Project added successfully."
      );
    }

    setOpenModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold text-slate-900">

          {editingProject
            ? "Edit Project"
            : "Add New Project"}

        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            placeholder="Client Name"
            value={client}
            onChange={(e) =>
              setClient(e.target.value)
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          />
<div className="grid grid-cols-2 gap-4"></div>
         
                      <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
            >
              <option>In Progress</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>

            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

          </div>

          <input
            type="number"
            min="0"
            max="100"
            value={progress}
            onChange={(e) =>
              setProgress(e.target.value)
            }
            placeholder="Progress"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            placeholder="Due Date (Ex: 25 Jul 2026)"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            placeholder="Team Members (A,R,P)"
            value={team}
            onChange={(e) =>
              setTeam(e.target.value)
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          />

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={() =>
              setOpenModal(false)
            }
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold transition hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {editingProject
              ? "Update Project"
              : "Create Project"}
          </button>

        </div>

      </div>

  );
};

export default AddProjectModal;