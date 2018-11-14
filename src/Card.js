import React, { Component } from 'react';

export default class Card extends Component{
  constructor(props) {
    super(props);
    console.log("card cons"+ JSON.stringify(props))
  }

  componentDidMount(){
    console.log("card componentDidMount ")
  }

  render(){
    const question=this.props.question;
    return (
      <div className="container" >
      <div className="d-flex align-content-center justify-content-start">
      <form >
      <p className="text-primary">{question.title}</p>
      {question.options.map(function(option, i){
        return <div className="custom-control custom-radio">
        <input type="radio" name="questionChoice" id={i} className="custom-control-input"/>
        <label className="custom-control-label" htmlFor={i}>{option}</label>
        </div>;
      })}
      </form>
      </div>
      </div>
    );
  }
}
