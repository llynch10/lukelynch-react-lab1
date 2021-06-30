import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState<string>("Flavor");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(25);
  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={"ad " + (darkMode ? "dark" : "light")}>
        <p>Vote For</p>
        <p className="flavor" style={{ fontSize: `${fontSize}px` }}>
          {flavor}
        </p>
      </div>
      <h3>What to support</h3>
      <div>
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <h3>Color Them</h3>
      <div>
        <button
          onClick={() => setDarkMode(false)}
          disabled={darkMode === false}
        >
          Light
        </button>
        <button onClick={() => setDarkMode(true)} disabled={darkMode === true}>
          Dark
        </button>
      </div>
      <h3>Font Size</h3>
      <button onClick={() => setFontSize((prevState) => prevState - 1)}>
        Down
      </button>
      <p>{fontSize}</p>
      <button onClick={() => setFontSize((prevState) => prevState + 1)}>
        Up
      </button>
    </div>
  );
};

export default AdDesigner;
