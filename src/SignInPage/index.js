import React, { Component } from "react";
import { Session } from "../requests";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // submit a request to sessions#create
    Session.create({
      email: formData.get("email"),
      password: formData.get("password"),
    }).then((data) => {
      if (data.status === 404) {
        this.setState({
          errors: [{ message: "Wrong credentails" }],
        });
      } else {
        this.props.history.push("/");
      }
    });
  }

  render() {
    console.log(this.props);
    const { errors } = this.state;
    return (
      <main className="ui clearing segment Page">
        <h1 className="ui center aligned header">Sign In</h1>
        {errors.length > 0 ? (
          <div className="ui negative message">
            {errors.map((e) => e.message).join(", ")}
          </div>
        ) : null}
        <form className="ui large form" onSubmit={this.createSession}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <input
            className="ui right floated large orange button"
            type="submit"
            value="Sign In"
          />
        </form>
      </main>
    );
  }
}

export default SignInPage;
