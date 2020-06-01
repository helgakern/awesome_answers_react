import React, { Component } from 'react';

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
  }

  createSession(event) {
    event.preventDefault();
  }

  render() {
    return(
      <main>
        <h1>Sign In</h1>
        <form onSubmit={this.createSession}>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
          </div>
          <input type='submit' value='Sign In'/>
        </form>
      </main>
    )
  }
}

export default SignInPage