import { useState } from "react";
import ThemeContext, { Theme } from "./contexts/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";
import ThemedCard from "./components/ThemedCard";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((existingTheme) => (existingTheme === "light" ? "dark" : "light"));
    // setTheme(dark);
    // setTheme(light);
  };

  const themeContext = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <div
        className={
          theme === "dark"
            ? "min-vh-100 p-5 bg-dark text-light"
            : "min-vh-100 p-5 bg-light text-dark"
        }
      >
        <div className="container">
          <h1 className="mb-4">React Theme Toggle using Bootstrap</h1>
          <ThemeToggler />
          <ThemedCard />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
