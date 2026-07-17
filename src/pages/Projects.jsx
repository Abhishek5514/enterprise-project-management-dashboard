import { useMemo, useState } from "react";

import { useApp } from "../context/AppContext";
import { useProjects } from "../context/ProjectContext";

import ProjectToolbar from "../components/projects/ProjectToolbar";
import ProjectTable from "../components/projects/ProjectTable";
import AddProjectModal from "../components/projects/AddProjectModal";

const Projects = () => {
  const { theme } = useApp();

  const { projects } = useProjects();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  const [openModal, setOpenModal] =
    useState(false);

  const [editingProject, setEditingProject] =
    useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        project.client
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        project.status === status;

      const matchesPriority =
        priority === "All" ||
        project.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [
    projects,
    search,
    status,
    priority,
  ]);

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
          Projects
        </h1>

        <p
          className={`mt-2 ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Manage all your company projects.
        </p>

      </div>

      <ProjectToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        priority={priority}
        setPriority={setPriority}
        setOpenModal={setOpenModal}
      />
<ProjectTable
  projects={filteredProjects}
  setEditingProject={(project) => {
    setEditingProject(project);
    setOpenModal(true);
  }}
/>
     {openModal && (
  <AddProjectModal
    setOpenModal={(value) => {
      setOpenModal(value);

      if (!value) {
        setEditingProject(null);
      }
    }}
    editingProject={editingProject}
  />
)}
     

    </div>
  );
};

export default Projects;