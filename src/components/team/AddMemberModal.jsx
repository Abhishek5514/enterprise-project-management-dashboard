import { useContext, useEffect, useState } from "react";
import { TeamContext } from "../../context/TeamContext";

const AddMemberModal = ({ setOpenModal, editingMember }) => {
  const { addMember, updateMember } = useContext(TeamContext);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Online");

  useEffect(() => {
    if (editingMember) {
      setName(editingMember.name || "");
      setRole(editingMember.role || "");
      setDepartment(editingMember.department || "");
      setEmail(editingMember.email || "");
      setStatus(editingMember.status || "Online");
    } else {
      setName("");
      setRole("");
      setDepartment("");
      setEmail("");
      setStatus("Online");
    }
  }, [editingMember]);

  const handleSave = () => {
    if (
      !name.trim() ||
      !role.trim() ||
      !department.trim() ||
      !email.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    const memberData = {
      id: editingMember
        ? editingMember.id
        : Date.now().toString(),

      name: name.trim(),
      role: role.trim(),
      department: department.trim(),
      email: email.trim(),
      status,
    };

    if (editingMember) {
      updateMember(memberData);
    } else {
      addMember(memberData);
    }

    setOpenModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          {editingMember ? "Edit Member" : "Add Member"}
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option>Online</option>
            <option>Offline</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={() => setOpenModal()}
              className="rounded-xl border border-slate-200 px-5 py-2 hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
            >
              {editingMember ? "Update Member" : "Add Member"}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AddMemberModal;