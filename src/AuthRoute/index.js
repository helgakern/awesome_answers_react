import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute(props) {
  // props looks like: 
  // {
  //   isAuthenticated: null | { first_name: 'jon', last_name: 'snow' ... },
  //   render: null | () => {} | function() {},
  //   component: null | <Component />,
  //   hello: 'world',
  //   anythingElse: 1
  // }
  const {
    isAuthenticated = false, // default to the value of false if `isAuthenticated` is a falsey value
    render, // is a function that will return a reactComponent
    component: Component,  // a react component
    helloWorld,
    ...restProps
  } = props;

  console.log(restProps);
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        // Route uses component or render prop to render out a component.
        // Documentation on render prop: https://reacttraining.com/react-router/web/api/Route/render-func
        // the render prop accepts a callback with an argument of "routeProps"
        // routeProps is the { history, location, match } object that is injected into components.
        if (isAuthenticated) {
          // this if statement covers the 2 different ways we use <Route/>
          // in both ways we need to pass in `routeProps` so that the child component can use it.
          if (typeof render === 'function') {
            return render(routeProps);
          } else {
            return <Component {...routeProps} />
          }
        } else {
          // if `isAuthenticated` is falsey then we will force a redirect by rendering out the <Redirect/> Component.
          return <Redirect to='/sign_in'/>
        }
      }}
    />
  )
}

export default AuthRoute