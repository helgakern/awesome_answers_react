import React from 'react';
import { AnswerDetails } from '../AnswerDetails'

export default function AnswersList({ answers }) {
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
          </li>
        )
      })}
    </ul>
  )
}