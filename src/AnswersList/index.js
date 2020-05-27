import React from 'react';
import { AnswerDetails } from '../AnswerDetails'

export default function AnswersList({ answers, handleDeleteAnswer }) {
  console.log(handleDeleteAnswer);
  // const { answers } = props;
  return(
    <ul>
      {answers.map( answer => {
        return(
          <li key={answer.id}>
            <AnswerDetails
              body={answer.body}
              author={answer.author}
              created_at={new Date(answer.created_at)}
            />
            <button onClick={ () => { handleDeleteAnswer(answer.id) } }>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}