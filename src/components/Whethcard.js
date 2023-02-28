import React, { useState } from 'react'
import moment from 'moment';


export default function Whethcard({Weakdata}) {
    console.log("Weakkk",Weakdata);
    const [data,setData]=useState(Weakdata)
    return (
        <>
            <div class="container-fluid py-2" id='cardContainer'>
                <div class="d-flex flex-row flex-nowrap">
                 
                    {data&&data.map((data,key)=>
                    <div class="card card-body">
                        <p id='cardHead'>{moment(data?.dt*1000).format("dddd")}</p>
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} id='Icon'/>
                        <p id='cardBB'>{data.temp.min}°C- {data.temp.max} C</p>
                        <p id='cardBB'>{data.weather[0].main}</p>
                        <p id='cardBB1'>{data.weather[0].description}</p>
                    </div> 
                    )} 
                     
                    
                </div>
            </div>



            
        </>
    )
}
