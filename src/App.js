import React, {useState, useEffect } from 'react'
import './App.css';
import { API_KEY } from './Apikey';
import Cloudyicon from './image/cloudy.png'
import axios from 'axios'

function App() {

  const[data,setData]=useState({
    main:{},
    weather:[{}]
  })
  useEffect(()=>{
    
    
    async function getdata(){
  const Api='https://api.openweathermap.org/data/2.5/weather?&appid=b45fbd21bfb1931213eef0c60e7f2eb9&q=Malappuram,India&units=metric'
  try{
    let response=await axios.get(Api)
    console.log(response.data);
    setData(response.data)
  }
  catch(err){
     console.log(err);
  }
    }
    getdata()
  },[])
 

  return (
    <div className="App">
      <div className="main-body">
        <div className="card">
          <div className="cardcontent">
          <h1 className="heading1"> Weather Today</h1>
          <h2>{data.name}</h2>
          <h3>{`${Math.round(data.main.temp)}`}&deg;c</h3>
          <h3>{data.weather[0].main}</h3>
          <p>{data.weather[0].description}</p>
          </div>
          <div className="icon">
             <img src={Cloudyicon} alt="icon" />
          </div>


        </div>
      </div>

   
    </div>
  );
}

export default App;
