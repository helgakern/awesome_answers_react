import React, { Component } from 'react';
import NewQuestionForm from '../NewQuestionForm';
import { Question } from '../requests';

class NewQuestionPage extends Component {

  constructor(props) {
    super(props)
    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
    Question.create(params).then((question) => {
      this.props.history.push(`/questions/${question.id}`)
    })
  }

  render() {
    return(
      <main>
        <h1>New Question page</h1>
        <NewQuestionForm createQuestion={this.createQuestion}/>
      </main>
    )
  }
}

export default NewQuestionPage
