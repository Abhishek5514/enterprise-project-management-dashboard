const Pagination = () => {
  return (
    <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
      <p className="text-sm text-slate-500">
        Showing <span className="font-semibold">1-4</span> of{" "}
        <span className="font-semibold">4</span> projects
      </p>

      <div className="flex items-center gap-2">
        <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">
          Previous
        </button>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
          1
        </button>

        <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;