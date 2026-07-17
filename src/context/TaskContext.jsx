import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import initialTasks from "../data/tasks";
import { useApp } from "./AppContext";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const {
  addNotification,
  addActivity,
} = useApp();

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");

    return saved
      ? JSON.parse(saved)
      : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);
    const addTask = (task) => {
    setTasks((prev) => [...prev, task]);

    addNotification({
      title: "New Task Added",
      message: `${task.title} has been created.`,
      time: "Just now",
    });

    addActivity({
      title: `Task "${task.title}" created`,
    });
  };

  const deleteTask = (id) => {
    const task = tasks.find(
      (item) => item.id === id
    );

    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );

    if (task) {
      addNotification({
        title: "Task Deleted",
        message: `${task.title} has been deleted.`,
        time: "Just now",
      });

      addActivity({
        title: `Task "${task.title}" deleted`,
      });
    }
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );

    addNotification({
      title: "Task Updated",
      message: `${updatedTask.title} has been updated.`,
      time: "Just now",
    });

    addActivity({
      title: `Task "${updatedTask.title}" updated`,
    });
  };

  const moveTask = (
    taskId,
    newStatus
  ) => {
    const task = tasks.find(
      (item) => item.id === taskId
    );

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );

    if (task) {
      addNotification({
        title: "Task Status Changed",
        message: `${task.title} moved to ${newStatus}.`,
        time: "Just now",
      });

      addActivity({
        title: `${task.title} moved to ${newStatus}`,
      });
    }
  };
    return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        moveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

export default TaskProvider;