import React, { Component } from 'react';
import QuestionDetails from '../QuestionDetails';
import NewQuestionForm from '../NewQuestionForm';
import { Question } from '../requests';
import { Link } from 'react-router-dom';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      helloWorld: 'helloWorld'
    }
    this.createQuestion = this.createQuestion.bind(this);
  }

  componentDidMount() {
    Question.index().then(questions => {
      this.setState((state) => {
        return {
          questions
          // questions: questions
        }
      })
      console.log(questions);
    })
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
    console.log(this)
    const questions = this.state.questions.map( question => {
      return(
        <Link key={question.id} to={`/questions/${question.id}`}>
          <QuestionDetails
            title={question.title}
            body={question.body}
            view_count={question.view_count}
            created_at={question.created_at}
          />
        </Link>
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