import React, { useContext,useState } from "react";
import AppContext from "../AppContext";
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function LoginHandleComponent() {
    let appContext = useContext(AppContext);
    let [enteredUserHandle, setEnteredUserHandle] = useState('')    
    return (
    <Form className='login-form'>
        <div className="form-inner">
            <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicHandle">
                <Form.Label>User Handle:</Form.Label>
                <Form.Control type='text' placeholder="Enter User Handle"
                onChange={
                    function(e){
                        console.log("Setting Entered User Handle")
                        setEnteredUserHandle(e.target.value)
                    }
                }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPassword'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Button type="submit" variant="primary" onClick={function(e){
                    appContext.maneuverLookupUserHandle(e, enteredUserHandle)
                    console.log("onClick")
                    console.log(enteredUserHandle)
                    }}>
                <Link className='main' to="/Main">Login</Link>
            </Button>
            <br />
            <Link className="registar" to="/Register">Register</Link>                   
        </div>
    </Form>
    )
}

export default LoginHandleComponent