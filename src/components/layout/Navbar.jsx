import { useEffect, useRef, useState } from "react";
import { Bell, Search, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import SearchModal from "./SearchModal";
import ThemeToggle from "./ThemeToggle";

import { useApp } from "../../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const {
    searchQuery,
    setSearchQuery,
    theme,
    notifications = [],
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const searchRef = useRef(null);

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    const handleShortcut = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowSearch(true);
      }

      if (e.key === "Escape") {
        setShowSearch(false);
        setShowNotifications(false);
        setShowProfile(false);
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener(
        "keydown",
        handleShortcut
      );
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 flex h-20 items-center justify-between border-b px-4 sm:px-6 lg:px-8 backdrop-blur-md transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700/60 bg-slate-900/90"
          : "border-slate-200 bg-white/90"
      }`}
    >
      <div>
        <p
          className={`text-sm ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Welcome back 
        </p>

        <h2
          className={`mt-1 text-xl font-bold sm:text-2xl ${
            theme === "dark"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Abhishek
        </h2>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">

        <div
          ref={searchRef}
          className="relative hidden md:block"
        >
          <button
            onClick={() => setShowSearch(true)}
            aria-label="Open Search"
            className={`flex w-64 lg:w-72 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800 text-slate-300 hover:border-blue-500"
                : "border-slate-200 bg-white hover:border-blue-500"
            }`}
          >
            <Search
              size={18}
              className="text-slate-400"
            />

            <span className="flex-1 text-sm text-slate-400">
              Search anything...
            </span>

            <kbd
              className={`rounded-md px-2 py-1 text-xs ${
                theme === "dark"
                  ? "bg-slate-700 text-slate-300"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              Ctrl K
            </kbd>
          </button>

          {showSearch && (
            <SearchModal
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onClose={() => setShowSearch(false)}
            />
          )}
        </div>

        <ThemeToggle />
                <div
          className="relative"
          ref={notificationRef}
        >
          <button
            aria-label="Notifications"
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className={`relative rounded-xl border p-3 transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
                : "border-slate-200 bg-white hover:bg-slate-100"
            }`}
          >
            <Bell size={20} />

            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <NotificationDropdown
              onClose={() =>
                setShowNotifications(false)
              }
            />
          )}
        </div>

        <button
          aria-label="Settings"
          onClick={() => navigate("/settings")}
          className={`rounded-xl border p-3 transition-all duration-300 hover:scale-105 ${
            theme === "dark"
              ? "border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
              : "border-slate-200 bg-white hover:bg-slate-100"
          }`}
        >
          <Settings size={20} />
        </button>

        <div
          className="relative"
          ref={profileRef}
        >
          <button
            onClick={() =>
              setShowProfile(!showProfile)
            }
            className={`flex items-center gap-3 rounded-xl border px-3 py-2 transition-all duration-300 hover:scale-[1.02] ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800 hover:bg-slate-700"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white shadow-md">
              A
            </div>

            <div className="hidden text-left sm:block">
              <h3
                className={`text-sm font-semibold ${
                  theme === "dark"
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                Abhishek
              </h3>

              <p
                className={`text-xs ${
                  theme === "dark"
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >
                Frontend Developer
              </p>
            </div>
          </button>

          {showProfile && (
            <ProfileDropdown
              onClose={() =>
                setShowProfile(false)
              }
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;