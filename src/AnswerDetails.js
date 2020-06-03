import React from "react";
import "./answerDetails.css";

export function AnswerDetails(props) {
  return (
    <div className="AnswerDetails">
      <p className="text">{props.body}</p>
      <div className="author">
        Answered By {props.author && props.author.first_name}
      </div>

      <div className="date">{props.created_at.toLocaleString()}</div>
    </div>
  );
}

// module.exports = { AnswerDetails }
