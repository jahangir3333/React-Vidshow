import React, { useContext } from 'react'
import { Link } from 'react-router'
import logo from '../IMAGES/logo2.png' // Assuming you have a logo.png in the assets folder
import {theme} from '../App'

function Navbar() {
  let {mytheme,handletheme}=useContext(theme)
  // let showpath=window.location.pathname.split('/')[1].toUpperCase();
  console.log(mytheme)

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={mytheme}>
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <img src={logo} alt="logo" height={'45px'} style={{marginRight:'5px'}}/>
    <Link className="navbar-brand text-warning fw-bold" to="/">VidShow</Link>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addvideo">Admin Panel</Link>
        </li>
      </ul>

      {/* <h3 className='text-white mx-3'>{showpath===""?"HOME":showpath}</h3> */}
    
      <div style={{color:mytheme==='dark'?"white":"black", alignItems:'center', dsiplay:'flex', marginRight:'5px'}} className="d-flex">
      <i class="fa-solid fa-circle-half-stroke" style={{cursor:'pointer',marginRight:'6px'}} onClick={handletheme}></i>
        {mytheme==='dark'?<h5>Dark Mode</h5>:<h5>Light Mode</h5>}
        </div>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form> 

       <button className="btn btn-primary">Login</button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar