import React from "react";
import { AnswerDetails } from "../AnswerDetails";

export default function AnswersList({ answers, handleDeleteAnswer }) {
  if (!answers) {
    answers = [];
  }
  console.log(answers);
  return (
    <ul>
      {answers.map((answer) => {
        return (
          <div className="ui clearing segment" key={answer.id}>
            <AnswerDetails
              {...answer}
              // body={answer.body}
              // author={answer.author}
              // created_at={new Date(answer.created_at)}
            />
            <button
              className="ui right floated red small button"
              onClick={() => {
                handleDeleteAnswer(answer.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
}
