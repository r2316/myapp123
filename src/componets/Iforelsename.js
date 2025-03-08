import React from "react";

export default function Iforelsename() {
    let name = "Riya"; 
    let age = 2;

    let message = "";  

    if (age >= 18) {
        message = 
        <div>
              {name} is eligible for voting.
        </div>
    } else {
        message =
        <div>
             {name} is not eligible for voting.
        </div>
    }

    return (
        <div>
            {message}  
        </div>
    );
}