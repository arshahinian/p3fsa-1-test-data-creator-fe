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
            <ul>
                <li>{appContext.maneuverDisplayMessages("A")}</li>
                <li>{appContext.maneuverDisplayMessages("B")}</li>
                <li>{appContext.maneuverDisplayMessages("C")}</li>
                <li>{appContext.maneuverDisplayMessages("D")}</li>
                <li>{appContext.maneuverDisplayMessages("E")}</li>
                <li>{appContext.maneuverDisplayMessages("F")}</li>
                <li>{appContext.maneuverDisplayMessages("G")}</li>
                <li>{appContext.maneuverDisplayMessages("H")}</li>
                <li>{appContext.maneuverDisplayMessages("I")}</li>
                <li>{appContext.maneuverDisplayMessages("J")}</li>
                <li>{appContext.maneuverDisplayMessages("K")}</li>
            </ul>            
        </div>
    </aside>
    )
}

export default MessagesComponent
