import React, { useContext } from "react";
import AppContext from "../AppContext";
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react'

function MessagesComponent(props) {   

    return (
    <aside>
        <h2 className='welcome'>Welcome Name</h2>
        <div className="project-inquest">
            {/* <Form className='inquest-form'>
                <h2 className="write-inquest">Write a Inquest</h2> 
                <div className="form-inner">
                    <Form.Group className="textArea" controlId="formBasicHandle">
                        <Form.Control as='textarea' rows={6} placeholder="Write a Inquest..." onChange={
                            (e) => {
                                let value = e.target.value
                                console.log(value)
                                setEnteredInquest(value)
                            }
                        }/>
                    </Form.Group>
                    <Button classID="startInquestId" className="startInquest" type='submit' variant='primary' onClick={function(e){
                        props.maneuverInquestData(e, enteredInquest)
                        console.log("onClick")
                        console.log(enteredInquest)
                        }}>
                            Start Inquest
                    </Button>
                    <br />
                    <Button classID="finishInquestId" className="finishInquest" type='delete' onClick={function(e){
                        props.maneuverInquestFinish(e, enteredInquest)
                        console.log("onClickFinish")
                        console.log(enteredInquest)
                        }}>
                            Finish Inquest
                    </Button>
                </div>
            </Form>  */}
        </div>
    </aside>
    )
}

export default MessagesComponent
