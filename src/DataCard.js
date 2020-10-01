import React,{useState} from 'react'

function DataCard(props) {
    const [wicon, setwicon] = useState()
    let wd="30px"
    function imager(){
        if(props.kow === "Haze"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/90/000000/fog-day.png" width={wd}/>
            )
        }
        else if(props.kow === "Thunderstorm"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/chance-of-storm--v1.png" width={wd}/>
            )
        }
        else if(props.kow === "Drizzle"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/wet.png" width={wd}/>
            )
        }
        else if(props.kow === "Rain"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/rain.png" width={wd}/>
            )
        }
        else if(props.kow === "Snow"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/snow.png" width={wd}/>
            )
        }
        else if(props.kow === "Mist"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/foggy-night-1.png" width={wd}/>
            )
        }
        else if(props.kow === "Smoke"){
            return(
                <img src="https://img.icons8.com/fluent-systems-filled/24/000000/smoke-explosion.png" width={wd}/>
            )
        }
        else if(props.kow === "Dust"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/dust.png" width={wd}/>
            )
        }
        else if(props.kow === "Fog"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/fog-night.png" width={wd}/>
            )
        }
        else if(props.kow === "Sand"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/dust.png" width={wd}/>
            )
        }
        else if(props.kow === "Ash"){
            return(
                <img src="https://img.icons8.com/fluent-systems-filled/24/000000/smoke-explosion.png" width={wd}/>           
            )
        }
        else if(props.kow === "Squall"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/storm.png" width={wd}/>
            )
        }
        else if(props.kow === "Tornado"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/tornado.png" width={wd}/>
            )
        }
        else if(props.kow === "Clear"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/sun.png" width={wd}/>
            )
        }
        else if(props.kow === "Clouds"){
            return(
                <img src="https://img.icons8.com/ios-glyphs/30/000000/clouds.png" width={wd}/>
            )
        }

    }
    return (
        <div style={{boxShadow:'0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)',backgroundColor:"rgba(39,190,247,0.5)"}} class="container-fluid">
          <div class="row d-flex align-items-center">
              <div class="col">
              {imager()}
    <h1>{props.city}</h1><span class="h1">{props.country}</span>
              </div>
              <div class="col">
                  <h1>Stats</h1>
              <h1>Weather : {props.kow}</h1>
            <h1> Temp : {props.temp}</h1>
            <h1>Temp_min : {props.temp_min}</h1>
            <h1>Temp_max : {props.temp_max}</h1>
                </div>
          </div>
            
        </div>
    )
}
export default DataCard
