import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ThemedCard() {
  // Access the current theme from ThemeContext
  const { theme } = useContext(ThemeContext);

  return (
    // Set card classes based on the current theme
    <div
      className={
        theme === "dark"
          ? "card bg-secondary text-white" // Dark theme: dark background, white text
          : "card bg-light text-dark"      // Light theme: light background, dark text
      }
    >
      <div className="card-body">
        {/* Card title */}
        <h5 className="card-title">Themed Card</h5>
        {/* Card description */}
        <p className="card-text">
          This card changes appearance based on the current Bootstrap theme!
        </p>
      </div>
    </div>
  );
}

export default ThemedCard;