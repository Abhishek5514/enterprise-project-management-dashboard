import { useApp } from "../../context/AppContext";

const MemberProfileModal = ({
  member,
  onClose,
  onEdit,
}) => {
  const { theme } = useApp();

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div
        className={`w-full max-w-md rounded-2xl border p-8 shadow-2xl transition-all duration-300 ${
          theme === "dark"
            ? "border-slate-700 bg-slate-800"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
            {member.name.charAt(0).toUpperCase()}
          </div>

          <h2
            className={`mt-5 text-3xl font-bold ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {member.name}
          </h2>

          <p
            className={`mt-1 ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            {member.role}
          </p>
        </div>

        <div className="mt-8 space-y-5">
          <div
            className={`flex justify-between border-b pb-3 ${
              theme === "dark"
                ? "border-slate-700"
                : "border-slate-200"
            }`}
          >
            <span
              className={`font-semibold ${
                theme === "dark"
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              Department
            </span>

            <span
              className={
                theme === "dark"
                  ? "text-white"
                  : "text-slate-900"
              }
            >
              {member.department}
            </span>
          </div>

          <div
            className={`flex justify-between border-b pb-3 ${
              theme === "dark"
                ? "border-slate-700"
                : "border-slate-200"
            }`}
          >
            <span
              className={`font-semibold ${
                theme === "dark"
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              Email
            </span>

            <span
              className={`break-all text-right ${
                theme === "dark"
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {member.email}
            </span>
          </div>

          <div className="flex justify-between">
            <span
              className={`font-semibold ${
                theme === "dark"
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              Status
            </span>

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                member.status === "Online"
                  ? "bg-green-100 text-green-700"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {member.status}
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-end gap-3">
          <button
            onClick={() => {
              onEdit(member);
              onClose();
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Edit Member
          </button>

          <button
            onClick={onClose}
            className={`rounded-xl border px-5 py-2 font-semibold transition ${
              theme === "dark"
                ? "border-slate-600 text-white hover:bg-slate-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberProfileModal;