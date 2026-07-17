import { Pencil, Trash2 } from "lucide-react";
import { useApp } from "../../context/AppContext";

const TeamGrid = ({
  members,
  onEdit,
  onDelete,
  onViewProfile,
}) => {
  const { theme } = useApp();

  if (members.length === 0) {
    return (
      <div
        className={`flex h-80 flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 ${
          theme === "dark"
            ? "border-slate-700 bg-slate-800"
            : "border-slate-300 bg-white"
        }`}
      >
        <div className="mb-4 text-6xl">👥</div>

        <h2
          className={`text-2xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-700"
          }`}
        >
          No Team Members
        </h2>

        <p
          className={`mt-2 text-center ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Add your first member to build your team.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {members.map((member) => (
        <div
          key={member.id}
          className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
            theme === "dark"
              ? "border-slate-700 bg-slate-800"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                {member.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3
                  className={`text-lg font-bold ${
                    theme === "dark"
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {member.name}
                </h3>

                <p
                  className={`text-sm ${
                    theme === "dark"
                      ? "text-slate-300"
                      : "text-slate-500"
                  }`}
                >
                  {member.role}
                </p>

                <p
                  className={`text-xs ${
                    theme === "dark"
                      ? "text-slate-400"
                      : "text-slate-400"
                  }`}
                >
                  {member.department}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onEdit(member)}
                className={`rounded-lg p-2 transition ${
                  theme === "dark"
                    ? "text-slate-400 hover:bg-blue-900/40 hover:text-blue-400"
                    : "text-slate-400 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Pencil size={18} />
              </button>

              <button
                onClick={() => onDelete(member.id)}
                className={`rounded-lg p-2 transition ${
                  theme === "dark"
                    ? "text-slate-400 hover:bg-red-900/40 hover:text-red-400"
                    : "text-slate-400 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div
            className={`my-5 border-t ${
              theme === "dark"
                ? "border-slate-700"
                : "border-slate-100"
            }`}
          ></div>

          <div className="space-y-3">
            <p
              className={`break-all text-sm ${
                theme === "dark"
                  ? "text-slate-300"
                  : "text-slate-500"
              }`}
            >
              {member.email}
            </p>

            <div className="flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  member.status === "Online"
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {member.status}
              </span>

              <button
                onClick={() => onViewProfile(member)}
                className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;