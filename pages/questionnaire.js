import React, { useState, useEffect } from "react";
import Router from "next/router";

import AnswerOption from "../components/AnswerOptions";
import Popup from "../components/Popup";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";

function Questionnaire() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isPopupOn, togglePopup] = useState(false);

  // initial state
  const [counter, setCount] = useState(1);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setQuestion(response[0].question);
        setLoading(false);
      });
  }, []);

  const handleAnswer = () => {
    if (counter == data.length) {
      redirectToFinishPage();
    } else {
      setQuestion(data[counter].question);
      setCount(counter + 1);
    }
  };

  const handleReject = () => {
    togglePopup(!isPopupOn);
  };

  const redirectToFinishPage = () => {
    Router.push("/finish");
  };

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      <h1 className="text-3xl">List of questions</h1>
      <>
        <>
          {isPopupOn && (
            <Popup text={"bla"} closePopup={() => togglePopup(!isPopupOn)} />
          )}
          <QuestionCount counter={counter} total={data.length} />
          <Question content={question} />
          <AnswerOption onAnswer={handleAnswer} onReject={handleReject} />
        </>
      </>
    </div>
  );
}

export default Questionnaire;
