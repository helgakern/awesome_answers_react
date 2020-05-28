import React, { Component } from 'react';

class CurrentDateTime extends Component {
  // React Components have a lifecycle https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  // The very first method that gets called in React's lifecycle is the constructor
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    }
    console.log('1: constructor')
  }

  // componentDidMount() gets called after a the component MOUNTS onto the DOM
  componentDidMount() {
    console.log('3: componentDidMount')

    // setInterval
    // setTimeout
    this.intervalId = setInterval(() => {
      this.setState((state) => {
        return {
          dateTime: new Date()
        }
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('5: componentWillUnmount')
    // on componentWillMount() we set a timer with `setInterval` this gets added to the Window Object and it stays until we call clearInterval.
    // If we mount CurrentDateTime and unmount it the `setInterval` will still be working in the background. So we use componentWillUnmount to clean up the `setInterval` if CurrentDateTime gets unmounted
    clearInterval(this.intervalId);
  }

  render() {
    console.log('2: render')
    return(
      <div className="CurrentDateTime">
        { this.state.dateTime.toLocaleString() }
      </div>
    )
  }
}

export default CurrentDateTime