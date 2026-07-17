import { useContext, useMemo, useState } from "react";

import { TeamContext } from "../context/TeamContext";
import { useApp } from "../context/AppContext";

import TeamToolbar from "../components/team/TeamToolbar";
import TeamGrid from "../components/team/TeamGrid";
import AddMemberModal from "../components/team/AddMemberModal";
import MemberProfileModal from "../components/team/MemberProfileModal";
import ConfirmModal from "../components/common/ConfirmModal";

import toast from "react-hot-toast";

const Team = () => {
  const { members, deleteMember } = useContext(TeamContext);
  const { theme } = useApp();

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const [selectedMember, setSelectedMember] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const filteredMembers = useMemo(() => {
    return members.filter((member) =>
      member.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [members, search]);

  const closeModal = () => {
    setEditingMember(null);
    setOpenModal(false);
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setOpenModal(true);
  };

  const handleViewProfile = (member) => {
    setSelectedMember(member);
    setProfileOpen(true);
  };

  const closeProfile = () => {
    setSelectedMember(null);
    setProfileOpen(false);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteMember(deleteId);

    toast.success("Member deleted successfully");

    setConfirmOpen(false);
    setDeleteId(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1
          className={`text-4xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Team
        </h1>

        <p
          className={`mt-2 ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Manage your team members and collaboration.
        </p>
      </div>

      <TeamToolbar
        search={search}
        setSearch={setSearch}
        setOpenModal={setOpenModal}
      />

      <TeamGrid
        members={filteredMembers}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
        onViewProfile={handleViewProfile}
      />

      {openModal && (
        <AddMemberModal
          setOpenModal={closeModal}
          editingMember={editingMember}
        />
      )}

      {profileOpen && (
        <MemberProfileModal
          member={selectedMember}
          onClose={closeProfile}
          onEdit={handleEdit}
        />
      )}

      {confirmOpen && (
        <ConfirmModal
          title="Delete Member"
          message="Are you sure you want to delete this member?"
          onConfirm={confirmDelete}
          onCancel={() =>
            setConfirmOpen(false)
          }
        />
      )}
    </div>
  );
};

export default Team;