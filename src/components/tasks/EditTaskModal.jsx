const EditTaskModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Edit Task
        </h2>

        <p className="text-slate-500">
          Edit functionality will be connected in the next step.
        </p>

        <div className="mt-6 flex justify-end">
          <button className="rounded-xl bg-blue-600 px-5 py-2 text-white">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;