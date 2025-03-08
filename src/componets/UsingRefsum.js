import React from "react";
import { useRef } from "react";

export default function UsingRefsum(){
    let aref = useRef()
    let bref = useRef()
    let cref = useRef();
    let add =()=>
    {
        let s = parseInt(aref.current.value)+parseInt(bref.current.value);
        cref.current.innerHTML = "sum is "+s
    }
    return(
        <div>
            <p>Enter a : <input type="text" ref={aref}/></p>
            <p>Enter b : <input type="text" ref={bref}/></p>
            <input type="button" value="click here" onClick={()=>add()}></input>
            <p ref={cref}></p>
        </div>
    )
}