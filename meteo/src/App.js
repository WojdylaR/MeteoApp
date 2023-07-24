import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const cityRef = useRef(null);
  const [text, setText] = useState(null)

  function getMeteo(city) { 
    fetch(`https://api.meteo-concept.com/api/location/cities?token=296f93ec67c6cc75bff76ae9e9e10efba2cc633725833013f6b7f0f377be4f5b&search=${city}`)
      .then((response) => {response.json().then((result) => {
            result.cities.length === 0 ? setText("Cette ville n'exste pas, ou n'est pas en France") : fetch(`https://api.meteo-concept.com/api/forecast/daily?token=296f93ec67c6cc75bff76ae9e9e10efba2cc633725833013f6b7f0f377be4f5b&insee=${result.cities[0].insee}`)
          .then((response) => {response.json().then((result) => { console.log(result.city.name);
                                                                   setText("Demain, a " + result.city.name + ' ' + result.city.cp + " il fera maximum " + result.forecast[1].tmax + "°, et minimum " + result.forecast[1].tmin + '°') 
            }).catch()}
      )})})
        .catch((error) => {console.log('error = ' + error)})}

  return (
    <div className="App">
      <div className='meteo'>
        <h1>Meteo</h1>
        <div className='meteoContainer' >
          <div>Choisissez une ville, je vous dit quel temps il y fera demain !</div>
          <span>
          <form ref={cityRef}>
            <div className='form_ref city'>
              <input  type="input" name='city' className='inputCity' />
            </div>
            
          </form>
          <button onClick={()=> getMeteo(cityRef.current.city.value)}>Get</button></span>
          <div className='txt'>{text}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
