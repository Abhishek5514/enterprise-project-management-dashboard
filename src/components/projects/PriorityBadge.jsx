const PriorityBadge = ({ priority }) => {
  const styles = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[priority]
      }`}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;