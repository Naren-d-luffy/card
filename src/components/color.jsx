import React, { useEffect, useState } from "react";
import logo from "../assets/lotus.png";
import loc from "../assets/location.png";
import mob from "../assets/telephone.png";
import mail from "../assets/email.png";

export default function Color() {
  const [colorData, setColorData] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#00ff00");

  useEffect(() => {
    fetch("http://localhost:5000/api/color")
      .then((response) => response.json())
      .then((data) => {
        setColorData(data);
        setSelectedColor(data.color); 
      })
      .catch((error) => console.error("Error fetching color data:", error));
  }, []);

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value); 
  };

  const handleSubmit = () => {
    fetch("http://localhost:5000/api/color", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color: selectedColor }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Color updated successfully:", data);
        setColorData((prevData) => ({
          ...prevData,
          color: selectedColor, 
        }));
      })
      .catch((error) => console.error("Error updating color:", error));
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-400">
      <h1 className="text-5xl font-bold text-blue-900 mb-10">
        Customize your card color here
      </h1>
      <div className="bg-white bg-opacity-50 h-2/3 w-10/12 rounded-2xl flex justify-between gap-5 p-10">
        <div className="w-full flex justify-center items-center">
          {colorData ? (
            <div
              className="bg-white rounded-lg shadow-lg w-9/12 h-3/5 flex"
              style={{ backgroundColor: selectedColor }} 
            >
              <div className="bg-gray-300 w-6/12 flex flex-col justify-center items-center">
                <img src={logo} alt="logo" width={150} height={150} />
                <h2 className="text-2xl font-bold text-stone-800">
                  {colorData.business}
                </h2>
              </div>
              <div className="flex w-full flex-col justify-evenly">
                <div className="w-full flex flex-col items-center">
                  <p className="text-2xl font-bold text-white text-center">
                    {colorData.name}
                  </p>
                  <p className="text-lg font-normal text-blue-100 text-center">
                    {colorData.designation}
                  </p>
                </div>
                <div className="pl-10">
                  <p className="flex gap-3 text-blue-100 font-medium">
                    <img src={loc} alt="address" /> {colorData.address}
                  </p>
                  <p className="flex gap-3 text-blue-100 font-medium">
                    <img src={mail} alt="mail" /> {colorData.email}
                  </p>
                  <p className="flex gap-3 text-blue-100 font-medium">
                    <img src={mob} alt="mobile" /> {colorData.mobile}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
          <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-lg">
            <div className="mb-6 space-y-2 flex flex-col">
              <label className="text-gray-700 text-lg font-semibold">
                Change your card's color
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
    </div>
  );
}
