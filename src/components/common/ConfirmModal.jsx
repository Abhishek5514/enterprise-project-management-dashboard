import { useApp } from "../../context/AppContext";

const ConfirmModal = ({
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  const { theme } = useApp();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div
        className={`w-full max-w-md rounded-2xl border p-6 shadow-2xl transition-all duration-300 ${
          theme === "dark"
            ? "border-slate-700 bg-slate-800"
            : "border-slate-200 bg-white"
        }`}
      >
        <h2
          className={`text-2xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {title}
        </h2>

        <p
          className={`mt-3 ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          {message}
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className={`rounded-xl border px-5 py-2 transition ${
              theme === "dark"
                ? "border-slate-600 text-white hover:bg-slate-700"
                : "border-slate-200 hover:bg-slate-100"
            }`}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;