import React, { Component } from 'react';
import Card from './Card'


export default class Cards extends Component{
  constructor(props) {
    super(props);
    this.state={questions:props,currentQuestion:props.firstQuestion,option:undefined,cardVisibility:'visible'};
    this.moveToNextQuestion = this.moveToNextQuestion.bind(this);
    this.nextClickHandler = this.nextClickHandler.bind(this);
    this.numberValidator = this.numberValidator.bind(this);
  }

  moveToNextQuestion(){
    if(this.state.currentQuestion){
      const nextQuestion=this.state.currentQuestion.nextQuestion;
      if(nextQuestion !== undefined && this.state.questions[nextQuestion[0]] !== undefined) {
          this.setState(state => ({
            currentQuestion:state.questions[state.currentQuestion.nextQuestion[state.currentQuestion.type==="number"?0:state.option]],
            option: undefined,textResponse:undefined
          }));
        }
        console.log("nextQ " +this.state.currentQuestion.nextQuestion[0]);
        if(this.state.currentQuestion.nextQuestion[0]==='end'){
          this.setState(state=>({cardVisibility:'hidden'}));
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
      var nextButtonLabel='Next';
      if(this.state.currentQuestion.nextQuestion[0]==='end'){
        nextButtonLabel='Show results';
          console.log("inside cards render "+this.state.cardVisibility);
      }

      var currentCard = (
        <Card id="questionCard" className="col-lg-6" visibility={this.state.cardVisibility}
        question={this.state.currentQuestion} action={this.nextClickHandler}/>
      );

      return (
        <div className="container-fluid">
          <div className="row d-flex flex-row justify-content-center ">
          {currentCard}
          </div>
          <div className="row d-flex justify-content-end" style={{marginTop:'25px'}}>
            <div className="col-lg-3"> </div>
              <button type="button" className='col-lg-6 btn btn-outline-primary btn-default'
              disabled={(this.state.option===undefined) || (!this.numberValidator() &&
                 this.state.textResponse !==undefined)}
               onClick={this.moveToNextQuestion} >{nextButtonLabel}</button>
            <div className="col-lg-3"> </div>
          </div>
        </div>
      );
    }
  }
