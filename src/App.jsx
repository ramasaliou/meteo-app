import React, { useState } from "react";
import './App.css'
import axios from 'axios';

const api = {
  key: "226c63be44b47b9396c91c5d363a7560",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  // const [weatherData, setWeatherData] = useState(null);
  

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result.main.temp_min)
          console.log(result.main.temp_max)
          console.log(result.main.humidity)

          setQuery('');
          console.log(result);
        })


    }
  }

  
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "0ctober", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year} `
  }
 
  return (
    <div className="app">
      <main>
        <div className="search-box">

          <input type='text'
            className='search-bar'
            placeholder='Search ...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <div className="test"><p>METEO</p></div>

          <p>La météorologie est une science qui a pour objet l'étude des phénomènes atmosphériques tels que les nuages, les précipitations ou le vent.Le but est de comprendre comment ils se forment et évoluent en fonction des paramètres mesurés tels que la pression, la température et l'humidité.</p>
        </div>

    
          
              

        {(typeof weather.main != "undefined") ? (
          
            
            <div className="weather-box">
            
              
                <div className="image">

                 <img className="img" src="https://res.cloudinary.com/den46exbf/image/upload/v1691508564/Group_3_by4pba.png" alt="" /> 
                 
                </div>
                 

               <div className="box2">

                   <div className="location"> 
                      {weather.name}, {weather.sys.country}   
                   </div>
                   <div className="date">
                      {dateBuilder(new Date())} 
                      <p>ensoille</p>
                   </div>
               </div>

               


               
              
              {/* <div className="weather">
                     {weather.weather[0].main}
                     
                  </div>  */}
               {/* <p>humidity:{weather.main.humidity}</p>  */}

              
              <div className="box3">
                  <div className="temp">
                    {Math.round(weather.main.temp)}°C
                  </div>

              
               
                 <div className="MaxMin"> 
             
                   <div>
                    <img className="img1" src="https://res.cloudinary.com/den46exbf/image/upload/v1691508564/group1_ko3miw.png" alt="" />{weather.main.temp_max}°
                   </div>

                    <div>
                       <img className="img2" src="https://res.cloudinary.com/den46exbf/image/upload/v1691508565/group2_thk4oj.png" alt="" /> {weather.main.temp_min}°
                  
                    </div>
            
                 </div>
              </div>
             
           </div> 

        ) : ('')}
      </main>
    </div>
  );
}


export default App;






