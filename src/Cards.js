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
        <div className="container-fluid">
          <div className="row d-flex flex-row justify-content-center ">
            <Card id="questionCard" className="col-6" question={this.state.currentQuestion}/>
          </div>
          <div className="row d-flex d-flex justify-content-end" style={{marginTop:'25px'}}>
            <div className="col-3"> </div>
              <button type="button" className='col-6 btn btn-outline-primary btn-default' onClick={this.moveToNextQuestion} >Next</button>
            <div className="col-3"> </div>
          </div>
        </div>
      );
    }
  }
