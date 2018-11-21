import React, { Component } from 'react';

export default class Card extends Component{
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    this.state = {option:undefined,textResponse:undefined};
    console.log("card cons"+ JSON.stringify(props))

  }

  componentDidMount(){
    console.log("card componentDidMount ")
  }

  getCurrentResponse(){
    return this.state.option;
  }

  handleChange= (e)=>{
    this.setState({option:e.target.id});
    this.props.action({option:e.target.id,textResponse: (e.target.type==='radio'?undefined:e.target.value)});
  }


  render(){
    const question=this.props.question;
      // eslint-disable-next-line
    const state = this.state;
    const that=this;
    let textControl;

    if(question.type === 'number'){
      textControl=(
        <div class="form-group">
          <input type="number" onChange={that.handleChange} class="form-control" id="textControl"/>
        </div>)
    }

    return (
      <div className="d-flex align-content-center justify-content-start">
      <form >
      <h4 className="text-primary">{question.title}</h4>
      {question.options.map(function(option, i){
        return <div className="custom-control custom-radio">
        <input type="radio" name="questionChoice" id={i} className="custom-control-input"
        onChange={that.handleChange} />
        <label className="custom-control-label" htmlFor={i}>{option}</label>
        </div>;
      })}
      {textControl}
      </form>
      </div>
    );
  }
}
