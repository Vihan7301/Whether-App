import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 className="Heading">Simple weather App</h1>
      <div className="inputs">
        <input type="text" />
        <button>Submit</button>
      </div>
      <div className='whetherBox' >
        <h3 className='cityname'>Jaipur < span className= 'yellow'>IN</span></h3>
        <h2 className='temprature'>9.620c</h2>
        <img src="http://openweathermap.org/img/w/50d.png"></img>
        <p>Fog</p>
        < span className='bg-[yellow]'>IN</span>
      </div>

    </div>
  );
}

export default App;
