import { FolderOpen } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="mb-5 rounded-full bg-slate-100 p-5">
        <FolderOpen size={40} className="text-slate-500" />
      </div>

      <h2 className="text-2xl font-bold text-slate-900">
        No Projects Found
      </h2>

      <p className="mt-2 text-slate-500">
        Try searching with another keyword.
      </p>
    </div>
  );
};

export default EmptyState;