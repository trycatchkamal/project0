import React, { Component } from 'react';
import './App.css';
import Cards from './Cards'

class App extends Component {
  state={
    questions:{
      "firstQuestion":{
        id: "1",
        title:"Do you know how much you spend on monthly basis?",
        type: "option",
        options: ["Yes","No"],
        nextQuestion: ["1a","2"]
      },
      "1a":  {
        id: "1a",
        title:"How much did you spend last month?",
        type: "number",
        options: [],
        nextQuestion: ["2"]
      }
    }
  }
  render() {
    return (
      <div className="App">
      <Cards {...this.state.questions}/>
      </div>
    );
  }
}

export default App;
