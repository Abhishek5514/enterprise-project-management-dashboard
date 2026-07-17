import { Search, Plus } from "lucide-react";
import { useApp } from "../../context/AppContext";

const ProjectToolbar = ({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  setOpenModal,
}) => {
  const { theme } = useApp();

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="flex flex-1 flex-wrap gap-4">

        <div className="relative min-w-[260px] flex-1">

          <Search
            size={18}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-400"
            }`}
          />

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className={`w-full rounded-xl border py-3 pl-11 pr-4 outline-none transition ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800 text-white placeholder:text-slate-500 focus:border-blue-600"
                : "border-slate-200 bg-white text-slate-900 focus:border-blue-600"
            }`}
          />

        </div>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className={`rounded-xl border px-4 py-3 ${
            theme === "dark"
              ? "border-slate-700 bg-slate-800 text-white"
              : "border-slate-200 bg-white"
          }`}
        >
          <option>All</option>
          <option>Completed</option>
          <option>In Progress</option>
          <option>Pending</option>
        </select>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          className={`rounded-xl border px-4 py-3 ${
            theme === "dark"
              ? "border-slate-700 bg-slate-800 text-white"
              : "border-slate-200 bg-white"
          }`}
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

      </div>
            <button
        onClick={() => setOpenModal(true)}
        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        <Plus size={18} />
        New Project
      </button>

    </div>
  );
};

export default ProjectToolbar;