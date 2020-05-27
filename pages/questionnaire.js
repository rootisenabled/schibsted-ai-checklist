import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import useSWR from "swr";

function Questionnaire() {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR("/api/hello", fetcher);

  if (!data) return <div>loading...</div>;
  return (
    <div>
      <h1 className="text-3xl">List of questions</h1>
      <>
        {data.map((d, i) => (
          <Question key={i} content={d.question} />
        ))}
      </>
    </div>
  );
}

export default Questionnaire;
