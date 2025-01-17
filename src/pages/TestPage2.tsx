import React, { useState } from "react";

const TestPage2: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Welcome to Iconify Galaxy",
      content: (
        <>
          <p className="text-lg mb-4">
            This app helps you generate cosmic-themed icons based on your descriptions.
          </p>
          <button
            onClick={() => setCurrentStep(1)}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg"
          >
            Start Now
          </button>
        </>
      ),
    },
    {
      id: 2,
      title: "Describe Your Icon",
      content: (
        <>
          <textarea
            placeholder="What kind of icon would you like to create?"
            className="mt-4 block w-full border-gray-700 rounded-md bg-gray-800 text-gray-200 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            onClick={() => setCurrentStep(2)}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg"
          >
            Generate Icon
          </button>
        </>
      ),
    },
    {
      id: 3,
      title: "Generated Icon",
      content: (
        <>
          <div className="w-32 h-32 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-900 to-purple-900">
            <img
              src="https://via.placeholder.com/100?text=Icon"
              alt="Generated Icon"
              className="rounded-full"
            />
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => alert("Download")}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg"
            >
              Download
            </button>
            <button
              onClick={() => alert("Share")}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg"
            >
              Share
            </button>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1920x1080/?stars,galaxy')] bg-cover opacity-50"></div>

      {/* Overlay */}
      <div className="relative z-10 ">
        <header className="bg-gradient-to-r from-indigo-900 to-purple-900 py-6 shadow-lg">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-wide">Iconify Galaxy</h1>
            <p className="text-lg mt-2">Generate your cosmic icons!</p>
          </div>
        </header>

        

        <main className="container mx-auto py-12 px-4 relative mt-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentStep === index ? "animate-fade" : "opacity-0"
                
              }`}
              style={{
                visibility: currentStep === index ? "visible" : "hidden",
              }}
            >
              <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
              <div className="bg-black bg-opacity-70 shadow-md rounded-lg p-6 border border-indigo-800">
                {step.content}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default TestPage2;
