import { ArrowLeft, Home, SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

const NotFound = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-xl text-center">
        <div
          className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${
            theme === "dark"
              ? "bg-blue-500/10 text-blue-400"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          <SearchX size={40} />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Error 404
        </p>

        <h1
          className={`text-4xl font-bold sm:text-5xl ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Page Not Found
        </h1>

        <p
          className={`mx-auto mt-4 max-w-md text-base leading-7 ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            <Home size={18} />
            Go to Dashboard
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold transition sm:w-auto ${
              theme === "dark"
                ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                : "border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;