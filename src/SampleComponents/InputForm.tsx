import React, { useState } from "react";

const InputForm: React.FC = () => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`User Input: ${userInput}`);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Generate Your Icon</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 font-medium mb-2">
          Enter your idea:
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Describe your icon"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
