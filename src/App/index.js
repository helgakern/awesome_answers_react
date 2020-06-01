import React, { Component } from 'react';
import QuestionIndexPage from '../QuestionIndexPage';
import QuestionShowPage from '../QuestionShowPage';
import NewQuestionPage from '../NewQuestionPage';
import CurrentDateTime from '../CurrentDateTime';
import SignInPage from '../SignInPage';
import { Session } from '../requests';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';

class App extends Component {

  componentDidMount() {
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    }).then(data => {
      console.log(data);
    })
  }

  render() {
    return(
      <BrowserRouter>
        <main>
          <Navbar />
          {/* 
            The Route component has many props to determine which component gets rendered. and when to render a component
            - path: when the path prop mathces the path in the url, the provided component is rendered
            - component: this is the component you want to render
            - exact: prop to tell react-router-dom to only render this Route if the path is exactly "/questions" 
          */}
          {/* 
            switch is a component provided by React-Router-Dom that will only render the first <Route/> component that matches
           */}
          <Switch>
            <Route path="/questions" exact component={QuestionIndexPage} />
            <Route path="/questions/new" component={NewQuestionPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
            <Route path="/sign_in" component={SignInPage} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App