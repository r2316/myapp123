import React from "react";

export default function Calsi(props) {
  console.log(props);
  
  let a = props.usera;
  let b = props.userb;
  let op = props.op;
  
  let result;
  
  if (op == "+") {
    result = a + b;
  } else if (op == "-") {
    result = a - b;
  } else if (op == "*") {
    result = a * b;
  } else if (op == "/") {
    result = a / b;
  } else if (op == "(a+b)/2") {
    result = (a+b)/2;
  } else {
    result = "Invalid operation";
  }
  
  return (
    <div>
      <h1>Result: {a} {op} {b} = {result}</h1>
    </div>
  );
}
