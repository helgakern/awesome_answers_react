import React from 'react';
import questionData from '../questionData';
import QuestionDetails from '../QuestionDetails';

export default function QuestionIndexPage() {
  return(
    <main>
      <h1>Question Index page</h1>
      <ul>
        { questionData.map( question => {
          return(
            <QuestionDetails
              key={question.id}
              title={question.title}
              body={question.body}
              view_count={question.view_count}
              created_at={question.created_at}
            />
          )
        })}
      </ul>
    </main>
  )
}