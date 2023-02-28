import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import WhethMain from './components/Whethmain';
import Whethcard from './components/Whethcard';
import { useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';


function App() {
  const [data, setData] = useState({

    cityvalue: "",
    weather: {},
    weekinfo: {},
    error: false,
    loading: false
  })


  const cityInput = (e) => {
    console.log(e.target.value);
    console.log(data);
    setData({
      ...data,
      cityvalue: e.target.value
    })

  }
  // {console.log(data.cityvalue);}
  const cityAction = (e) => {
e.preventDefault()
document.getElementById('noInfo2').style.display="none"
  setData({
    loading: true
  })
    console.log(data.cityvalue);
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${data.cityvalue}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`)
      // .then((response) => response.json())
      .then((res) => {


        const output = res.data

        const Wmains = {
          city: res.data.city.name,
          country: res.data.city.country,
          pop: res.data.city.population,
          main: res.data.list[0].weather[0].main,
          main2: res.data.list[0].weather[0].description,
          temp: res.data.list[0].temp.max,
          pressure: res.data.list[0].pressure,
          humidity: res.data.list[0].humidity,
          Wspeed: res.data.list[0].speed,
          weathIcon: res.data.list[0].weather[0].icon,
          sunSet: new Date(output.list[0].sunset * 1000).toLocaleTimeString().slice(0, 4),
          sunRise: new Date(output.list[0].sunrise * 1000).toLocaleTimeString().slice(0, 4)
        }
        console.log("DDDC", Wmains)


        setData({
          ...data,
          weekinfo: res.data.list,
          weather: Wmains


        })
      })
      .catch(error => {
        setData({
          ...data,
          loading: false,
          error: true,
          weekinfo: {},
          weather: {}
        })
      })

  }


  console.log("WeakInfo===>", data.weekinfo);
  console.log("WeatherInfo===>", data.weather)

  return (
    <>
    
      <div id='MainContainer'>
        <Head CityIN={cityInput} cityAct={cityAction} />
        <p id="noInfo2">Search for <br/> Weather</p>
        {data.loading==true?<Loader/>:
        <>
         {data.weather.city != undefined ? <>
          <WhethMain citydata={data?.weather} />
          <Whethcard Weakdata={data?.weekinfo} />
        </>
          :
          data.error ?
            <p id="noInfo">No Information <br/>Available.....</p> :
            <div>

            </div>
      }
        </>
        }
      </div>
    </>

  );
}

export default App;
