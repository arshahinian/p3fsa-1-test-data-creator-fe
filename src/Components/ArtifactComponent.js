import React from 'react';
import { Form } from 'react-bootstrap';

function ArtifactComponent() {
    return (
        <div className="three-row">
            <div className="artifactHeader">
                {/* Need to add in code for changing the number */}
                <h2 className="artifactHeader">Day 2</h2>
            </div>
            <div className="stats">
                <div className="choiceSmiley">
                    <h3 className='feel'>How did the test go?</h3>
                    <img className="smiley" src="../happy_dog.jpg"></img>
                    <img className="frownie" src="../sad_dog.jpg"></img>
                </div>
                <Form className='inquestDescription'>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type='text' placeholder="Limited to 255 characters..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' placeholder="Limited to 255 characters..." />
                    </Form.Group>
                </Form>
                <div className="noteContainer">
                    <h3 className="notes">Note:</h3>
                    <Form.Group className="textArea1" controlId="formBasicNote">
                        <Form.Control as='textarea' rows={6} placeholder="Write a Note..." />
                    </Form.Group>
                </div>
            </div>
        </div>
    )
}

export default ArtifactComponent