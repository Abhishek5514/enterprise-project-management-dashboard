import ProjectRow from "./ProjectRow";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";

import { useApp } from "../../context/AppContext";

const ProjectTable = ({
  projects,
  setEditingProject,
}) => {
  const { theme } = useApp();

  return (
    <div
      className={`overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead
            className={
              theme === "dark"
                ? "bg-slate-900"
                : "bg-slate-50"
            }
          >
            <tr>

              <th
                className={`px-6 py-4 text-left text-sm font-semibold ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                Project
              </th>

              <th
                className={`px-6 py-4 text-left text-sm font-semibold ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                Status
              </th>

              <th
                className={`px-6 py-4 text-left text-sm font-semibold ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                Priority
              </th>

              <th
                className={`px-6 py-4 text-left text-sm font-semibold ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                Progress
              </th>

              <th
                className={`px-6 py-4 text-left text-sm font-semibold ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                Team
              </th>

              <th
                className={`px-6 py-4 text-left text-sm font-semibold ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                Due Date
              </th>

              <th
                className={`px-6 py-4 text-center text-sm font-semibold ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  setEditingProject={setEditingProject}
                />
              ))
            ) : (
              <tr>
                <td colSpan={7}>
                  <EmptyState />
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

      {projects.length > 0 && <Pagination />}

    </div>
  );
};

export default ProjectTable;