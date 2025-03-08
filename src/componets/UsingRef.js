import React from "react";
import {useRef} from'react'
export default function UsingRef(){
    let nameref = useRef()
    let cityref=useRef()
    let clickfun = ()=>
    {
        let msg = "welcome " + nameref.current.value +"  selected city is  "+ cityref.current.value
        alert(msg)
        console.log(nameref.current)
        console.log(cityref.current)
        nameref.current.value=" "
        cityref.current.value=" "
    }
    return(
        <div>
            <p>Enter name: <input type="text" ref={nameref}/>
            </p>
            <p>Enter city: <input type="text" ref={cityref}/>
            </p>

            <input type="button" value="click here"
            onClick={()=> clickfun()}></input>
        </div>
    )
}