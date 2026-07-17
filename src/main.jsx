import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

import { AppProvider } from "./context/AppContext.jsx";
import TaskProvider from "./context/TaskContext.jsx";
import TeamProvider from "./context/TeamContext.jsx";
import ProjectProvider from "./context/ProjectContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <ProjectProvider>
        <TaskProvider>
          <TeamProvider>
            <App />

            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                duration: 2500,
                style: {
                  borderRadius: "12px",
                  background: "#ffffff",
                  color: "#0f172a",
                  border: "1px solid #e2e8f0",
                  fontWeight: "500",
                },
                success: {
                  iconTheme: {
                    primary: "#2563eb",
                    secondary: "#ffffff",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "#ef4444",
                    secondary: "#ffffff",
                  },
                },
              }}
            />
          </TeamProvider>
        </TaskProvider>
      </ProjectProvider>
    </AppProvider>
  </StrictMode>
);