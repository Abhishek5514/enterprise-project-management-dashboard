import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useApp } from "../context/AppContext";

import ProfileSettings from "../components/settings/ProfileSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import PreferencesSettings from "../components/settings/PreferencesSettings";
import SecuritySettings from "../components/settings/SecuritySettings";

const defaultProfile = {
  name: "Abhishek",
  email: "abhishek@example.com",
  role: "Frontend Developer",
};

const defaultNotifications = {
  email: true,
  push: false,
};

const defaultAppearance = false;

const defaultLanguage = "English";
const defaultTimezone = "Asia/Kolkata";

const Settings = () => {
  const { theme } = useApp();

  const [profile, setProfile] = useState(defaultProfile);

  const [notifications, setNotifications] =
    useState(defaultNotifications);

  const [darkMode, setDarkMode] =
    useState(defaultAppearance);

  const [language, setLanguage] =
    useState(defaultLanguage);

  const [timezone, setTimezone] =
    useState(defaultTimezone);

  useEffect(() => {
    const saved =
      localStorage.getItem("appSettings");

    if (saved) {
      const data = JSON.parse(saved);

      setProfile(
        data.profile || defaultProfile
      );

      setNotifications(
        data.notifications ||
          defaultNotifications
      );

      setDarkMode(
        data.darkMode ??
          defaultAppearance
      );

      setLanguage(
        data.language ||
          defaultLanguage
      );

      setTimezone(
        data.timezone ||
          defaultTimezone
      );
    }
  }, []);

  const handleSave = () => {
    if (
      !profile.name.trim() ||
      !profile.email.trim() ||
      !profile.role.trim()
    ) {
      toast.error(
        "Please fill all profile fields."
      );
      return;
    }

    localStorage.setItem(
      "appSettings",
      JSON.stringify({
        profile,
        notifications,
        darkMode,
        language,
        timezone,
      })
    );

    toast.success(
      "Settings saved successfully."
    );
  };

  const handleReset = () => {
    setProfile(defaultProfile);

    setNotifications(
      defaultNotifications
    );

    setDarkMode(defaultAppearance);

    setLanguage(defaultLanguage);

    setTimezone(defaultTimezone);

    localStorage.removeItem(
      "appSettings"
    );

    toast.success(
      "Settings reset successfully."
    );
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
          Settings
        </h1>

        <p
          className={`mt-2 ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Manage your account preferences.
        </p>
      </div>

      <ProfileSettings
        profile={profile}
        setProfile={setProfile}
      />

      <NotificationSettings
        notifications={notifications}
        setNotifications={
          setNotifications
        }
      />

      <AppearanceSettings
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <PreferencesSettings
        language={language}
        setLanguage={setLanguage}
        timezone={timezone}
        setTimezone={setTimezone}
      />

      <SecuritySettings />

      <div className="flex justify-end gap-4">
        <button
          onClick={handleReset}
          className={`rounded-xl border px-6 py-3 font-semibold transition ${
            theme === "dark"
              ? "border-slate-600 text-white hover:bg-slate-700"
              : "border-slate-300 hover:bg-slate-100"
          }`}
        >
          Reset
        </button>

        <button
          onClick={handleSave}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;