import { useTeam } from "../../context/TeamContext";
import { useApp } from "../../context/AppContext";

const TeamPerformance = () => {
  const { members } = useTeam();
  const { theme } = useApp();

  const getProgressColor = (progress) => {
    if (progress >= 90) return "bg-emerald-500";
    if (progress >= 75) return "bg-blue-600";
    if (progress >= 50) return "bg-amber-500";
    return "bg-red-500";
  };

  const getAvatarColor = (index) => {
    const colors = [
      "bg-blue-600",
      "bg-emerald-500",
      "bg-violet-600",
      "bg-pink-500",
      "bg-orange-500",
      "bg-cyan-500",
    ];

    return colors[index % colors.length];
  };

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2
            className={`text-xl font-bold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Team Performance
          </h2>

          <p
            className={`mt-1 text-sm ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Live productivity overview
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            theme === "dark"
              ? "bg-slate-700 text-slate-300"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {members.length} Members
        </span>
      </div>

      {members.length === 0 ? (
        <div className="py-12 text-center">
          <p
            className={
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }
          >
            No team members available.
          </p>
        </div>
      ) : (
        <div className="space-y-6">          {members.map((member, index) => (
            <div key={member.id}>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-semibold text-white ${getAvatarColor(
                      index
                    )}`}
                  >
                    {member.avatar ||
                      member.name?.charAt(0)?.toUpperCase() ||
                      "U"}
                  </div>

                  <div>
                    <h3
                      className={`font-semibold ${
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
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-sm font-semibold ${
                    theme === "dark"
                      ? "text-slate-300"
                      : "text-slate-700"
                  }`}
                >
                  {member.progress}%
                </span>
              </div>

              <div
                className={`h-2 rounded-full ${
                  theme === "dark"
                    ? "bg-slate-700"
                    : "bg-slate-100"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(
                    member.progress
                  )}`}
                  style={{
                    width: `${member.progress}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamPerformance;