import React from "react";

const QuizForm: React.FC<{ question: string; options: string[]; onOptionClick: (option: string) => void }> = ({ question, options, onOptionClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* 質問 */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">{question}</h1>

      {/* 選択肢 */}
      <div className="grid grid-cols-2 gap-4 w-3/4 max-w-lg">
        {options.map((option, index) => (
          <button
            key={index}
            className="p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            onClick={() => onOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizForm;
