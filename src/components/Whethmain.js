import React from 'react'
import './styl.css'
import moment from 'moment'
import {CloudSync} from '@mui/icons-material';
import {InvertColors} from '@mui/icons-material';
import {WindPower} from '@mui/icons-material';

export default function WhethMain({citydata}) {
  console.log("Citydata==>",citydata);
  const date = new Date()
  return (
    <>
    <div id='cardContainer1'>
    <div id='TownDiv'>
        <p id='TownHead'>{citydata.city}&nbsp;{citydata.country}</p>
        <p id='date1'>{moment().format('dddd DD MMMM')}</p>
        <p id='date1'>Population:{citydata.pop}</p>

      </div>
      <div id='WhethMainDiv'>

        <p id='time1'>{citydata.sunRise} PM</p>
        <p id='time2'>{citydata.sunSet} AM</p>
        <div id='whethS'>
          <img src={`http://openweathermap.org/img/wn/${citydata.weathIcon}@2x.png`} id='Icon'/>
          <p id='TempHead'>{citydata.temp} C</p>
          <p id='date1'>{citydata.main},{citydata.main2}</p>
          <p id='date1'><CloudSync/>{citydata.pressure} hpa <InvertColors/>{citydata.humidity}% <WindPower/>{citydata.Wspeed}m/s N</p>
        </div>


      </div>
      </div>
      
    </>

  )
}
