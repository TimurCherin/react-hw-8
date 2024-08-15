import { Options } from "./components/Options";
import { Feedback } from "./components/Feedback";
import React, { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addGoodFeedback = () => {
    this.setState((prevCount) => {
      return { good: prevCount.good + 1 }
    })
  }

  addNeutralFeedback = () => {
    this.setState((prevCount) => {
      return { neutral: prevCount.neutral + 1 }
    })
  }

  addBadFeedback = () => {
    this.setState((prevCount) => {
      return { bad: prevCount.bad + 1 }
    })
  }
  render() {
    return (
      <div className="App">
        <Options addGoodFeedback={this.addGoodFeedback} addNeutralFeedback={this.addNeutralFeedback} addBadFeedback={this.addBadFeedback} />
        <Feedback good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
      </div>
    );
  }
}

export default App;