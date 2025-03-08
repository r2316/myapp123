import React from "react";

export default function Simpleinterest(props){
    var amount= props.amount
    var Rate=props.Rate
    var time=props.time
    var interest=[(amount)*(Rate)*(time)/100]
    return(
        <div>
              <h2>Simple Interest</h2>
              <p>amount:{amount}</p>
              <p>Rate:{Rate}</p>
              <p>Time:{time}</p>
              <p>Simple Interest: {interest}</p>
        </div>
      
    )

}