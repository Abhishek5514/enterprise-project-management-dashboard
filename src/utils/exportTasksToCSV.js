const exportTasksToCSV = (tasks) => {
  const headers = [
    "ID",
    "Title",
    "Description",
    "Priority",
    "Status",
    "Due Date",
  ];

  const rows = tasks.map((task) => [
    task.id,
    task.title,
    task.description || "",
    task.priority || "",
    task.status || "",
    task.dueDate || "",
  ]);

  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) =>
      row
        .map((value) => `"${value}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = `tasks-${
    new Date().toISOString().split("T")[0]
  }.csv`;

  link.click();

  URL.revokeObjectURL(url);
};

export default exportTasksToCSV;