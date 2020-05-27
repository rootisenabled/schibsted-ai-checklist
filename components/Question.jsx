import React from "react";
import styles from "./Question.module.css"

function Question(props) {
  return <h2 className={styles.question}>{props.content}</h2>;
}

export default Question;
