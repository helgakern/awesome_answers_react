import React, { Component } from "react";
import QuestionIndexPage from "../QuestionIndexPage";
import QuestionShowPage from "../QuestionShowPage";
import NewQuestionPage from "../NewQuestionPage";
import SignInPage from "../SignInPage";
import NewUserPage from "../NewUserPage";
import { User, Session } from "../requests";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthRoute from "../AuthRoute";
import Navbar from "../Navbar";
import { WelcomePage } from "../WelcomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };

    // this.destroySession = this.destroySession.bind(this);
    // Note to bind 'this' from the class 'App' component to
    // destroySession method, we should either use the above
    // line with regular methods or remove the above line
    // and declare destroySession method as an arrow function
  }

  componentDidMount() {
    // Session.create({
    //   email: 'js@winterfell.gov',
    //   password: 'supersecret'
    // }).then(data => {
    //   console.log(data);
    // })
    this.getUser();
  }

  destroySession = () => {
    Session.destroy().then(() => {
      this.setState({ currentUser: null });
    });
  };

  getUser() {
    // 1) fire off an api request to get information about the current logged in user.
    // 2) when it gets a response update the state with the user information
    User.current().then((data) => {
      console.log(data);
      this.setState((state) => {
        return {
          currentUser: data,
        };
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Navbar
            currentUser={this.state.currentUser}
            signOut={this.destroySession}
            hello="World"
          />
          <div className="ui container">
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
              <Route path="/" exact component={WelcomePage} />
              <Route path="/questions" exact component={QuestionIndexPage} />
              {/* <Route path="/questions/new" component={NewQuestionPage} /> */}
              <AuthRoute
                isAuthenticated={this.state.currentUser}
                component={NewQuestionPage}
                path="/questions/new"
                helloWorld="hello world"
                style={{ color: "red", backgroundColor: "red" }}
              />
              <Route path="/questions/:id" component={QuestionShowPage} />
              <Route path="/sign_in" component={SignInPage} />
              <Route path="/users/new" component={NewUserPage} />
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
