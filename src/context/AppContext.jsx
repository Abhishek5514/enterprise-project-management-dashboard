import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("notifications");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "Welcome",
            message:
              "Welcome to Enterprise Dashboard.",
            time: "Just now",
            read: false,
          },
        ];
  });

  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem("activities");

    return saved ? JSON.parse(saved) : [];
  });

  const [searchQuery, setSearchQuery] =
    useState("");

  const [user] = useState({
    name: "Abhishek",
    email: "abhishek@example.com",
    role: "Frontend Developer",
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem(
      "activities",
      JSON.stringify(activities)
    );
  }, [activities]);

  const addNotification = (
    notification
  ) => {
    setNotifications((prev) => [
      {
        id: Date.now(),
        read: false,
        ...notification,
      },
      ...prev,
    ]);
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      }))
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const addActivity = (activity) => {
    setActivities((prev) => [
      {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        ...activity,
      },
      ...prev,
    ]);
  };

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light"
        ? "dark"
        : "light"
    );
  };
    const value = useMemo(
    () => ({
      theme,
      toggleTheme,

      user,

      notifications,
      addNotification,
      markAllAsRead,
      clearNotifications,

      activities,
      addActivity,

      searchQuery,
      setSearchQuery,
    }),
    [
      theme,
      notifications,
      activities,
      searchQuery,
      user,
    ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useApp must be used inside AppProvider"
    );
  }

  return context;
};

export default AppContext;