import React from "react";

export default function Workingwithvalue(){
    let fname="Riya"
    let lname="Patel"
    let age= 20;
    let a =10;
    let b =30;
    return(
        <div>
            <h1> a is {a} and b is {b} and sum is {a+b}</h1>
            <h1>Welcome{fname + lname}<span style={{color:'orange'}}> your age is {age}</span></h1>
        </div>
    )
}