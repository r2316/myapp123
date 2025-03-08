import React from "react";

export default function Rectangle(props){
    var Rectanglehight =props.Rectanglehight
    var RectangleWidth = props.RectangleWidth
    var Area= ( Rectanglehight)*( RectangleWidth)
    var perimeter=2*[(RectangleWidth)+(Rectanglehight)]
    return(
        <div>
            <h2>Rectangle Area</h2>
            <p>Hight:{Rectanglehight}</p>
            <p>Width:{RectangleWidth}</p>
            <p>area:{Area}</p>
            <p>perimeter:{perimeter}</p>
        </div>
    )
}