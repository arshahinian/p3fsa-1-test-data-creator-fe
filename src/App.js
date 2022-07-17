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
      setMessageA(line)
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
  let [lookupUserHandleName, setLookupUserHandleName] = useState('')
  let [lookupUserHandlePassword, setLookupUserHandlePassword] = useState('')

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
		if(lookupUserHandleName) {
      pushlogLookupUserHandle(`lookupUserHandleName: ${lookupUserHandleName}`)      
			const fetchData = async () => {
        let fetchString = API_URL_USER_HANDLES + '/' + lookupUserHandleName
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
          if(resData.password != lookupUserHandlePassword)
          {
            pushlogLookupUserHandle("Password Does NOT Match!")
            appendSetMessage("Failure Lookup User")
            setUserHandleData('')
            setLookupUserHandleName('')
            setLookupUserHandlePassword('')
            pushlogLookupUserHandle("Failure")
          }
          else
          {
            pushlogLookupUserHandle("Password Does Match!")
            setUserHandleData(resData)
            pushlogLookupUserHandle("Success")
            appendSetMessage(`Welcome ${lookupUserHandleName}`) 
          }
          pushlogLookupUserHandle(`typeof resData: ${typeof resData}`)          
          writeLogLookupUserHandle()          
				} else {
          pushlogLookupUserHandle('Response Data was Not Found!')
          pushlogLookupUserHandle('There was a failure to communicate with the system at this time!')
          pushlogLookupUserHandle("Error")
          writeLogLookupUserHandle()
          appendSetMessage("Failure Lookup User")
				}
			}
			fetchData()
		}
    pushlogLookupUserHandle("Finish")
    writeLogLookupUserHandle()
	}, [lookupUserHandleName])

  const maneuverLookupUserHandle = (e, userHandleName,userHandlePassword) => {    
    appendSetMessage("Looking Up User")
		e.preventDefault()
    pushlogLookupUserHandle(userHandleName)
    if(userHandlePassword)
    {
      pushlogLookupUserHandle("Password was entered :)")
    }
    else
    {
      pushlogLookupUserHandle("Password was NOT entered :(")
    }
    writeLogLookupUserHandle()
		setLookupUserHandleName(userHandleName)
    setLookupUserHandlePassword(userHandlePassword)   
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

  const maneuverAddUserHandle = (e, userHandleName,userHandlePassword) => {    
    appendSetMessage("Creating User")
		e.preventDefault()
    pushlogAddUserHandle(userHandleName)
		if(userHandleName) {      
      pushlogAddUserHandle(`userHandleName: ${userHandleName}`)      
      pushlogAddUserHandle(`userHandlePassword: ${userHandlePassword}`)

			let fetchData = async () => {
        let fetchString = API_URL_USER_HANDLES
        pushlogAddUserHandle(`fetchString: ${fetchString}`)
        var modifiedDate = getCurrentDateText()
        pushlogAddUserHandle(`modifiedDate: ${modifiedDate}`)
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'POST',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
          body: JSON.stringify({'handle_name':userHandleName,'login_code':'NEW','password':userHandlePassword,'modified_date':modifiedDate}),
          dataType: "json"
        })
        pushlogAddUserHandle(`response: ${response}`)
        writeLogAddUserHandle()
        
        setLookupUserHandleName(userHandleName)
        setLookupUserHandlePassword(userHandlePassword)
        appendSetMessage("Success Creating User")		
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
		if(lookupProjInquestName) {
      pushlogLookupProjInquest(`lookupProjInquestName: ${lookupProjInquestName}`)      
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
          pushlogLookupProjInquest(`resData.inquest_id: ${resData.inquest_id}`)
          pushlogLookupProjInquest(`typeof resData: ${typeof resData}`)          
          setProjInquestData(resData)
          pushlogLookupProjInquest("Success")
          writeLogLookupProjInquest()
          appendSetMessage(`INQUEST ID: ${resData.inquest_id}`)
				} else {
          pushlogLookupProjInquest('Response Data was Not Found!')
          pushlogLookupProjInquest('There was a failure to communicate with the system at this time!')
          pushlogLookupProjInquest("Error")
          writeLogLookupProjInquest()
          appendSetMessage("Failure Lookup Inquest")
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
          appendSetMessage("Success Creating Inquest")
				} else {
          pushlogAddProjInquest('Response Data was Not Found!')
          pushlogAddProjInquest('There was a failure to communicate with the system at this time!')
          pushlogAddProjInquest("Error")
          writeLogAddProjInquest()
          appendSetMessage("Failure Creating Inquest")
				}
        
        setLookupProjInquestName(addProjInquestName)		
			}
			fetchData()
      writeLogAddProjInquest()
		}
  }

  /* PROJECT INQUEST SECTION (EDIT) */

  let logEditProjInquest = []
  function pushlogEditProjInquest(value)
  {
    let actionName = 'EditProjInquest';
    logEditProjInquest.push(`-${actionName}=> ${value}`)
  }

  function writeLogEditProjInquest()
  {    
    for(let i = 0; i < logEditProjInquest.length; i++)
    {      
      console.log(logEditProjInquest[i])      
    }
    logEditProjInquest = []
  }

  const maneuverEditProjInquest = (e, editProjInquestName, editProjInquestDesc, editProjInquestNote) => {
    appendSetMessage("Update Inquest")   
    e.preventDefault()
    pushlogEditProjInquest(`editProjInquestName: ${editProjInquestName}`)
    let userHandleId = 0
    if(userHandleData.handle_id > 0)
    {
      userHandleId = userHandleData.handle_id
    }
    pushlogEditProjInquest(`userHandleId: ${userHandleId}`)
    writeLogEditProjInquest()
		if(editProjInquestName && userHandleId > 0) {     
      
      maneuverLookupProjInquest(e,editProjInquestName)

      pushlogEditProjInquest(`editProjInquestDesc: ${editProjInquestDesc}`)
      pushlogEditProjInquest(`editProjInquestNote: ${editProjInquestNote}`)      

			let fetchData = async () => {
        let fetchString = API_URL_PROJ_INQUESTS + '/' + projInquestData.inquest_id
        pushlogEditProjInquest(`fetchString: ${fetchString}`)
        var modifiedDate = getCurrentDateText()
        pushlogEditProjInquest(`modifiedDate: ${modifiedDate}`)
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'PUT',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
          body: JSON.stringify({'inquest_id':projInquestData.inquest_id,'inquest_name':editProjInquestName,'inquest_desc':editProjInquestDesc
            ,'inquest_note':editProjInquestNote,'modified_date':modifiedDate, 'handle_id':userHandleId}),
          dataType: "json"
        })
        pushlogEditProjInquest(`response: ${response}`)
        let resData = await response.json();

        pushlogEditProjInquest(`resData: ${resData}`)
        pushlogEditProjInquest(JSON.stringify(resData))
        writeLogEditProjInquest()
				
        if (resData != null ) {
          pushlogEditProjInquest(`typeof resData: ${typeof resData}`)       
          pushlogEditProjInquest("Success")
          writeLogEditProjInquest()
          appendSetMessage("Success Update Inquest")
				} else {
          pushlogEditProjInquest('Response Data was Not Found!')
          pushlogEditProjInquest('There was a failure to communicate with the system at this time!')
          pushlogEditProjInquest("Error")
          writeLogEditProjInquest()
          appendSetMessage("Failure Update Inquest")
				}
        
        setLookupProjInquestName(editProjInquestName)		
			}
			fetchData()
      writeLogEditProjInquest()
		}
  }

  /* PROJECT INQUEST SECTION (KILL) */

  let logKillProjInquest = []
  function pushlogKillProjInquest(value)
  {
    let actionName = 'KillProjInquest';
    logKillProjInquest.push(`-${actionName}=> ${value}`)
  }

  function writeLogKillProjInquest()
  {    
    for(let i = 0; i < logKillProjInquest.length; i++)
    {      
      console.log(logKillProjInquest[i])      
    }
    logKillProjInquest = []
  }

  const maneuverKillProjInquest = (e,killProjInquestName) => {
    appendSetMessage("Remove Inquest")   
    e.preventDefault()
    pushlogKillProjInquest(`killProjInquestName: ${killProjInquestName}`)
    let userHandleId = 0
    if(userHandleData.handle_id > 0)
    {
      userHandleId = userHandleData.handle_id
    }
    pushlogKillProjInquest(`userHandleId: ${userHandleId}`)
    writeLogKillProjInquest()
		if(killProjInquestName && userHandleId > 0) {     
      
      maneuverLookupProjInquest(e,killProjInquestName)

			let fetchData = async () => {
        let fetchString = API_URL_PROJ_INQUESTS + '/' + projInquestData.inquest_id
        pushlogKillProjInquest(`fetchString: ${fetchString}`)
        var modifiedDate = getCurrentDateText()
        pushlogKillProjInquest(`modifiedDate: ${modifiedDate}`)
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'DELETE',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
          body: JSON.stringify({'inquest_id':projInquestData.inquest_id,'inquest_name':projInquestData.inquest_name,'inquest_desc':projInquestData.inquest_desc
            ,'inquest_note':projInquestData.inquest_note,'modified_date':modifiedDate, 'handle_id':userHandleId}),
          dataType: "json"
        })
        pushlogKillProjInquest(`response: ${response}`)
        let resData = await response.json();

        pushlogKillProjInquest(`resData: ${resData}`)
        pushlogKillProjInquest(JSON.stringify(resData))
        writeLogKillProjInquest()
				
        if (resData != null ) {
          pushlogKillProjInquest(`typeof resData: ${typeof resData}`)       
          pushlogKillProjInquest("Success")
          writeLogKillProjInquest()
          appendSetMessage("Success Remove Inquest")
				} else {
          pushlogKillProjInquest('Response Data was Not Found!')
          pushlogKillProjInquest('There was a failure to communicate with the system at this time!')
          pushlogKillProjInquest("Error")
          writeLogKillProjInquest()
          pushlogKillProjInquest("Failure Remove Inquest")
				}
        
        setLookupProjInquestName(killProjInquestName)		
			}
			fetchData()
      writeLogKillProjInquest()
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
