import React from 'react'
import wi from "./Images/weather.png"
function Header() {
    return (
        <>
        <div class="container-fluid" style={{background:'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(130,221,245,1) 37%, rgba(39,190,247,1) 100%)'}}>
            <div class="row py-5">
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-2">
                    <h1 class="display-2 text-center">Know the weather around the<strong> world</strong>🌍</h1>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-2">
                    <img src={wi} class="img-fluid" width="300rem"/>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Header
