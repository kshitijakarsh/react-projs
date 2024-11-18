import { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";

function App() {
  const [color, setColor] = useState(""); // Default background color

  // Function to change the background color
  function colorChange(newColor) {
    setColor(newColor);
  }

  return (
    <div
      className="relative h-screen w-screen"
      style={{ backgroundColor: color }}
    >
      {/* <PasswordGenerator/> */}
      <h1 className="justify-center text-center translate-y-5 font-semibold text-4xl"> BACKGROUND COLOR CHANGER </h1>

      <div
        className="w-12 h-12 bg-red-700 rounded-full absolute border-2 border-gray-200 flex items-center justify-center"
        style={{ top: "5%", left: "2%" }}
      >
        <button
          onMouseEnter={() => colorChange("red")}
          onMouseLeave={() => colorChange("white")}
          className="w-full h-full rounded-full"
        ></button>
      </div>
      <div
        className="w-12 h-12 bg-green-600 rounded-full absolute border-2 border-gray-200 flex items-center justify-center"
        style={{ top: "15%", left: "2%" }}
      >
        <button
          onMouseEnter={() => colorChange("green")}
          onMouseLeave={() => colorChange("white")}
          className="w-full h-full rounded-full"
        ></button>
      </div>
      <div
        className="w-12 h-12 bg-yellow-400 rounded-full absolute border-2 border-gray-200 flex items-center justify-center"
        style={{ top: "25%", left: "2%" }}
      >
        <button
          onMouseEnter={() => colorChange("yellow")}
          onMouseLeave={() => colorChange("white")}
          className="w-full h-full rounded-full"
        ></button>
      </div>
      <div
        className="w-12 h-12 bg-blue-400 rounded-full absolute border-2 border-gray-200 flex items-center justify-center"
        style={{ top: "35%", left: "2%" }}
      >
        <button
          onMouseEnter={() => colorChange("blue")}
          onMouseLeave={() => colorChange("white")}
          className="w-full h-full rounded-full"
        ></button>
      </div>
      <div
        className="w-12 h-12 bg-white rounded-full absolute border-2 border-gray-200 flex items-center justify-center"
        style={{ top: "45%", left: "2%" }}
      >
        <button
          onMouseEnter={() => colorChange("white")}
          onMouseLeave={() => colorChange("white")}
          className="w-full h-full rounded-full"
        ></button>
      </div>
      <div
        className="w-12 h-12 bg-black rounded-full absolute border-2 border-gray-200 flex items-center justify-center"
        style={{ top: "55%", left: "2%" }}
      >
        <button
          onMouseEnter={() => colorChange("black")}
          onMouseLeave={() => colorChange("white")}
          className="w-full h-full rounded-full"
        ></button>
      </div>
      <div
        className="w-12 h-12 bg-amber-400 rounded-full absolute border-2 border-gray-200 flex items-center justify-center"
        style={{ top: "65%", left: "2%" }}
      >
        <button
          onMouseEnter={() => colorChange("orange")}
          onMouseLeave={() => colorChange("white")}
          className="w-full h-full rounded-full"
        ></button>
      </div>
      <div
        className="w-12 h-12 bg-lime-400 rounded-full absolute border-2 border-gray-200 flex items-center justify-center"
        style={{ top: "75%", left: "2%" }}
      >
        <button
          onMouseEnter={() => colorChange("lime")}
          onMouseLeave={() => colorChange("white")}
          className="w-full h-full rounded-full"
        ></button>
      </div>
      <div
        className="w-12 h-12 bg-cyan-900 rounded-full absolute border-2 border-gray-200 flex items-center justify-center"
        style={{ top: "85%", left: "2%" }}
      >
        <button
          onMouseEnter={() => colorChange("cyan")}
          onMouseLeave={() => colorChange("white")}
          className="w-full h-full rounded-full"
        ></button>
      </div>
    </div>
  );
}

export default App;
