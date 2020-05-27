import React from "react";

export default function AnswerOption({ onAnswer, onReject }) {
  return (
    <div className="inline-flex space-x-10">
      <button
        onClick={() => onAnswer()}
        className="bg-green-400 hover:bg-green-600 text-black text-lg py-2 px-6 rounded hover:border-transparent rounded"
      >
        Yes
      </button>
      <button
        onClick={() => onReject()}
        className="bg-red-400 hover:bg-red-600 text-black text-lg py-2 px-6 rounded hover:border-transparent rounded"
      >
        No
      </button>
    </div>
  );
}
