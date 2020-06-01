import React, { Component } from 'react';
import QuestionDetails from '../QuestionDetails';
import AnswersList from '../AnswersList';
import { Question } from '../requests';

// If your component needs state or events... use a class based component
class QuestionShowPage extends Component {
  constructor(props) {
    console.dir(props);
    super(props); // calling the constructor() method of the React.Component class.
    // call super(props) in every class component you write.
    this.state = {
      question: {},
      shouldHide: false
    }
    this.deleteAnswers = this.deleteAnswers.bind(this)
  }

  componentDidMount() {
    // because this component is a child of the <Route/> component provided by React-Router-Dom
    // it recieves a few helpful props from the <Route/> component.
    // These extra props are
    // history https://reacttraining.com/react-router/web/api/history
    // match https://reacttraining.com/react-router/web/api/match
    // location https://reacttraining.com/react-router/web/api/location
    Question.get(this.props.match.params.id).then(question => {
      this.setState((state) => {
        return {
          question
          // question: question
        }
      })
    })
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
      const questionClone = {...state.question} // {...state.question} creates a new copy of state.question
      // Note: with spread operator (...state.question) ONLY COPIES 1 level deep
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
        { this.state.shouldHide ? null : <AnswersList answers={this.state.question.answers} handleDeleteAnswer={ this.deleteAnswers }/> }
        <button onClick={() => { this.hideAnswers() }}>Toggle Answers</button>
      </div>
    )
  }
}

export default QuestionShowPage