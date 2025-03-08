import React from "react";

export default function Forprop(props){
    console.log(props)
    let name = props.username
    let age = props.userage
    let msg =" ";
    if(age>=18)
    {
        msg = name+"  age " +  age + "  eligible for voting"
    }
    else
    {
        msg = name+"  age  " +  age + "  eligible for voting"
    }
    return(
        <div><h1>{msg}</h1></div>
    )
}