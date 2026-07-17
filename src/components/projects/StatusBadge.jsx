const StatusBadge = ({ status }) => {
  const styles = {
    Completed: "bg-emerald-100 text-emerald-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Pending: "bg-orange-100 text-orange-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;