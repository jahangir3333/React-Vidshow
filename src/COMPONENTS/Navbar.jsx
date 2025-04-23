import React, { useContext } from 'react'
import { Link } from 'react-router'
import logo from '../IMAGES/logo2.png' // Assuming you have a logo.png in the assets folder
import {theme} from '../App'
import { shopping } from '../App'
function Navbar() {
  let {mytheme,handletheme}=useContext(theme)
  let {cart}=useContext(shopping)
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
        <li className="nav-item">
          <Link className="nav-link" to="/shopping">Shopping Page</Link>
        </li>
      </ul>

      {/* <h3 className='text-white mx-3'>{showpath===""?"HOME":showpath}</h3> */}
    
      <div style={{color:mytheme==='dark'?"white":"black", alignItems:'center', dsiplay:'flex', marginRight:'5px'}} className="d-flex">
      <i className="fa-solid fa-circle-half-stroke" style={{cursor:'pointer',marginRight:'6px'}} onClick={handletheme}></i>
        {mytheme==='dark'?<h5>Dark Mode</h5>:<h5>Light Mode</h5>}
        </div>

        <i className={`fa-solid fa-cart-shopping text-${mytheme==='dark'?'light':'dark'}`}></i><span className={`text-${mytheme==='dark'?'light':'dark'} rounded-circle bg-danger px-1`} style={{position:'relative',marginLeft:'1px',marginBottom:'20px'}}>{cart<=9&&cart>0?"0"+cart:cart}</span>
=======
        
        <Link to='/cart'>
        <i className={`fa-solid fa-cart-shopping text-${mytheme==='dark'?'light':'dark'}`}></i>
        </Link>
        <span className={`text-${mytheme==='dark'?'light':'dark'} rounded-circle bg-primary px-1`} style={{position:'relative',marginLeft:'-3px',marginBottom:'20px'}}>{cart.length===0?" "+"0":cart.length<=9&&cart>0?"0"+cart.length:cart.length}</span>

      <form className="d-flex mx-4" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form> 

        <Link to="/login">
       <button className="btn btn-primary">Login</button>
       </Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar