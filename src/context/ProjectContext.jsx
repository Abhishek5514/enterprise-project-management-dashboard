import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import projectsData from "../data/projects";
import { useApp } from "./AppContext";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const {
    addNotification,
    addActivity,
  } = useApp();

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");

    return saved
      ? JSON.parse(saved)
      : projectsData;
  });

  useEffect(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);

    addNotification({
      title: "Project Created",
      message: `${project.name} has been created.`,
      time: "Just now",
    });

    addActivity({
      title: `Project "${project.name}" created`,
    });
  };

  const updateProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === updatedProject.id
          ? updatedProject
          : project
      )
    );

    addNotification({
      title: "Project Updated",
      message: `${updatedProject.name} updated successfully.`,
      time: "Just now",
    });

    addActivity({
      title: `Project "${updatedProject.name}" updated`,
    });
  };

  const deleteProject = (id) => {
    const project = projects.find(
      (item) => item.id === id
    );

    setProjects((prev) =>
      prev.filter(
        (project) => project.id !== id
      )
    );

    if (project) {
      addNotification({
        title: "Project Deleted",
        message: `${project.name} deleted successfully.`,
        time: "Just now",
      });

      addActivity({
        title: `Project "${project.name}" deleted`,
      });
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () =>
  useContext(ProjectContext);

export default ProjectProvider;