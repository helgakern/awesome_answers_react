import React, { Component } from "react";
import NewQuestionForm from "../NewQuestionForm";
import { Question } from "../requests";

class NewQuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuestionData: {
        title: '',
        body: ''
      }
    }
    this.createQuestion = this.createQuestion.bind(this);
    this.updateQuestionData = this.updateQuestionData.bind(this);
  }

  createQuestion() {
    Question.create(this.state.newQuestionData).then((question) => {
      this.props.history.push(`/questions/${question.id}`);
    });
  }

  updateQuestionData(props) {
    this.setState((state) => {
      console.log(props)
      console.log(state)
      return {
        newQuestionData: {
          ...state.newQuestionData,
          ...props
        }
      }
    })
  }

  render() {
    return (
      <main>
        <h1 className="ui horizontal divider header">New Question page</h1>
        <NewQuestionForm createQuestion={this.createQuestion} newQuestionData={this.state.newQuestionData} updateQuestionData={this.updateQuestionData}/>
      </main>
    );
  }
}

export default NewQuestionPage;
