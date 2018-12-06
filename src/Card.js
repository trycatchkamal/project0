import React, { Component } from 'react';
import Result from './Result'

export default class Card extends Component{
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    this.state = {option:undefined,textResponse:undefined,visibility:props.visibility};
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
    const visiblity=this.props.visibility;
    console.log("inside card render "+visiblity);
    var resultvisiblity=visiblity==='hidden'?'inherit':'none';
      // eslint-disable-next-line
    const state = this.state;
    const that=this;
    let textControl;

    if(question.type === 'number'){
      textControl=(
        <div className="form-group">
          <input type="number" onChange={that.handleChange} className="form-control" id="textControl"/>
        </div>)
    }

    return (
      <div className="d-flex align-content-center justify-content-start" >
      <div >
      <form style={{visibility:visiblity}}>
      <h4 className="text-primary">{question.title}</h4>
      {question.options.map(function(option, i){
        return <div className="custom-control custom-radio">
        <input type="radio" name={"questionChoice"+question.id} id={i} className="custom-control-input"
        onChange={that.handleChange} />
        <label className="custom-control-label" htmlFor={i}>{option}</label>
        </div>;
      })}
      {textControl}
      </form>
      <Result visibility={resultvisiblity}/>
      </div>
      </div>
    );
  }
}
