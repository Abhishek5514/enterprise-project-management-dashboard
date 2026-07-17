import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ChevronDown } from "lucide-react";

import { useApp } from "../../context/AppContext";
import { useProjects } from "../../context/ProjectContext";
const ProjectProgress = () => {
  const { theme } = useApp();
  const { projects } = useProjects();
const totalProjects = projects.length;

const completedProjects = projects.filter(
  (project) => project.status === "Completed"
).length;

const inProgressProjects = projects.filter(
  (project) => project.status === "In Progress"
).length;

const pendingProjects = projects.filter(
  (project) => project.status === "Pending"
).length;

const progress =
  totalProjects === 0
    ? 0
    : Math.round((completedProjects / totalProjects) * 100);

const completedPercentage = progress;

const inProgressPercentage =
  totalProjects === 0
    ? 0
    : Math.round((inProgressProjects / totalProjects) * 100);

const pendingPercentage =
  totalProjects === 0
    ? 0
    : Math.round((pendingProjects / totalProjects) * 100);
  

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-8 flex items-center justify-between">
        <h2
          className={`text-xl font-semibold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Project Progress
        </h2>

        <button
          className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition ${
            theme === "dark"
              ? "border-slate-600 bg-slate-700 text-slate-200 hover:bg-slate-600"
              : "border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          This Month
          <ChevronDown size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 items-center gap-10">
        <div className="mx-auto h-44 w-44">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              pathColor: "#2563EB",
              trailColor:
                theme === "dark"
                  ? "#334155"
                  : "#E5E7EB",
              textColor:
                theme === "dark"
                  ? "#FFFFFF"
                  : "#0F172A",
              strokeLinecap: "round",
              textSize: "18px",
            })}
          />
        </div>

        <div className="space-y-5">
          <div
            className={`flex items-center justify-between border-b pb-3 ${
              theme === "dark"
                ? "border-slate-700"
                : "border-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-blue-600"></div>

              <span
                className={
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }
              >
                Completed
              </span>
            </div>

            <span
              className={
                theme === "dark"
                  ? "font-semibold text-white"
                  : "font-semibold"
              }
            >
              {completedPercentage}%
            </span>
          </div>

          <div
            className={`flex items-center justify-between border-b pb-3 ${
              theme === "dark"
                ? "border-slate-700"
                : "border-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-emerald-500"></div>

              <span
                className={
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }
              >
                In Progress
              </span>
            </div>

            <span
              className={
                theme === "dark"
                  ? "font-semibold text-white"
                  : "font-semibold"
              }
            >
              {inProgressPercentage}%
            </span>
          </div>

          <div
            className={`flex items-center justify-between border-b pb-3 ${
              theme === "dark"
                ? "border-slate-700"
                : "border-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-orange-500"></div>

              <span
                className={
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }
              >
                Pending
              </span>
            </div>

            <span
              className={
                theme === "dark"
                  ? "font-semibold text-white"
                  : "font-semibold"
              }
            >
              {pendingPercentage}%
            </span>
          </div>

          <div className="flex items-center gap-2 pt-2 text-sm">
            <span className="font-semibold text-emerald-500">
              ↑ 8%
            </span>

            <span
              className={
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-500"
              }
            >
              from last month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;