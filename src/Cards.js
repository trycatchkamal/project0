import React, { Component } from 'react';
import Card from './Card'

export default class Cards extends Component{
  constructor(props) {
    super(props);
    this.state={questions:props,currentQuestion:props.firstQuestion};
    this.moveToNextQuestion = this.moveToNextQuestion.bind(this);
  }

  moveToNextQuestion(){
    if(this.state.currentQuestion){
      const nextQuestion=this.state.currentQuestion.nextQuestion;
      if(this.state.currentQuestion !==undefined && nextQuestion !== undefined
        && this.state.questions[nextQuestion[0]] !== undefined) {
          this.setState(state => ({
            currentQuestion:state.questions[state.currentQuestion.nextQuestion[0]]
          }));
        }
      }
    }

    render(){
      console.log("cards render "+ JSON.stringify(this.state.currentQuestion));
      return (
        <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <div className="row">
            <Card id="questionCard" question={this.state.currentQuestion}/>
            <button type="button" className='btn btn-outline-primary btn-default' onClick={this.moveToNextQuestion} >Next</button>
          </div>
        </div>
      );
    }
  }
