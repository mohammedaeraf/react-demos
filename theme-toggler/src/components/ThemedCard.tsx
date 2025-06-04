import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "card bg-secondary text-white"
          : "card bg-light text-dark"
      }
    >
      <div className="card-body">
        <h5 className="card-title">Themed Card</h5>
        <p className="card-text">
          This card changes appearance based on the current Bootstrap theme!
        </p>
      </div>
    </div>
  );
}

export default ThemedCard;
