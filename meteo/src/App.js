import './App.css';
import { useEffect, useRef, useState } from 'react';


function MeteoComponent(value){
  const info = value.value
  return(
    <article>
      <h1>J + {info.day} <br /></h1>
      <div className='t'>{info.tmin}° - {info.tmax}°</div>
    </article>
  )
}

function App() {
  const cityRef = useRef(null);
  const [info, setInfo] = useState([null])
  const [city, setCity] = useState(null)

  function getMeteo(city) { 
    fetch(`https://api.meteo-concept.com/api/location/cities?token=296f93ec67c6cc75bff76ae9e9e10efba2cc633725833013f6b7f0f377be4f5b&search=${city}`)
      .then((response) => {response.json().then((result) => {
            result.cities.length === 0 ? setCity("Cette ville n'exste pas, ou n'est pas en France") : fetch(`https://api.meteo-concept.com/api/forecast/daily?token=296f93ec67c6cc75bff76ae9e9e10efba2cc633725833013f6b7f0f377be4f5b&insee=${result.cities[0].insee}`)
          .then((response) => {response.json().then((result) => { setInfo(result.forecast)
                                                                  setCity(result.city.name + " (" + result.city.cp + ")")
                                                                  console.log(city)
            }).catch()}
      )})})
        .catch((error) => {console.log('error = ' + error)})}
  return (
    <div className="App">
      <div className='meteo'>
        <h1>Meteo</h1>
        <div className='meteoContainer' >
          <div>Choisissez une ville, je vous dit quel temps il y fera pour les 7 prochains jours !</div>
          <span>
          <form ref={cityRef}>
            <div className='form_ref city'>
              <input  type="input" name='city' className='inputCity' />
            </div>
          </form>
          <button onClick={()=> getMeteo(cityRef.current.city.value)}>Get</button></span>
          
        </div>
      </div>
      {info[0] ? 
        <div className='txt'>
          <h2>{city} :</h2>  
          {[...new Array(8)].map((_, i) => (<MeteoComponent value={info[i]} />))}
        </div>
        : ""
        }
    </div>
  );
}

export default App;
