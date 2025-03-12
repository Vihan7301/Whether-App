import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  let [city,setcity]=useState("")
  let getData=(event)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c`)
    .then((res)=>res.json())
    .then((fres)=>{
      console.log(fres)
    })

    event.preventDefault()
    setcity("")
  }
  return (
    <div className="App">
      <h1 className="Heading">Simple weather App</h1>
      <div className="inputs">
        <form onSubmit={getData}>

          <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} placeholder="cityname" />
          <button>Submit</button>
        </form>
      </div>
      <div className='whetherBox' >
        <h3 className='cityname'>Jaipur < span className='yellow'>IN</span></h3>
        <h2 className='temprature'>9.620c</h2>
        <img src="http://openweathermap.org/img/w/50d.png"></img>
        <p>Fog</p>
        < span className='bg-[yellow]'>IN</span>
      </div>
    </div>
  );
}

export default App;

  