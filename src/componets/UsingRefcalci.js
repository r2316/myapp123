import React, { useRef } from "react";

export default function UsingRefcalci() {
    let aref = useRef();
    let bref = useRef();
    let sumref = useRef();
    let difref = useRef();
    let mulref = useRef();
    let divref = useRef();

   
    let add = () => 
    {
        let s = parseInt(aref.current.value) + parseInt(bref.current.value);
        sumref.current.innerHTML = "Sum is: " + s;
    };

    
    let subtract = () => 
    {
        let d = parseInt(aref.current.value) - parseInt(bref.current.value);
        difref.current.innerHTML = "Difference is: " + d;
    };

   
    let multiply = () => 
    {
        let m = parseInt(aref.current.value) * parseInt(bref.current.value);
        mulref.current.innerHTML = "Multiplication is: " + m;
    };

    
    let divide = () => 
    {
        let div = parseInt(aref.current.value) / parseInt(bref.current.value);
        divref.current.innerHTML = "Division is: " + div;
    };

    return (
        <div>
            <p>Enter a: <input type="text" ref={aref} /></p>
            <p>Enter b: <input type="text" ref={bref} /></p>
           <input type="button" value="+" onClick={add} />
            <input type="button" value="-" onClick={subtract} />
            <input type="button" value="*" onClick={multiply} />
            <input type="button" value="/" onClick={divide} />
            <p ref={sumref}></p>
            <p ref={difref}></p>
            <p ref={mulref}></p>
            <p ref={divref}></p>
        </div>
    );
}
