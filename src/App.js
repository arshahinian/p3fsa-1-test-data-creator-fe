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
      setMessageA(line)      
    }
    else
    {      
      setMessageJ("Messaging Error!")
      setMessageK(line)
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
    appendSetMessage("Looking Up User")   
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

  const maneuverlookupUserHandle = (e, handleName) => {
    appendSetMessage(getCurrentDateText())
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
    appendSetMessage(getCurrentDateText())
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

  /* USER HANDLE SECTION (REMOVE) */
  
  /* PROJECT INQUEST SECTION */

  const API_URL_PROJ_INQUESTS = `${BASE_API_URL}/inquests`
  let [inquestData, setInquestData] = useState('')
  let [isNewInquest, setIsNewInquest] = useState(false)

  /* PROJECT INQUEST SECTION (LOOKUP) */
  let [lookupProjInquestName, setLookupProjInquestName] = useState('')


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
    appendSetMessage(getCurrentDateText())
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
        writeLogAddProjInquest()        
        pushlogAddProjInquest(`resData: ${resData}`)
				if (resData != null && resData.data != null) {
          pushlogAddProjInquest(`resData.data: ${resData.data}`)
          pushlogAddProjInquest(`typeof resData: ${typeof resData}`)          
          setInquestData(resData.data)
          pushlogAddProjInquest("Success")
          writeLogLookupUserHandle()
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

  /* PROJECT INQUEST SECTION (REMOVE) */

  

  /* INQUEST ARTIFACT SECTION */

  /* INQUEST ARTIFACT SECTION (LOOKUP) */

  

  /* INQUEST ARTIFACT SECTION (ADD) */

  /* INQUEST ARTIFACT SECTION (EDIT) */

  /* INQUEST ARTIFACT SECTION (REMOVE) */
 
  const ARTIFACTS_API_URL = `${BASE_API_URL}/artifacts`




  

  const maneuverInquestData = (e, inquestName) => {
    let handleId = userHandleData.id
    
		e.preventDefault()
    if(inquestName) {
      console.log(' INQUEST NAME IS POPULATED ')
      /* GET INQUESTS AND SEE IF THE HANDLE ALEADY HAS A INQUEST */
      const fetchAllInquestData = async () => {
        let fetchString = API_URL_PROJ_INQUESTS
        let response = await fetch(fetchString,{
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
        let resData = await response.json();

        let handleHasInquest = false;

        for(let i = 0;i<resData.length;i++)
        {
          console.log(resData[i])
          if(resData[i] != null && resData[i].id != null)
          {
             if(resData[i].handle_id == handleId && resData[i].inquest_status == 1)
             {
              handleHasInquest = true;
                setInquestData(resData[i]);
             }
          }
        }

        if (handleHasInquest) {
          console.log("You already have a inquest finish it!")
          
        } else {    
        
          /* GET INQUEST */
          console.log(' GET INQUEST ')
          console.log(inquestName)
          
          const fetchExistingInquestData = async () => {
            let fetchString = API_URL_PROJ_INQUESTS + '/' + inquestName + "?handle_Id=" + handleId
            let response = await fetch(fetchString,{
            crossDomain:true,
            method: 'GET',
            headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
            let resData = await response.json();
            if (resData != null && resData.id != null) {
              console.log(' INQUEST NAME EXISTS ')
              setInquestData(resData)
              console.log(resData)
            } else {
              console.log(' INQUEST NAME NEW ')
              setIsNewInquest(true);
              console.log(' POST INQUEST ')
              console.log(inquestName)
              console.log(`New Inquest Name - ${inquestName}`)
              /* POST / CREATE INQUEST */
              let fetchNewInquestData = async () => {
              let fetchString = API_URL_PROJ_INQUESTS
              console.log(fetchString)				
              let response = await fetch(fetchString,{
                crossDomain:true,
                method: 'POST',
                headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
                body: JSON.stringify({"inquest_name":inquestName,"modified_date":"05/01/2022","handle_id":handleId})
                })
                console.log(response)                
                const fetchNewInquestDataInfo = async () => {
                  let fetchString = API_URL_PROJ_INQUESTS + '/' + inquestName + "?handle_Id=" + handleId
                  let response = await fetch(fetchString,{
                    crossDomain:true,
                    method: 'GET',
                    headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
                  let resData = await response.json();
                  if (resData != null && resData.id != null) {
                    setInquestData(resData)
                    console.log(resData)
                  } else {
                    console.log('No Inquest Found')
                  }
                }
                fetchNewInquestDataInfo()
              }
              fetchNewInquestData()	
            }
          }
          fetchExistingInquestData()            
        }
      }
      fetchAllInquestData();      
    }   
  }


  const maneuverInquestFinish = (e, inquestName) => {
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
          body: JSON.stringify({"inquest_id":inquestData.id,"inquest_name":inquestName,"inquest_status":0,"modified_date":"05/01/2022","handle_id":handleId})
        })
        console.log(response)                
			}
			fetchInquestFinishData()
		}
	}

  

  let appActions = {
    maneuverlookupUserHandle: maneuverlookupUserHandle,
    maneuverAddUserHandle: maneuverAddUserHandle,
    maneuverAddProjInquest: maneuverAddProjInquest,
    maneuverInquestData: maneuverInquestData,
    maneuverInquestFinish: maneuverInquestFinish,
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
