import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";
import { TeamContext } from "../context/TeamContext";

import StatsCards from "../components/analytics/StatsCards";
import TaskCharts from "../components/analytics/TaskCharts";
import TeamCharts from "../components/analytics/TeamCharts";

const Analytics = () => {
  const { tasks } = useContext(TaskContext);
  const { members } = useContext(TeamContext);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Analytics
        </h1>

        <p className="mt-2 text-slate-500">
          Monitor project performance, task completion and team productivity.
        </p>
      </div>

      <StatsCards
        tasks={tasks}
        members={members}
      />

      <TaskCharts tasks={tasks} />

      <TeamCharts members={members} />
    </div>
  );
};

export default Analytics;