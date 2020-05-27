import React, { Component } from 'react';
import questionData from '../questionData';
import QuestionDetails from '../QuestionDetails';
import NewQuestionForm from '../NewQuestionForm';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: questionData,
      helloWorld: 'helloWorld'
    }
    this.createQuestion = this.createQuestion.bind(this);
  }
  
  // all functions in ReactJS should be pure functions
  // pure functions are functions that do not change anything outside of itself
  deleteQuestion() {
    console.log('question delete fired')
    // everytime you call this.setState React knows to re-render this component
    this.setState((state) => {
      // const newState = state.questions.pop()
      const questionsClone = [...state.question]
      // console.log(state);
      // const newQuestions = [...state.question] // we use the ... (spread operator) to copy the array of state.question
      questionsClone.pop()
      return {
        question: questionsClone
      }
    })
  }

  createQuestion(params) {
    // params looks like { title: 'something', body: 'something }
    this.setState((state) => {
      return {
        question: [
          {
            ...params, // copies title: 'something', body: 'somehting
            // title: params.title,
            // body: params.body
            id: 50000,
            created_at: new Date(),
            view_count: 0
          },
          ...state.question
        ]
      }
    })
  }

  // the render method relies on this.state to create views
  render() {
    console.log(this.state)
    const questions = this.state.question.map( question => {
      return(
        <QuestionDetails
          key={question.id}
          title={question.title}
          body={question.body}
          view_count={question.view_count}
          created_at={question.created_at}
        />
      )
    })

    return (
      <main>
        <h1>Question Index page</h1>
        <NewQuestionForm createQuestion={this.createQuestion}/>
        <ul>
          { questions }
        </ul>
        <button onClick={() => { this.deleteQuestion() }}
        >
          Delete
        </button>
      </main>
    )
  }
}

export default QuestionIndexPage