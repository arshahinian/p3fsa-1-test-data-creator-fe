import React, { useContext ,useState } from "react";
import AppContext from "../AppContext";
import { Form, Button } from 'react-bootstrap';

function InquestComponent() {
    let appContext = useContext(AppContext);
    let [enteredInquest, setEnteredInquest] = useState('')
    return (
        <div className="project-inquest">
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
            <Form className='inquest-form'>
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
                        appContext.maneuverInquestData(e, enteredInquest)
                        console.log("onClick")
                        console.log(enteredInquest)
                        }}>
                            Start Inquest
                    </Button>
                    <br />
                    <Button classID="finishInquestId" className="finishInquest" type='delete' onClick={function(e){
                        appContext.maneuverInquestFinish(e, enteredInquest)
                        console.log("onClickFinish")
                        console.log(enteredInquest)
                        }}>
                            Finish Inquest
                    </Button>
                </div>
            </Form> 
        </div>        
    )
}

export default InquestComponent