import React from "react";
export default function Task(){
    let a =1
    let b=2
    let c=3
    return(
        <div>
            <h3>a is {a}  b is {b} c is {c}</h3>
            <h3>a + b + c = {a}+{b}+{c}</h3>
            <h3 style={{color:'orange'}}>a+b+c={a+b+c}</h3>
        </div>
    )
}