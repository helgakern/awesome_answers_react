import React from 'react';
import './answerDetails.css';

export function AnswerDetails(props) {
  return(
    <div className='AnswerDetails'>
      <p className='text'>
        {props.body} <br />
        By {props.author.full_name}
      </p>
      <p>{props.created_at.toLocaleString()}</p>
    </div>
  );
}

// module.exports = { AnswerDetails }