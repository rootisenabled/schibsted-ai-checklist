import React from "react";

export default function QuestionCount({counter, total}) {
  return (
    <div className="p-2">
      Question <span>{counter}</span> of <span>{total}</span>
    </div>
  );
}
