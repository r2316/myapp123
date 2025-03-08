import React from "react";

export default function Caculater(props){
    let a= props.a
    let b=props.b
    let op=props.op
    let msg=" "
    switch(op){
        case"+":
            msg = "sum of "+a+ " and "+b +" is "+ (a+b)
        break;
        case"-":
            msg = "defference of"+a+ "and "+b +" is "+ (a-b)
        break;
        case"*":
            msg = " mul of"+a+ "and "+b +" is "+ (a*b)
        break;
        case"/":
            msg = "div of"+a+ "and "+b +" is "+ (a/b)
        break;
        
    }
    return(
    <div>{msg}</div>
    );
}