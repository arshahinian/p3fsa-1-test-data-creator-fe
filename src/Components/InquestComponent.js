import React from 'react';
import { Form } from 'react-bootstrap';

function InquestComponent() {
    return (
        <div className="three-row">
            <div className="inquestHeader">
                <h2 className="inquestHeader">INQUEST</h2>
            </div>
            <div className="stats">                
                <Form className='inquestNameDescription'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' placeholder="Limited to 255 characters..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type='text' placeholder="Limited to 255 characters..." />
                    </Form.Group>                    
                </Form>
                <div className="InquestNoteContainer">
                    <h3 className="notes">Inquest Note:</h3>
                    <Form.Group className="textArea1" controlId="formBasicNote">
                        <Form.Control as='textarea' rows={3} placeholder="Write a Note..." />
                    </Form.Group>
                </div>
                <div className="choiceSmiley">
                    <h3 className='feel'>How did the test go?</h3>
                    <img className="smiley" src="../happy_dog.jpg"></img>
                    <img className="frownie" src="../sad_dog.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default InquestComponent