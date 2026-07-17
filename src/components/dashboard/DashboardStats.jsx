import {
  FolderKanban,
  CheckSquare,
  Clock3,
  Users,
} from "lucide-react";

import StatsCard from "./StatsCard";

import { useTasks } from "../../context/TaskContext";
import { useTeam } from "../../context/TeamContext";
import { useProjects } from "../../context/ProjectContext";

const DashboardStats = () => {
  const { projects } = useProjects();
  const { tasks } = useTasks();
  const { members } = useTeam();

  // Dynamic Stats
  const totalProjects = projects.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "done"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "done"
  ).length;

  const totalMembers = members.length;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Total Projects"
        value={totalProjects}
        change="Live"
        positive={true}
        icon={
          <FolderKanban
            size={28}
            className="text-white"
          />
        }
        iconBg="bg-blue-600"
      />

      <StatsCard
        title="Completed Tasks"
        value={completedTasks}
        change="Live"
        positive={true}
        icon={
          <CheckSquare
            size={28}
            className="text-white"
          />
        }
        iconBg="bg-emerald-500"
      />

      <StatsCard
        title="Pending Tasks"
        value={pendingTasks}
        change="Live"
        positive={pendingTasks === 0}
        icon={
          <Clock3
            size={28}
            className="text-white"
          />
        }
        iconBg="bg-orange-500"
      />

      <StatsCard
        title="Team Members"
        value={totalMembers}
        change="Live"
        positive={true}
        icon={
          <Users
            size={28}
            className="text-white"
          />
        }
        iconBg="bg-violet-600"
      />
    </div>
  );
};

export default DashboardStats;