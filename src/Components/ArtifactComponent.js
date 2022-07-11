import React from 'react';
import { Form } from 'react-bootstrap';

function ArtifactComponent() {
    return (
        <div className="three-row">
            <div className="artifactHeader">                
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
                    <Form.Group className="mb-3" controlId="formBasicCode">
                        <Form.Label>Code:</Form.Label>
                        <Form.Control type='text' placeholder="Limited to 255 characters..." />
                    </Form.Group>                   
                </Form>
                <div className="artifactValueContainer">
                    <h3 className="notes">Value:</h3>
                    <Form.Group className="textArea1" controlId="formBasicNote">
                        <Form.Control as='textarea' rows={3} placeholder="Write the Test Value..." />
                    </Form.Group>
                </div>                
            </div>
        </div>
    )
}

export default ArtifactComponent