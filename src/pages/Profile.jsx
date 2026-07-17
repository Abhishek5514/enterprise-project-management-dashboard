import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Pencil,
  Lock,
} from "lucide-react";
import toast from "react-hot-toast";

const Profile = () => {
  const handleEdit = () => {
    toast.success("Edit Profile feature coming soon.");
  };

  const handlePassword = () => {
    toast.success("Change Password feature coming soon.");
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your personal information and account details.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex flex-col items-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
            A
          </div>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Abhishek
          </h2>

          <p className="text-slate-500">
            Frontend Developer
          </p>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" />
            <span>abhishek@example.com</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-blue-600" />
            <span>+91 9876543210</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-blue-600" />
            <span>New Delhi, India</span>
          </div>

          <div className="flex items-center gap-3">
            <Briefcase className="text-blue-600" />
            <span>Engineering</span>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="text-blue-600" />
            <span>Joined: Jan 2025</span>
          </div>

        </div>

        <div className="mt-10 flex gap-4">

          <button
            onClick={handleEdit}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <Pencil size={18} />
            Edit Profile
          </button>

          <button
            onClick={handlePassword}
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
          >
            <Lock size={18} />
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;