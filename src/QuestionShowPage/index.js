import React from 'react';
import QuestionDetails from '../QuestionDetails';
import AnswersList from '../AnswersList';
import data from '../oneQuestionData';

export default function QuestionShowPage() {
  return(
    <div id='questionShowPage'>
      <QuestionDetails
        title={data.title}
        body={data.body}
        author={data.author}
        view_count={data.view_count}
        created_at={new Date(data.created_at)}
      />
      <AnswersList answers={data.answers}/>
    </div>
  )
}