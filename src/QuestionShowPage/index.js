import React, { Component } from "react";
import QuestionDetails from "../QuestionDetails";
import AnswersList from "../AnswersList";
import { Question } from "../requests";
import { Spinner } from "../Spinner";

// If your component needs state or events... use a class based component
class QuestionShowPage extends Component {
  constructor(props) {
    console.dir(props);
    super(props); // calling the constructor() method of the React.Component class.
    // call super(props) in every class component you write.
    this.state = {
      question: {},
      shouldHide: false,
      isLoading: true,
    };
    this.deleteAnswers = this.deleteAnswers.bind(this);
  }

  componentDidMount() {
    // because this component is a child of the <Route/> component provided by React-Router-Dom
    // it recieves a few helpful props from the <Route/> component.
    // These extra props are
    // history https://reacttraining.com/react-router/web/api/history
    // match https://reacttraining.com/react-router/web/api/match
    // location https://reacttraining.com/react-router/web/api/location
    Question.get(this.props.match.params.id).then((question) => {
      this.setState((state) => {
        return {
          question,
          // question: question
          isLoading: false,
        };
      });
    });
  }

  hideAnswers() {
    this.setState((state) => {
      const shouldHide = state.shouldHide ? false : true;
      return {
        shouldHide: shouldHide,
      };
    });
  }

  deleteAnswers(id) {
    this.setState((state) => {
      const newAnswers = [...state.question.answers].filter((answer) => {
        console.log(answer);
        console.log(id);
        return answer.id !== id;
      });
      const questionClone = { ...state.question }; // {...state.question} creates a new copy of state.question
      // Note: with spread operator (...state.question) ONLY COPIES 1 level deep
      questionClone.answers = newAnswers;
      console.log(questionClone);
      return {
        question: questionClone,
      };
    });
  }

  deleteQuestion(id) {
    // for now our api is not supporting delete question
    Question.destroy(id).then(() => {
      this.setState({ question: null });
      this.props.history.push("/questions");
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner message="Question Doesn't Exist" />;
    }
    return (
      <>
        <div className="ui teal clearing segment">
          <QuestionDetails
            title={this.state.question.title}
            body={this.state.question.body}
            author={this.state.question.author}
            view_count={this.state.question.view_count}
            created_at={new Date(this.state.question.created_at)}
          />
          <button
            className="ui right floated red button"
            onClick={() => {
              this.deleteQuestion(this.state.question.id);
            }}
          >
            Delete
          </button>
          <button
            className="ui right floated teal small button"
            onClick={() => {
              this.hideAnswers();
            }}
          >
            Toggle Answers
          </button>
        </div>

        <h2 className="ui horizontal divider header">Answers</h2>
        <div className="ui clearing segment">
          {this.state.shouldHide ? null : (
            <AnswersList
              answers={this.state.question.answers}
              handleDeleteAnswer={this.deleteAnswers}
            />
          )}
        </div>
      </>
    );
  }
}

export default QuestionShowPage;
