import React from "react";

export default function Workingwitharray(){
    let user=[
        {username:"Raman", email:"raman@gmail.com"},
        {username:"Ram", email:"ram@gamil.com"},
        {username:"Raman", email:"raman@gmail.com"},
        {username:"Ram", email:"ram@gamil.com"},
        {username:"Raman", email:"raman@gmail.com"},
        {username:"Ram", email:"ram@gamil.com"},

    ]
    let userUI = user.map((u)=>
    {
        return <tr key={u.email}><td>{u.username}</td><td>{u.email}</td></tr>
    })
    return(
        <>
        <div style={{margin:'20px',}}>Table</div>
        <table border="1">
            <tr><th>Name</th>
            <th>email</th></tr>
            {userUI}
        </table>
        
           
        
        </>
    )
}