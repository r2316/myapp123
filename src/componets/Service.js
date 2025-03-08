import React from "react";

export default function Service(props){
    return(
        <div className="service">
            <img src ={props.imgurl} height={100} width={100}/>
            <br></br>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}
