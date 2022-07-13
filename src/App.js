import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useEffect, useState,Fragment } from 'react';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import RegisterHandleComponent from './Components/RegisterHandleComponent';
import LoginHandleComponent from './Components/LoginHandleComponent';
import MainComponent from './Components/MainComponent'
import AppContext from "./AppContext";


function App(props) {
  let [enteredHandles, setEnteredHandles] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [handleData, setHandleData] = useState({})
  let [inquestData, setInquestData] = useState('')
  let [isNewInquest, setIsNewInquest] = useState(false)

  const BASE_API_URL = 'http://localhost:5000'

  const HANDLES_API_URL = `${BASE_API_URL}/handles`
  const INQUESTS_API_URL = `${BASE_API_URL}/inquests`
  const ARTIFACTS_API_URL = `${BASE_API_URL}/artifacts`

  useEffect(() => {
    console.log("useEffect - API")
		if(enteredHandles) {
      console.log(`useEffect - ${enteredHandles}`)
			const fetchData = async () => {
        let fetchString = HANDLES_API_URL + '/' + enteredHandles
        console.log(fetchString)				
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'GET',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}})
        console.log(response)
        console.log(`fetch - ${response}`)
				let resData = await response.json();
        console.log(resData)
				if (resData.id != null) {
          console.log("HERE WE ARE")
          console.log(resData)
          console.log(typeof resData)
					setHandleData(resData)
				} else {
          console.log("are we here?")
					setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [enteredHandles])

  const maneuverEnteredHandle = (e, handleName) => {
		e.preventDefault()
    console.log(handleName)
		setEnteredHandles(handleName)
	}

  const maneuverNewHandle = (e, newHandleName) => {
		e.preventDefault()
    console.log(newHandleName)
		if(newHandleName) {      
      console.log(`maneuverNewHandle - ${newHandleName}`)
      
      var defaultPassword = newHandleName.charAt(1) + newHandleName.length + newHandleName.charAt(newHandleName.length - 1) + '*'
      console.log(`maneuverNewHandlePw - ${defaultPassword}`)

			let fetchData = async () => {
        let fetchString = HANDLES_API_URL
        console.log(fetchString)				
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'POST',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
          body: JSON.stringify({'handle_name':newHandleName,'login_code':'NEW','password':defaultPassword,'modified_date':'05/05/2022'}),
          dataType: "json"
        })
        console.log(response)
        setMessage(response)
        setEnteredHandles(newHandleName)		
			}
			fetchData()
		}
	}

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
    maneuverEnteredHandle: maneuverEnteredHandle,
    maneuverNewHandle: maneuverNewHandle,
    maneuverInquestData: maneuverNewHandle,
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
