import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactGA from "react-ga4";

function App() {
  const [count, setCount] = useState(0);

  const handleLinkClick = (label: string) => {
    ReactGA.event({
      category: "Navigation",
      action: "button_click",
      label: label,
    });
  };

  return (
    <>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
          onClick={() => handleLinkClick("Vite")}
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          onClick={() => handleLinkClick("React")}
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
