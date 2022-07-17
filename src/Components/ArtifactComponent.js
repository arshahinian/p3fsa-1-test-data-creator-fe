import React, { useContext } from "react";
import AppContext from "../AppContext";
import { Form } from 'react-bootstrap';

function ArtifactComponent() {
    let appContext = useContext(AppContext);
    return (
        <div className="three-row">
            <div className="artifactHeaderSection">                
                <h2 className="artifactHeader">ARTIFACT</h2>
            </div>
            <div className="stats">                
                <Form className='artifactNameType'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' placeholder="Limited to 255 characters..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicType">
                        <Form.Label>Type:</Form.Label>
                        <Form.Control type='text' placeholder="Limited to 255 characters..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicValue">
                        <Form.Label>Value:</Form.Label>
                        <Form.Control type='text' placeholder="Limited to 255 characters..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCode">
                        <Form.Label>Code:</Form.Label>
                        <Form.Control type='text' placeholder="Limited to 255 characters..." />
                    </Form.Group>                   
                </Form>                               
            </div>
        </div>
    )
}

export default ArtifactComponent