import React from 'react';

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
    full_name = props.author.full_name
  } else {
    full_name = 'N/A'
  }
  return(
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.body}<br/>
        By {full_name}
      </p>
      <p>
        <small>{props.view_count}</small> - <small>{props.created_at.toLocaleString()}</small>
      </p>
    </div>
  )
}

// export const Hello = 'hello'

// module.exports = { QuestionDetails, Hello }
// import { QuestionDetails, Hello } from '../QuestionDetails'

export default QuestionDetails;

// module.exports = QuestionDetails;
// import asdf from '../QuestionDetails';