import React, { Component } from 'react';
import Card from './Card'

export default class Cards extends Component{
  constructor(props) {
    super(props);
    this.state={questions:props,currentQuestion:props.firstQuestion,option:undefined};
    this.moveToNextQuestion = this.moveToNextQuestion.bind(this);
    this.nextClickHandler = this.nextClickHandler.bind(this);
    this.numberValidator = this.numberValidator.bind(this);
  }

  moveToNextQuestion(){
    if(this.state.currentQuestion){
      const nextQuestion=this.state.currentQuestion.nextQuestion;
      if(this.state.currentQuestion !==undefined && nextQuestion !== undefined
        && this.state.questions[nextQuestion[0]] !== undefined) {
          this.setState(state => ({
            currentQuestion:state.questions[state.currentQuestion.nextQuestion[state.currentQuestion.type==="number"?0:state.option]],
            option: undefined
          }));
        }
      }
    }

  nextClickHandler(response){
    this.setState(() => ({option:response.option,textResponse:response.textResponse}));
    console.log("state changed",response);
  }

  numberValidator(){
    return !isNaN(parseFloat(this.state.textResponse))
    && isFinite(this.state.textResponse) && this.state.textResponse>0;
  }

    render(){
      console.log("cards render "+ JSON.stringify(this.state.currentQuestion));
      const currentCard = (
        <Card id="questionCard" className="col-6" question={this.state.currentQuestion} action={this.nextClickHandler}/>
      );

      return (
        <div className="container-fluid">
          <div className="row d-flex flex-row justify-content-center ">
          {currentCard}
          </div>
          <div className="row d-flex d-flex justify-content-end" style={{marginTop:'25px'}}>
            <div className="col-3"> </div>
              <button type="button" className='col-6 btn btn-outline-primary btn-default'
              disabled={(this.state.option===undefined) || (!this.numberValidator() && this.state.textResponse !==undefined)}
               onClick={this.moveToNextQuestion} >Next</button>
            <div className="col-3"> </div>
          </div>
        </div>
      );
    }
  }
