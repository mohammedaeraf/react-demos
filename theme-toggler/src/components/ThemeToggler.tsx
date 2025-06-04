import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ThemeToggler() {
  // Access the current theme and the toggleTheme function from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="mb-4">
      {/* Button to toggle between light and dark themes */}
      <button
        // Change button style based on current theme
        className={theme === "light" ? "btn btn-dark" : "btn btn-light"}
        onClick={toggleTheme} // Call toggleTheme when button is clicked
      >
        {/* Button label changes based on current theme */}
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default ThemeToggler;