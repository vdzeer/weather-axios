import {useState } from 'react';
import './App.css';
import axios from 'axios';

const KEY = 'ca859f2e861022c0b92dbc0dce834cac'

function App() {
  const [city, setCity] = useState('');
  async function formHandler(e) {
    e.preventDefault();
    const value = e.target[0].value;
    e.target[0].value = '';

    await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${KEY}&units=metric`)
      .then(res => {
        setCity(res.data)
      });
  }

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input type="text" placeholder="Input city" />
        <button type="submit"> Input </button>
      </form>

      <br/><br/>
      <div>
        {city ? 
        <div>
          Sity: {city.name} <br/>
          Country: {city.sys.country}  <br/>
          Weather: {city.weather[0].main} <br/>
          Temp: {Math.round(city.main.temp)}°<br/>
          Feels like: {Math.round(city.main.feels_like)}°<br/>
        </div> :
        <div>No data</div>
      }
      </div>
    </div>
  );
}

export default App;
