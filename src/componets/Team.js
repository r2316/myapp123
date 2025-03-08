import React from "react";
import Teammember from './Teammember';  
import { employeArray } from "./EmployeData";

export default function Team() {
    let EmployeUI = employeArray.map((e, index) => {
        return (
            <Teammember
                key={index} 
                name={e.name}
                imgurl={e.imgurl}
                designation={e.designation}
            />
        );
    });

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Employees</h1>
            <div className="Team">
                {EmployeUI}
            </div>
        </>
    );
}
