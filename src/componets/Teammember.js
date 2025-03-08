import React from "react";

export default function Teammember(props) {
    return (
        <div className="Teammember">
            <img src={props.imgurl} height={100} width={100} alt={props.name} />
            <br/>
            <h2>{props.name}</h2>
            <p>{props.designation}</p>
        </div>
    );
}
