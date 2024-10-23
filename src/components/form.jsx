import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [formData, setFormData] = useState({
    businessName: "",
    yourName: "",
    designation: "",
    mobileNo: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate(); // Hook to navigate between pages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Check if all fields are filled
  const isFormComplete = Object.values(formData).every((field) => field.trim() !== "");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (isFormComplete) {
      navigate('/color'); // Navigate to the Color page on successful form submission
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat flex justify-start pl-32 items-center"
      style={{ backgroundImage: `url(/assets/bg.png)` }}
    >
      <div className=" bg-black w-1/2 p-10 bg-opacity-60 flex items-center justify-center rounded-2xl">
        <div>
          <h1 className="text-center font-bold text-5xl text-blue-300">Tell Us About Yourself</h1>
          <p className="pt-2 pb-8 text-center font-medium text-xl text-blue-200">
            Your profile is your brand. Let’s start with who you are.
          </p>
          <div className="flex w-full gap-5">
            <div className="mb-6 space-y-2 w-1/2">
              <label className="text-white text-lg">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Enter Business Name..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-6 space-y-2 w-1/2">
              <label className="text-white text-lg">Your Name</label>
              <input
                type="text"
                name="yourName"
                value={formData.yourName}
                onChange={handleInputChange}
                placeholder="Enter Your Name..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="mb-6 space-y-2 w-1/2">
              <label className="text-white text-lg">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="Enter Designation..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-6 space-y-2 w-1/2">
              <label className="text-white text-lg">Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
                placeholder="Enter Mobile No..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="flex w-full gap-5 mb-2">
            <div className="mb-6 space-y-2 w-1/2">
              <label className="text-white text-lg">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-6 space-y-2 w-1/2">
              <label className="text-white text-lg">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your Address..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className={`w-full p-2 rounded-lg text-lg font-semibold ${
              isFormComplete ? "bg-blue-400 hover:bg-blue-500 text-white" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!isFormComplete}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
