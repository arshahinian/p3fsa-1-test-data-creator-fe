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
	let [message, setMessage] = useState('')

  function getCurrentDateText()
  {
      let today = new Date();
      let year = parseInt(today.getFullYear());
      let month = parseInt(today.getMonth());
      let day = parseInt(today.getDay());
      let yearText = padZero(year);
      let monthText = padZero(month);
      let dayText = padZero(day);
      let hour = parseInt(today.getHours());
      let minute = parseInt(today.getMinutes());
      let second = parseInt(today.getSeconds());
      let hourText = padZero(hour);
      let minuteText = padZero(minute);
      let secondText = padZero(second);
      let time = `${monthText}/${dayText}/${yearText} ${hourText}:${minuteText}:${secondText}`
      return time;
  }

  function padZero(value)
  {
      if(parseInt(value) > 9)
      {
          return value;
      }
      else
      {
          return `0${value}`
      }    
  }


  /* USER HANDLE SECTION */
  const API_URL_USER_HANDLES = `${BASE_API_URL}/handles`
  let [handleData, setHandleData] = useState({})

  /* USER HANDLE SECTION (LOOKUP) */
  let [lookupUserHandle, setLookupUserHandle] = useState('')

  let logLookupUserHandle = []
  function pushlogLookupUserHandle(value)
  {
    let actionName = 'LookupUserHandle';
    logLookupUserHandle.push(`${actionName}=> ${value}`)
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
        writeUseEffectLog()        
        pushlogLookupUserHandle(`resData: ${resData}`)
				if (resData != null && resData.handle_id != null) {
          pushlogLookupUserHandle(`resData.handle_id: ${resData.handle_id}`)
          pushlogLookupUserHandle(`typeof resData: ${typeof resData}`)          
          setHandleData(resData)
          pushlogLookupUserHandle("Success")
          writeLogLookupUserHandle()
				} else {
          pushlogLookupUserHandle('Response Data was Not Found!')
          setMessage('There was a failure to communicate with the system at this time!')
          appendUseEffectLog("Error")
          writeLogLookupUserHandle()
				}
			}
			fetchData()
		}
    pushlogLookupUserHandle("Finish")
    writeLogLookupUserHandle()
	}, [lookupUserHandle])

  const maneuverlookupUserHandle = (e, handleName) => {
		e.preventDefault()
    pushlogLookupUserHandle(handleName)
		setLookupUserHandle(handleName)
	}

  /* USER HANDLE SECTION (ADD) */

  let logAddUserHandle = []
  function pushlogAddUserHandle(value)
  {
    let actionName = 'AddUserHandle';
    logAddUserHandle.push(`${actionName}=> ${value}`)
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
		e.preventDefault()
    pushlogAddUserHandle(addUserHandle)
		if(addUserHandle) {      
      pushlogAddUserHandle(`addUserHandle: ${addUserHandle}`)
      
      var defaultPassword = addUserHandle.charAt(1) + addUserHandle.length + addUserHandle.charAt(addUserHandle.length - 1) + '*'
      pushlogAddUserHandle(`defaultPassword: ${defaultPassword}`)

			let fetchData = async () => {
        let fetchString = HANDLES_API_URL
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
        setMessage(response)
        setLookupUserHandle(addUserHandle)		
			}
			fetchData()
      writeLogAddUserHandle()
		}
	}


  /* USER HANDLE SECTION (EDIT) */

  /* USER HANDLE SECTION (REMOVE) */


  
  

  

  

  

  /* PROJECT INQUEST SECTION */

  /* PROJECT INQUEST SECTION (LOOKUP) */

  /* PROJECT INQUEST SECTION (ADD) */

  /* PROJECT INQUEST SECTION (EDIT) */

  /* PROJECT INQUEST SECTION (REMOVE) */


  const INQUESTS_API_URL = `${BASE_API_URL}/inquests`
  let [inquestData, setInquestData] = useState('')
  let [isNewInquest, setIsNewInquest] = useState(false)

  /* INQUEST ARTIFACT SECTION */

  /* INQUEST ARTIFACT SECTION (LOOKUP) */

  /* INQUEST ARTIFACT SECTION (ADD) */

  /* INQUEST ARTIFACT SECTION (EDIT) */

  /* INQUEST ARTIFACT SECTION (REMOVE) */
 
  const ARTIFACTS_API_URL = `${BASE_API_URL}/artifacts`




  

  const maneuverInquestData = (e, inquestName) => {
    let handleId = handleData.id
    
		e.preventDefault()
    if(inquestName) {
      console.log(' INQUEST NAME IS POPULATED ')
      /* GET INQUESTS AND SEE IF THE HANDLE ALEADY HAS A INQUEST */
      const fetchAllInquestData = async () => {
        let fetchString = INQUESTS_API_URL
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
          setMessage("You already have a inquest finish it!")
        } else {    
        
          /* GET INQUEST */
          console.log(' GET INQUEST ')
          console.log(inquestName)
          
          const fetchExistingInquestData = async () => {
            let fetchString = INQUESTS_API_URL + '/' + inquestName + "?handle_Id=" + handleId
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
              let fetchString = INQUESTS_API_URL
              console.log(fetchString)				
              let response = await fetch(fetchString,{
                crossDomain:true,
                method: 'POST',
                headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
                body: JSON.stringify({"inquest_name":inquestName,"modified_date":"05/01/2022","handle_id":handleId})
                })
                console.log(response)
                setMessage(response)
                const fetchNewInquestDataInfo = async () => {
                  let fetchString = INQUESTS_API_URL + '/' + inquestName + "?handle_Id=" + handleId
                  let response = await fetch(fetchString,{
                    crossDomain:true,
                    method: 'GET',
                    headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
                  let resData = await response.json();
                  if (resData != null && resData.id != null) {
                    setInquestData(resData)
                    console.log(resData)
                  } else {
                    setMessage('No Inquest Found')
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
    let handleId = handleData.id
    console.log(inquestName)
		if(inquestName) {      
      console.log(`handleinquestFinish - ${inquestName}`)
    
      let fetchInquestFinishData = async () => {
        let fetchString = INQUESTS_API_URL
        console.log(fetchString)				
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'PUT',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'PUT'},          
          body: JSON.stringify({"inquest_id":inquestData.id,"inquest_name":inquestName,"inquest_status":0,"modified_date":"05/01/2022","handle_id":handleId})
        })
        console.log(response)
        setMessage(response)        
			}
			fetchInquestFinishData()
		}
	}

  let appActions = {
    maneuverlookupUserHandle: maneuverlookupUserHandle,
    maneuverAddUserHandle: maneuverAddUserHandle,
    maneuverInquestData: maneuverInquestData,
    maneuverInquestFinish: maneuverInquestFinish
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
