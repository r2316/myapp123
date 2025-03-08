import React from "react";

export default function Color(props){
    var username = props.username
    var fs = props.fs
    var color ="red"
    var msg = "you are not eligible to vote"
    var age = props.age
    if (age>=18)
    {
        color="green"
        msg="you are eligible to vote"
    }
    return(
        <>
        <div style={{backgroundColor:color}}>
            <h1>Welcome{username}</h1>
            {msg}
        </div></>
    )
}