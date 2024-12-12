import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { initializeAnalytics, logPageView } from "./utils/analytics.ts";

const measurementId = "G-GHF8FTFYYC";
initializeAnalytics(measurementId);

const Root = () => {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
