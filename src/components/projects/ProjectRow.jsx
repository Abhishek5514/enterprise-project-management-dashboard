import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import ActionMenu from "./ActionMenu";

import { useApp } from "../../context/AppContext";

const ProjectRow = ({
  project,
  setEditingProject,
}) => {
  const { theme } = useApp();

  return (
    <tr
      className={`border-b transition-colors duration-300 ${
        theme === "dark"
          ? "border-slate-700 hover:bg-slate-900"
          : "border-slate-100 hover:bg-slate-50"
      }`}
    >
      <td className="px-6 py-5">
        <div>
          <h3
            className={`font-semibold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {project.name}
          </h3>

          <p
            className={`text-sm ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            {project.client}
          </p>
        </div>
      </td>

      <td className="px-6 py-5">
        <StatusBadge status={project.status} />
      </td>

      <td className="px-6 py-5">
        <PriorityBadge priority={project.priority} />
      </td>

      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div
            className={`h-2 w-28 rounded-full ${
              theme === "dark"
                ? "bg-slate-700"
                : "bg-slate-200"
            }`}
          >
            <div
              className="h-2 rounded-full bg-blue-600"
              style={{
                width: `${project.progress}%`,
              }}
            />
          </div>

          <span
            className={`text-sm font-medium ${
              theme === "dark"
                ? "text-white"
                : "text-slate-700"
            }`}
          >
            {project.progress}%
          </span>
        </div>
      </td>

      <td className="px-6 py-5">
        <div className="flex -space-x-2">
          {project.team.map((member, index) => (
            <div
              key={index}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-xs font-semibold text-white"
            >
              {member}
            </div>
          ))}
        </div>
      </td>

      <td
        className={`px-6 py-5 text-sm font-medium ${
          theme === "dark"
            ? "text-slate-300"
            : "text-slate-600"
        }`}
      >
        {project.dueDate}
      </td>

      <td className="px-6 py-5">
        <ActionMenu
          project={project}
          setEditingProject={setEditingProject}
        />
      </td>
    </tr>
  );
};

export default ProjectRow;