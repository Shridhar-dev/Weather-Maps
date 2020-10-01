import React from 'react'

function Navbar() {
    return (
        
        <div>
            <nav class="navbar navbar-expand-lg px-1 px-lg-5 py-2 sticky-top" style={{background:'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(130,221,245,1) 37%, rgba(39,190,247,1) 100%)',color:"white",transition:'0.2s'}}>
    <div class="container-fluid px-5">
    <a class="navbar-brand"  style={{color:"black"}}  href="#">Open World Weather</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="fas fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a href="/#mapblock" style={{color:"black"}} class="nav-link active" aria-current="page" href="#" >Map</a>
        </li>    
    </ul>
    </div>
  </div>
  
</nav>
        </div>
    )
}

export default Navbar
