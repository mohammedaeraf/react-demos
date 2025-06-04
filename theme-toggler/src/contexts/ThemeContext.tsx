import { createContext } from "react";

// Define the possible theme values
export type Theme = "light" | "dark";

// Define the shape of the ThemeContext
type ThemeContextType = {
  theme: Theme;               // Current theme value ("light" or "dark")
  toggleTheme: () => void;    // Function to toggle between themes
};

// Create the ThemeContext with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",             // Default theme is "light"
  toggleTheme: () => {},      // Default is an empty function
});

export default ThemeContext;