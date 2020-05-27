import React, { Component } from 'react';
import QuestionDetails from '../QuestionDetails';
import AnswersList from '../AnswersList';
import oneQuestionData from '../oneQuestionData';

// If your component needs state or events... use a class based component
class QuestionShowPage extends Component {
  constructor(props) {
    super(props); // calling the constructor() method of the React.Component class.
    // call super(props) in every class component you write.
    this.state = {
      question: oneQuestionData,
      shouldHide: false
    }
    this.deleteAnswers = this.deleteAnswers.bind(this)
  }

  hideAnswers() {
    this.setState((state) => {
      const shouldHide = state.shouldHide ? false : true;
      return {
        shouldHide: shouldHide
      }
    })
  }

  deleteAnswers(id) {
    this.setState((state) => {
      const newAnswers = [...state.question.answers].filter((answer) => {
        console.log(answer)
        console.log(id)
        return answer.id !== id 
      })
      const questionClone = {...state.question}
      questionClone.answers = newAnswers
      console.log(questionClone)
      return {
        question: questionClone
      }
    })
  }

  render () {
    return (
      <div id='questionShowPage'>
        <QuestionDetails
          title={this.state.question.title}
          body={this.state.question.body}
          author={this.state.question.author}
          view_count={this.state.question.view_count}
          created_at={new Date(this.state.question.created_at)}
        />
        { this.state.shouldHide ? null : <AnswersList answers={this.state.question.answers} handleDeleteAnswer={this.deleteAnswers}/> }
        <button onClick={() => { this.hideAnswers() }}>Toggle Answers</button>
      </div>
    )
  }
}

export default QuestionShowPage