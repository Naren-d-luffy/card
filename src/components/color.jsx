import React, { useState } from "react";

export default function Color() {
  const [selectedColor, setSelectedColor] = useState("#00ff00");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`Selected color: ${selectedColor}`);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-400  to-purple-400">
      <div className="bg-black bg-opacity-50 h-2/3 w-11/12">
        <h1 className="text-5xl font-bold text-white mb-10">
          Welcome to the Color Page!
        </h1>

        <div className="w-1/4 flex flex-col items-center bg-white p-10 rounded-lg shadow-lg">
          <div className="mb-6 space-y-2 w-64">
            <label className="text-gray-700 text-lg font-semibold">
              Change your cards Color
            </label>
            <input
              type="color"
              value={selectedColor}
              onChange={handleColorChange}
              className="w-full h-12 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
