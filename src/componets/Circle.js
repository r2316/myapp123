import React from "react";

export default function Circle(props){
    var usercircle=props.usercircle
   /* var area = 3.14 * Math.pow(usercircle, 2);*/
   var area=3.14*(usercircle)*(usercircle);
   var perimeter = 2*3.14*(usercircle);

  return(
    <div>
      <h2>Circle Area</h2>
      <p>Radius: {usercircle}</p>
      <p>Area: {area}</p>
      <p>perimeter:{perimeter}</p>
    </div>
  );
}
