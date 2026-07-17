const exportTeamToCSV = (members) => {
  const headers = [
    "ID",
    "Name",
    "Email",
    "Role",
    "Department",
    "Status",
  ];

  const rows = members.map((member) => [
    member.id,
    member.name,
    member.email || "",
    member.role || "",
    member.department || "",
    member.status || "",
  ]);

  const csvContent = [headers, ...rows]
    .map((row) =>
      row.map((value) => `"${value}"`).join(",")
    )
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = `team-${
    new Date().toISOString().split("T")[0]
  }.csv`;

  link.click();

  URL.revokeObjectURL(url);
};

export default exportTeamToCSV;