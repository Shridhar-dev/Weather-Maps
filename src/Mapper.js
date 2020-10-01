import React,{useState,useEffect} from 'react'
import DataCard from './DataCard.js'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


function Mapper(props) {
    const [mlat, setmlat] = useState(37.778519)
    const [mlong, setmlong] = useState( -122.405640)
    const [city_data, setcdata] = useState()
    const [country_data, setcodata] = useState()
    const [kof_data, setkdata] = useState()
    const [temp_data, settempdata] = useState()
    const [tempmin_data, settempmindata] = useState()
    const [tempmax_data, settempmaxdata] = useState()
    let maploaded=false
     useEffect( () => {
         fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${mlat}&lon=${mlong}&appid=f4ee1f01c55829b264b1db85cdb36975`)
        .then(response=>{
            if(response.ok){
                return response.json()
            }
            throw new Error("Req failed");
        },networkError=>console.log(networkError.message)
        ).then(jsonResponse=>{
            
            setcdata(jsonResponse.name)
            setkdata(jsonResponse.weather[0].main)
            setcodata(jsonResponse.sys.country)
            settempdata(jsonResponse.main.temp)
            settempmindata(jsonResponse.main.temp_min)
            settempmaxdata(jsonResponse.main.temp_max)
        })
        maploaded=true
        
    }, [onClick])
    function onClick(m,t,coord){
            const { latLng } = coord;
            const lat = latLng.lat();
            const lng = latLng.lng();
            setmlat(lat)
            setmlong(lng)
            console.log(`lat:${mlat} and long:${mlong}`)
            console.log(city_data)
            
    }
    
    return (
        <>
            <div>     
                <h1 class="py-5">Find the place 🔍</h1>                 
                <div style={{height:"100vh"}}>
                    <Map
                google={props.google}
                style={{ height: "80%", margin: "auto" ,position:"static",zIndex:0}}
                className={"map"}
                
                zoom={14}
                onClick={onClick}
                >
                
                        <Marker
                        position={{lat: mlat, lng: mlong}}
                        />
                
                    </Map>
                </div>
            </div>
        
            <DataCard city={city_data} kow={kof_data} temp={temp_data} temp_min={tempmin_data} temp_max={tempmax_data} country={country_data}/>
        </>
        
    )
    
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCA4-diR_wKMCIum2wlIQ9v8de7EnEm8ic')
})(Mapper);
