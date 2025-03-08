import React, { useRef } from "react";

export default function UsingRefswitchcase() {
    let aref = useRef();
    let bref = useRef();
    let sumref = useRef();
    let difref = useRef();
    let mulref = useRef();
    let divref = useRef();

    const calculate = (operator) => {
        const a = parseInt(aref.current.value);
        const b = parseInt(bref.current.value);

        switch (operator) {
            case "+":
                sumref.current.innerHTML = "Sum is: " + (a + b);
                break;
            case "-":
                difref.current.innerHTML = "Difference is: " + (a - b);
                break;
            case "*":
                mulref.current.innerHTML = "Multiplication is: " + (a * b);
                break;
            case "/":
                if (b !== 0) {
                    divref.current.innerHTML = "Division is: " + (a / b);
                } else {
                    divref.current.innerHTML = "Cannot divide by zero!";
                }
                break;
            default:
                console.log("Invalid operator");
        }
    };

    return (
        <div>
            <p>Enter a: <input type="text" ref={aref} /></p>
            <p>Enter b: <input type="text" ref={bref} /></p>
            <input type="button" value="+" onClick={() => calculate("+")} />
            <input type="button" value="-" onClick={() => calculate("-")} />
            <input type="button" value="*" onClick={() => calculate("*")} />
            <input type="button" value="/" onClick={() => calculate("/")} />
            <p ref={sumref}></p>
            <p ref={difref}></p>
            <p ref={mulref}></p>
            <p ref={divref}></p>
        </div>
    );
}
