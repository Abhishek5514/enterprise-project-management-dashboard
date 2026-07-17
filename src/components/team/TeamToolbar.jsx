import { Plus, Search, Download } from "lucide-react";
import { useContext } from "react";

import { TeamContext } from "../../context/TeamContext";
import exportTeamToCSV from "../../utils/exportTeamToCSV";

const TeamToolbar = ({
  setOpenModal,
  search,
  setSearch,
}) => {
  const { members } = useContext(TeamContext);

  const handleExport = () => {
    exportTeamToCSV(members);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-blue-600"
        />

      </div>

      <div className="flex items-center gap-3">

        <button
          onClick={handleExport}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          <Download size={18} />
          Export CSV
        </button>

        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Member
        </button>

      </div>

    </div>
  );
};

export default TeamToolbar;