import React, { Component } from 'react';
import { Progress } from 'reactstrap';

export default class Result extends Component{
  constructor(props) {
    super(props);
    this.state={visibility:props.visibility};
  }

  render(){
    var visible=this.props.visibility;
    console.log("inside result render "+ visible);
    return(
  <div className="container" style={{display:visible}}>
      <div className="flex-row justify-content-center ">
        <Progress multi>
         <Progress bar value="33.3" />
         <Progress bar color="success" value="33.3" />
         <Progress bar color="danger" value="33.3" />
       </Progress>
     </div>
     <div className="flex-row d-flex justify-content-center" >
       <div className="col-lg-5">Immediate Action Items
        1. Find out how much you earn and  spend in a month.
        2. Try cutting your expenses to match your income
        3. Create an emergency fund of INR ____
        </div>
        <div className="col-lg-5">
        Suggestions to march forward
        1. Make sure your investments are always towards financial goals
        2. Don’t buy life insurance for non-earning members
        </div>
      </div>
    </div>
    )
  }
}
