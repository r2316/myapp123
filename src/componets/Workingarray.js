import React from "react";

export default function Workingarray(){
    var fruits = ['Mango','Orange','Apple','Papaya'];
    let fruitsui = fruits.map((f)=>
    {
        return <li>{f}</li>
    })
    return(
        <>
        <div>Fruits</div>
        <ul>
            {fruitsui}
        </ul>
        </>
    )
}