import React, { useContext, useState } from "react";
import AppContext from "../AppContext";
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function RegisterHandleComponent() {
    let appContext = useContext(AppContext);
    let [enteredHandle, setEnteredHandle] = useState('')
    return (
    <Form className='login-form'>
        <div className="form-inner">
            <h2>Register</h2>
            <Form.Group className="mb-3" controlId="formBasicHandle">
                <Form.Label>Create User Handle:</Form.Label>
                <Form.Control type='text' placeholder="Enter User Handle"
                onChange={
                    function(e){
                        console.log("Did it go here")
                        setEnteredHandle(e.target.value)
                    }
                }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPassword'>
                <Form.Label>Create Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Button type="submit" variant="primary" onClick={function(e){
                    appContext.maneuverNewHandle(e, enteredHandle)
                    console.log("onClick")
                    console.log(enteredHandle)
                    }}><Link className="main" to="/Main">Submit</Link>
            </Button>
        </div>
    </Form>
    )
}

export default RegisterHandleComponent