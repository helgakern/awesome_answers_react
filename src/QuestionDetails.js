import React from "react";

function QuestionDetails(props) {
  // props looks like {
  //   title: title
  //   body: body
  //   author: author
  //   view_count: view_count
  //   created_at: new Date(created_at)
  // }
  let full_name;
  if (props.author) {
    if (props.author.full_name) {
      full_name = props.author.full_name;
    } else {
      full_name = props.author.first_name;
    }
  }

  return (
    <div>
      <h2 className="ui header">{props.title}</h2>
      <p>{props.body}</p>
      <div className="author">By {full_name}</div>
      <div className="rating">viewed {props.view_count} times</div>
      <div className="date">{props.created_at.toLocaleString()}</div>
    </div>
  );
}

// export const Hello = 'hello'

// module.exports = { QuestionDetails, Hello }
// import { QuestionDetails, Hello } from '../QuestionDetails'

export default QuestionDetails;

// module.exports = QuestionDetails;
// import asdf from '../QuestionDetails';
