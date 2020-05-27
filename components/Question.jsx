import React from "react";

function Question(props) {
  return (
    <h2 className="h-40 mt-4 mb-4 p-1 font-sans font-semibold text-2xl text-gray-800">
      {props.content}
    </h2>
  );
}

export default Question;
