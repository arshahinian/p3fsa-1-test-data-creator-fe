import React, { useContext } from "react";
import AppContext from "../AppContext";
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react'

function MessagesComponent() {   
    let appContext = useContext(AppContext);
    return (
    <aside>        
        <div className="display-messages">
            <h2 className='message-title'>Messages</h2>            
            <div>{appContext.maneuverDisplayMessages("A")}</div>
            <div>{appContext.maneuverDisplayMessages("B")}</div>
            <div>{appContext.maneuverDisplayMessages("C")}</div>
            <div>{appContext.maneuverDisplayMessages("D")}</div>
            <div>{appContext.maneuverDisplayMessages("E")}</div>
            <div>{appContext.maneuverDisplayMessages("F")}</div>
            <div>{appContext.maneuverDisplayMessages("G")}</div>
            <div>{appContext.maneuverDisplayMessages("H")}</div>
            <div>{appContext.maneuverDisplayMessages("I")}</div>
            <div>{appContext.maneuverDisplayMessages("J")}</div>
            <div>{appContext.maneuverDisplayMessages("K")}</div>
            <div>{appContext.maneuverDisplayMessages("L")}</div>
            <div>{appContext.maneuverDisplayMessages("M")}</div>
            <div>{appContext.maneuverDisplayMessages("N")}</div>
            <div>{appContext.maneuverDisplayMessages("O")}</div>
            <div>{appContext.maneuverDisplayMessages("P")}</div>
            <div>{appContext.maneuverDisplayMessages("Q")}</div>
            <div>{appContext.maneuverDisplayMessages("R")}</div>
            <div>{appContext.maneuverDisplayMessages("S")}</div>
            <div>{appContext.maneuverDisplayMessages("T")}</div>
            <div>{appContext.maneuverDisplayMessages("U")}</div>
            <div>{appContext.maneuverDisplayMessages("V")}</div>
            <div>{appContext.maneuverDisplayMessages("W")}</div>
            <div>{appContext.maneuverDisplayMessages("X")}</div>
            <div>{appContext.maneuverDisplayMessages("Y")}</div>
            <div>{appContext.maneuverDisplayMessages("Z")}</div>
        </div>
    </aside>
    )
}

export default MessagesComponent
