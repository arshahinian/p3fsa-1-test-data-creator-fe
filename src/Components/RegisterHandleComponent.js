import React, { useContext, useState } from "react";
import AppContext from "../AppContext";
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function RegisterHandleComponent() {
    let appContext = useContext(AppContext);
    let [enteredUserHandleName, setEnteredUserHandleName] = useState('')
    let [enteredUserHandlePassword, setEnteredUserHandlePassword] = useState('') 
    return (
    <Form className='login-form'>
        <div className="form-inner">
            <h2>Register</h2>
            <Form.Group className="mb-3" controlId="formBasicHandle">
                <Form.Label>Create User Handle:</Form.Label>
                <Form.Control type='text' placeholder="Enter User Name"
                onChange={
                    function(e){
                        console.log("Created User Handle Name")
                        setEnteredUserHandleName(e.target.value)
                    }
                }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPassword'>
                <Form.Label>Create Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter User Password"
                onChange={
                    function(e){
                        console.log("Created User Handle Password")
                        setEnteredUserHandlePassword(e.target.value)
                    }
                }/>
            </Form.Group>
            <Button type="submit" variant="primary" onClick={function(e){
                    appContext.maneuverAddUserHandle(e, enteredUserHandleName,enteredUserHandlePassword)
                    console.log("onClick Register")
                    console.log(enteredUserHandleName)
                    }}><Link className="main" to="/Main">Submit</Link>
            </Button>
        </div>
    </Form>
    )
}

export default RegisterHandleComponent