import React, { useContext ,useState } from "react";
import AppContext from "../AppContext";
import { Form, Button } from 'react-bootstrap';

function InquestComponent() {
    let appContext = useContext(AppContext);
    let [projInquestName, setProjInquestName] = useState('')
    let [projInquestDesc1, setProjInquestDesc1] = useState('')
    let [projInquestDesc2, setProjInquestDesc2] = useState('')
    let [projInquestDesc3, setProjInquestDesc3] = useState('')
    let [projInquestNote, setProjInquestNote] = useState('MEH...')
    return (
        <div className="three-row">
            <div className="inquestHeaderSection">
                <h2 className="inquestHeader">INQUEST</h2>
            </div>
            <div className="stats">                
                <Form className='inquestNameDescription'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' placeholder={projInquestName}  onChange={
                            (e) => {
                                let value = e.target.value                                
                                setProjInquestName(value)
                            }}/>
                    </Form.Group>
                    <Form.Group className="textArea1" controlId="formBasicDescription">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type='text' placeholder={projInquestDesc1}  onChange={
                            (e) => {
                                let value = e.target.value                                
                                setProjInquestDesc1(value)
                            }}/>
                        <Form.Control type='text' placeholder={projInquestDesc2}  onChange={
                            (e) => {
                                let value = e.target.value                                
                                setProjInquestDesc2(value)
                            }}/>
                        <Form.Control type='text' placeholder={projInquestDesc3}  onChange={
                            (e) => {
                                let value = e.target.value                                
                                setProjInquestDesc3(value)
                            }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFeeler">
                        <Form.Label>Feeler:</Form.Label>
                        <br/>                       
                        <Form.Label>{projInquestNote}</Form.Label>
                    </Form.Group>                  
                </Form>                
                <div className="choiceSmiley">
                    <h3 className='feel'>How is testing going, click on a picture to update feeler?</h3>
                    <img className="smiley" src="../happy_dog.jpg" onClick={
                            () => {              
                                if(projInquestNote =='MEH...')
                                {
                                    setProjInquestNote('OK?')
                                }
                                else if (projInquestNote == 'OK?')
                                {
                                    setProjInquestNote('WONDERFUL!')
                                }
                                else
                                {
                                    setProjInquestNote('MEH...')
                                }
                            }}></img>
                    <img className="frownie" src="../sad_dog.jpg"onClick={
                            () => {                     
                                if(projInquestNote =='MEH...')
                                {
                                    setProjInquestNote('OK?')
                                }
                                else if (projInquestNote == 'OK?')
                                {
                                    setProjInquestNote('POORLY!')
                                }
                                else
                                {
                                    setProjInquestNote('MEH...')
                                }                                
                            }}></img>
                </div>
                
            </div>
            <div className="stats">
                <Button classID="addInquestId" className="addInquest" type='submit' variant='primary' onClick={function(e){
                        appContext.maneuverLookupProjInquest(e, projInquestName)
                        console.log("onClickCreate")
                        console.log(projInquestName)
                        }}>
                            Lookup Inquest
                </Button>
                <br />
                <Button classID="addInquestId" className="addInquest" type='submit' variant='primary' onClick={function(e){
                        appContext.maneuverAddProjInquest(e, projInquestName,`${projInquestDesc1} ${projInquestDesc2} ${projInquestDesc3}`,projInquestNote)
                        console.log("onClickCreate")
                        console.log(projInquestName)
                        }}>
                            Create Inquest
                </Button>
                <br />
                <Button classID="editInquestId" className="editInquest" type='submit' variant='primary' onClick={function(e){
                        appContext.maneuverEditProjInquest(e, projInquestName,`${projInquestDesc1} ${projInquestDesc2} ${projInquestDesc3}`,projInquestNote)
                        console.log("onClickUpdate")
                        console.log(projInquestName)
                        }}>
                            Update Inquest
                </Button>
                <br />
                <Button classID="killInquestId" className="killInquest" type='delete' onClick={function(e){
                    appContext.maneuverKillProjInquest(e, projInquestName)
                    console.log("onClickRemove")
                    console.log(projInquestName)
                    }}>
                        Remove Inquest
                </Button>
            </div>

        </div>        
    )
}

export default InquestComponent