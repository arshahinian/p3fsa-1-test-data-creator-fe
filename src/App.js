import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useEffect, useState,Fragment } from 'react';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import RegisterHandleComponent from './Components/RegisterHandleComponent';
import LoginHandleComponent from './Components/LoginHandleComponent';
import MainComponent from './Components/MainComponent'
import AppContext from "./AppContext";


function App() {

  /* GLOBAL SECTION */
  const BASE_API_URL = 'https://p3fsa-1-test-data-creator-be.herokuapp.com'
  const line = "*********************"
	let [messageA, setMessageA] = useState(line)
  let [messageB, setMessageB] = useState('')
  let [messageC, setMessageC] = useState('')
  let [messageD, setMessageD] = useState('')
  let [messageE, setMessageE] = useState('')
  let [messageF, setMessageF] = useState('')
  let [messageG, setMessageG] = useState('')
  let [messageH, setMessageH] = useState('')
  let [messageI, setMessageI] = useState('')
  let [messageJ, setMessageJ] = useState('')
  let [messageK, setMessageK] = useState('')
  let [messageL, setMessageL] = useState('')
  let [messageM, setMessageM] = useState('')
  let [messageN, setMessageN] = useState('')
  let [messageO, setMessageO] = useState('')
  let [messageP, setMessageP] = useState('')
  let [messageQ, setMessageQ] = useState('')
  let [messageR, setMessageR] = useState('')
  let [messageS, setMessageS] = useState('')
  let [messageT, setMessageT] = useState('')
  let [messageU, setMessageU] = useState('')
  let [messageV, setMessageV] = useState('')
  let [messageW, setMessageW] = useState('')
  let [messageX, setMessageX] = useState('')
  let [messageY, setMessageY] = useState('')
  let [messageZ, setMessageZ] = useState('')

  const maneuverDisplayMessages = (messageLetter) => 
  {
    let message = ''
    if (messageLetter == "A")
    {
      message = messageA;
    }
    else if (messageLetter == "B")
    {
      message = messageB;
    }
    else if (messageLetter == "C")
    {
      message = messageC;
    }
    else if (messageLetter == "D")
    {
      message = messageD;
    }
    else if (messageLetter == "E")
    {
      message = messageE;
    }
    else if (messageLetter == "F")
    {
      message = messageF;
    }
    else if (messageLetter == "G")
    {
      message = messageG;
    }
    else if (messageLetter == "H")
    {
      message = messageH;
    }
    else if (messageLetter == "I")
    {
      message = messageI;
    }
    else if (messageLetter == "J")
    {
      message = messageJ;
    }
    else if (messageLetter == "K")
    {
      message = messageK;
    }
    else if (messageLetter == "L")
    {
      message = messageL;
    }
    else if (messageLetter == "M")
    {
      message = messageM;
    }
    else if (messageLetter == "N")
    {
      message = messageN;
    }
    else if (messageLetter == "O")
    {
      message = messageO;
    }
    else if (messageLetter == "P")
    {
      message = messageP;
    }
    else if (messageLetter == "Q")
    {
      message = messageQ;
    }
    else if (messageLetter == "R")
    {
      message = messageR;
    }
    else if (messageLetter == "S")
    {
      message = messageS;
    }
    else if (messageLetter == "T")
    {
      message = messageT;
    }
    else if (messageLetter == "U")
    {
      message = messageU;
    }
    else if (messageLetter == "V")
    {
      message = messageV;
    }
    else if (messageLetter == "W")
    {
      message = messageW;
    }
    else if (messageLetter == "X")
    {
      message = messageX;
    }
    else if (messageLetter == "Y")
    {
      message = messageY;
    }
    else if (messageLetter == "Z")
    {
      message = messageZ;
    }
    else
    {
      message = "";
    }
    return message	  
  }

  function appendSetMessage(newMessage)
  {    
    if (messageA == line)
    {
      setMessageA(newMessage)
      setMessageB(line)      
    }
    else if (messageB == line)
    {
      setMessageB(newMessage)
      setMessageC(line)      
    }
    else if (messageC == line)
    {
      setMessageC(newMessage)
      setMessageD(line)      
    }
    else if (messageD == line)
    {
      setMessageD(newMessage)
      setMessageE(line)      
    }
    else if (messageE == line)
    {
      setMessageE(newMessage)
      setMessageF(line)      
    }
    else if (messageF == line)
    {
      setMessageF(newMessage)
      setMessageG(line)      
    }
    else if (messageG == line)
    {
      setMessageG(newMessage)
      setMessageH(line)      
    }
    else if (messageH == line)
    {
      setMessageH(newMessage)
      setMessageI(line)      
    }
    else if (messageI == line)
    {
      setMessageI(newMessage)
      setMessageJ(line)      
    }
    else if (messageJ == line)
    {      
      setMessageJ(newMessage)
      setMessageK(line)      
    }
    else if (messageK == line)
    {      
      setMessageK(newMessage)
      setMessageL(line)      
    }
    else if (messageL == line)
    {      
      setMessageL(newMessage)
      setMessageM(line)      
    }
    else if (messageM == line)
    {      
      setMessageM(newMessage)
      setMessageN(line)      
    }
    else if (messageN == line)
    {      
      setMessageN(newMessage)
      setMessageO(line)      
    }
    else if (messageO == line)
    {      
      setMessageO(newMessage)
      setMessageP(line)      
    }
    else if (messageP == line)
    {      
      setMessageP(newMessage)
      setMessageQ(line)      
    }
    else if (messageQ == line)
    {      
      setMessageQ(newMessage)
      setMessageR(line)      
    }
    else if (messageR == line)
    {      
      setMessageR(newMessage)
      setMessageS(line)      
    }
    else if (messageS == line)
    {      
      setMessageS(newMessage)
      setMessageT(line)      
    }
    else if (messageT == line)
    {      
      setMessageT(newMessage)
      setMessageU(line)      
    }
    else if (messageU == line)
    {      
      setMessageU(newMessage)
      setMessageV(line)      
    }
    else if (messageV == line)
    {      
      setMessageV(newMessage)
      setMessageW(line)      
    }
    else if (messageW == line)
    {      
      setMessageW(newMessage)
      setMessageX(line)      
    }
    else if (setMessageX == line)
    {      
      setMessageX(newMessage)
      setMessageY(line)      
    }
    else if (setMessageY == line)
    {      
      setMessageY(newMessage)
      setMessageZ(line)      
    }
    else if (setMessageZ == line)
    {      
      setMessageZ(newMessage)
      setMessageA(line)      
    }
    else
    {    
      setMessageZ(line)
    }
  }

  function getCurrentDateText()
  {
      let today = new Date();
      let year = parseInt(today.getFullYear());
      let month = parseInt(today.getMonth()+ 1);
      let day = parseInt(today.getDate());
      let yearText = padZero(year);
      let monthText = padZero(month);
      let dayText = padZero(day);
      let hour = parseInt(today.getHours());
      let minute = parseInt(today.getMinutes());
      let second = parseInt(today.getSeconds());
      let hourText = padZero(hour);
      let minuteText = padZero(minute);
      let secondText = padZero(second);
      let value = `${monthText}/${dayText}/${yearText} ${hourText}:${minuteText}:${secondText}`
      return value;
  }

  function padZero(value)
  {
      if(parseInt(value) > 9)
      {
          return value.toString();
      }
      else
      {
          return `0${value.toString()}`.toString()
      }    
  }


  /* USER HANDLE SECTION */
  const API_URL_USER_HANDLES = `${BASE_API_URL}/handles`
  let [userHandleData, setUserHandleData] = useState({})

  /* USER HANDLE SECTION (LOOKUP) */
  let [lookupUserHandle, setLookupUserHandle] = useState('')

  let logLookupUserHandle = []
  function pushlogLookupUserHandle(value)
  {
    let actionName = 'LookupUserHandle';
    logLookupUserHandle.push(`-${actionName}=> ${value}`)
  }

  function writeLogLookupUserHandle()
  {    
    for(let i = 0; i < logLookupUserHandle.length; i++)
    {      
      console.log(logLookupUserHandle[i])      
    }
    logLookupUserHandle = []
  }
 
  useEffect(() => {  
    pushlogLookupUserHandle("Start")    
    appendSetMessage(getCurrentDateText())  
		if(lookupUserHandle) {
      pushlogLookupUserHandle(`lookupUserHandle: ${lookupUserHandle}`)      
			const fetchData = async () => {
        let fetchString = API_URL_USER_HANDLES + '/' + lookupUserHandle
        pushlogLookupUserHandle(`fetchString: ${fetchString}`)        			
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'GET',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}
        })
        pushlogLookupUserHandle(`response: ${response}`)
				let resData = await response.json();
        writeLogLookupUserHandle()        
        pushlogLookupUserHandle(`resData: ${resData}`)
				if (resData != null && resData.handle_id != null) {
          pushlogLookupUserHandle(`resData.handle_id: ${resData.handle_id}`)
          pushlogLookupUserHandle(`typeof resData: ${typeof resData}`)          
          setUserHandleData(resData)
          pushlogLookupUserHandle("Success")
          writeLogLookupUserHandle()
				} else {
          pushlogLookupUserHandle('Response Data was Not Found!')
          pushlogLookupUserHandle('There was a failure to communicate with the system at this time!')
          pushlogLookupUserHandle("Error")
          writeLogLookupUserHandle()
				}
			}
			fetchData()
		}
    pushlogLookupUserHandle("Finish")
    writeLogLookupUserHandle()
	}, [lookupUserHandle])

  const maneuverLookupUserHandle = (e, handleName) => {    
    appendSetMessage("Looking Up User")
		e.preventDefault()
    pushlogLookupUserHandle(handleName)
		setLookupUserHandle(handleName)    
	}

  /* USER HANDLE SECTION (ADD) */

  let logAddUserHandle = []
  function pushlogAddUserHandle(value)
  {
    let actionName = 'AddUserHandle';
    logAddUserHandle.push(`-${actionName}=> ${value}`)
  }

  function writeLogAddUserHandle()
  {    
    for(let i = 0; i < logAddUserHandle.length; i++)
    {      
      console.log(logAddUserHandle[i])      
    }
    logAddUserHandle = []
  }

  const maneuverAddUserHandle = (e, addUserHandle) => {    
    appendSetMessage("Creating User")
		e.preventDefault()
    pushlogAddUserHandle(addUserHandle)
		if(addUserHandle) {      
      pushlogAddUserHandle(`addUserHandle: ${addUserHandle}`)
      
      var defaultPassword = addUserHandle.charAt(1) + addUserHandle.length + addUserHandle.charAt(addUserHandle.length - 1) + '*'
      pushlogAddUserHandle(`defaultPassword: ${defaultPassword}`)

			let fetchData = async () => {
        let fetchString = API_URL_USER_HANDLES
        pushlogAddUserHandle(`fetchString: ${fetchString}`)
        var modifiedDate = getCurrentDateText()
        pushlogAddUserHandle(`modifiedDate: ${modifiedDate}`)
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'POST',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
          body: JSON.stringify({'handle_name':addUserHandle,'login_code':'NEW','password':defaultPassword,'modified_date':modifiedDate}),
          dataType: "json"
        })
        pushlogAddUserHandle(`response: ${response}`)
        writeLogAddUserHandle()
        
        setLookupUserHandle(addUserHandle)		
			}
			fetchData()
      writeLogAddUserHandle()
		}
	}

  /* USER HANDLE SECTION (EDIT) */

  
  /* PROJECT INQUEST SECTION */

  const API_URL_PROJ_INQUESTS = `${BASE_API_URL}/inquests`
  let [projInquestData, setProjInquestData] = useState('')

  /* PROJECT INQUEST SECTION (LOOKUP) */
  let [lookupProjInquestName, setLookupProjInquestName] = useState('')

  let logLookupProjInquest = []
  function pushlogLookupProjInquest(value)
  {
    let actionName = 'LookupProjInquest';
    logLookupProjInquest.push(`-${actionName}=> ${value}`)
  }

  function writeLogLookupProjInquest()
  {    
    for(let i = 0; i < logLookupProjInquest.length; i++)
    {      
      console.log(logLookupProjInquest[i])      
    }
    logLookupProjInquest = []
  }

  const maneuverLookupProjInquest = (e,lookupProjInquestName) =>
  {
    appendSetMessage("Lookup Inquest")
		e.preventDefault()
    pushlogLookupProjInquest("Start")    
    pushlogLookupProjInquest(getCurrentDateText())  
		if(lookupUserHandle) {
      pushlogLookupProjInquest(`pushlogLookupProjInquest: ${pushlogLookupProjInquest}`)      
			const fetchData = async () => {
        let fetchString = API_URL_PROJ_INQUESTS + '/' + lookupProjInquestName
        pushlogLookupProjInquest(`fetchString: ${fetchString}`)        			
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'GET',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}
        })
        pushlogLookupProjInquest(`response: ${response}`)
				let resData = await response.json();
        writeLogLookupProjInquest()        
        pushlogLookupProjInquest(`resData: ${resData}`)
				if (resData != null && resData.inquest_id != null) {
          pushlogLookupProjInquest(`resData.handle_id: ${resData.inquest_id}`)
          pushlogLookupProjInquest(`typeof resData: ${typeof resData}`)          
          setProjInquestData(resData)
          pushlogLookupProjInquest("Success")
          writeLogLookupProjInquest()
				} else {
          pushlogLookupProjInquest('Response Data was Not Found!')
          pushlogLookupProjInquest('There was a failure to communicate with the system at this time!')
          pushlogLookupProjInquest("Error")
          writeLogLookupProjInquest()
				}
			}
			fetchData()
		}
    pushlogLookupProjInquest("Finish")
    writeLogLookupProjInquest()
  }


  /* PROJECT INQUEST SECTION (ADD) */

  let logAddProjInquest = []
  function pushlogAddProjInquest(value)
  {
    let actionName = 'AddProjInquest';
    logAddProjInquest.push(`-${actionName}=> ${value}`)
  }

  function writeLogAddProjInquest()
  {    
    for(let i = 0; i < logAddProjInquest.length; i++)
    {      
      console.log(logAddProjInquest[i])      
    }
    logAddProjInquest = []
  }

  const maneuverAddProjInquest = (e, addProjInquestName,addProjInquestDesc,addProjInquestNote) => {    
    appendSetMessage("Creating Inquest")   
    e.preventDefault()
    pushlogAddProjInquest(`addProjInquestName: ${addProjInquestName}`)
    let userHandleId = 0
    if(userHandleData.handle_id > 0)
    {
      userHandleId = userHandleData.handle_id
    }
    pushlogAddProjInquest(`userHandleId: ${userHandleId}`)
    writeLogAddProjInquest()
		if(addProjInquestName && userHandleId > 0) {     
      
      pushlogAddProjInquest(`addProjInquestDesc: ${addProjInquestDesc}`)
      pushlogAddProjInquest(`addProjInquestNote: ${addProjInquestNote}`)      

			let fetchData = async () => {
        let fetchString = API_URL_PROJ_INQUESTS
        pushlogAddProjInquest(`fetchString: ${fetchString}`)
        var modifiedDate = getCurrentDateText()
        pushlogAddProjInquest(`modifiedDate: ${modifiedDate}`)
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'POST',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
          body: JSON.stringify({'inquest_name':addProjInquestName,'inquest_desc':addProjInquestDesc
            ,'inquest_note':addProjInquestNote,'modified_date':modifiedDate, 'handle_id':userHandleId}),
          dataType: "json"
        })
        pushlogAddProjInquest(`response: ${response}`)
        let resData = await response.json();

        pushlogAddProjInquest(`resData: ${resData}`)
        pushlogAddProjInquest(JSON.stringify(resData))
        writeLogAddProjInquest()
				
        if (resData != null && resData.inquest_id != null) {
          pushlogAddProjInquest(`resData.inquest_id: ${resData.inquest_id}`)
          pushlogAddProjInquest(`typeof resData: ${typeof resData}`)          
          setProjInquestData(resData)
          pushlogAddProjInquest("Success")
          writeLogAddProjInquest()
				} else {
          pushlogAddProjInquest('Response Data was Not Found!')
          pushlogAddProjInquest('There was a failure to communicate with the system at this time!')
          pushlogAddProjInquest("Error")
          writeLogAddProjInquest()
				}
        
        setLookupProjInquestName(addProjInquestName)		
			}
			fetchData()
      writeLogAddProjInquest()
		}
  }

  /* PROJECT INQUEST SECTION (EDIT) */

  const maneuverEditProjInquest = (e, editProjInquestId, editProjInquestName, editProjInquestDesc, editProjInquestNote) => {
    appendSetMessage("Update Inquest")   
    e.preventDefault()
    pushlogAddProjInquest(`editProjInquestName: ${editProjInquestName}`)
    let userHandleId = 0
    if(userHandleData.handle_id > 0)
    {
      userHandleId = userHandleData.handle_id
    }
    pushlogAddProjInquest(`userHandleId: ${userHandleId}`)
    writeLogAddProjInquest()
		if(editProjInquestName && userHandleId > 0) {     
      
      pushlogAddProjInquest(`editProjInquestDesc: ${editProjInquestDesc}`)
      pushlogAddProjInquest(`editProjInquestNote: ${editProjInquestNote}`)      

			let fetchData = async () => {
        let fetchString = API_URL_PROJ_INQUESTS + '/' + editProjInquestId
        pushlogAddProjInquest(`fetchString: ${fetchString}`)
        var modifiedDate = getCurrentDateText()
        pushlogAddProjInquest(`modifiedDate: ${modifiedDate}`)
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'PUT',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
          body: JSON.stringify({'inquest_id':editProjInquestId,'inquest_name':editProjInquestName,'inquest_desc':editProjInquestDesc
            ,'inquest_note':editProjInquestNote,'modified_date':modifiedDate, 'handle_id':userHandleId}),
          dataType: "json"
        })
        pushlogAddProjInquest(`response: ${response}`)
        let resData = await response.json();

        pushlogAddProjInquest(`resData: ${resData}`)
        pushlogAddProjInquest(JSON.stringify(resData))
        writeLogAddProjInquest()
				
        if (resData != null && resData.inquest_id != null) {
          pushlogAddProjInquest(`resData.inquest_id: ${resData.inquest_id}`)
          pushlogAddProjInquest(`typeof resData: ${typeof resData}`)          
          setProjInquestData(resData)
          pushlogAddProjInquest("Success")
          writeLogAddProjInquest()
				} else {
          pushlogAddProjInquest('Response Data was Not Found!')
          pushlogAddProjInquest('There was a failure to communicate with the system at this time!')
          pushlogAddProjInquest("Error")
          writeLogAddProjInquest()
				}
        
        setLookupProjInquestName(editProjInquestName)		
			}
			fetchData()
      writeLogAddProjInquest()
		}
  }

  /* PROJECT INQUEST SECTION (KILL) */

  const maneuverKillProjInquest = (e, inquestName) => {
    console.log("***handleinquestFinish***")
		e.preventDefault()
    let handleId = userHandleData.id
    console.log(inquestName)
		if(inquestName) {      
      console.log(`handleinquestFinish - ${inquestName}`)
    
      let fetchInquestFinishData = async () => {
        let fetchString = API_URL_PROJ_INQUESTS
        console.log(fetchString)				
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'PUT',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'PUT'},          
          body: JSON.stringify({"inquest_id":projInquestData.id,"inquest_name":inquestName,"inquest_status":0,"modified_date":"05/01/2022","handle_id":handleId})
        })
        console.log(response)                
			}
			fetchInquestFinishData()
		}
	}

  /* INQUEST ARTIFACT SECTION */

  const API_URL_PROJ_ARTIFACTS = `${BASE_API_URL}/artifacts`

  /* INQUEST ARTIFACT SECTION (LOOKUP) */


  

  let appActions = {
    maneuverLookupUserHandle: maneuverLookupUserHandle,
    maneuverAddUserHandle: maneuverAddUserHandle,
    maneuverLookupProjInquest:maneuverLookupProjInquest,
    maneuverAddProjInquest: maneuverAddProjInquest,
    maneuverEditProjInquest:maneuverEditProjInquest,
    maneuverKillProjInquest: maneuverKillProjInquest,
    maneuverDisplayMessages: maneuverDisplayMessages
  }

  return (

    <div className='body'>
      <AppContext.Provider value={appActions}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={
              <Fragment>
                <LoginHandleComponent />
              </Fragment>              
              } 
            />
            <Route path="/Register" element={<RegisterHandleComponent />} />
            <Route path="/Main" element={<MainComponent />} />
           
          </Routes>
        </div>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
