import React from "react";

export default function Taskemail(){
    let user ={name:'Riya',email:'riya@gmail.com'}
    return(
        <div>
            <h2>{user.name}</h2>
            <h2> contact on <span style={{color:'red'}}>{user.email}</span></h2>
        </div>

    )
}