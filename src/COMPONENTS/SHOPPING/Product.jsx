import React, { createContext, useRef } from 'react'
import logo from '../../logo.svg'
import { useContext } from 'react'
import {theme} from '../../App'
import { shopping } from '../../App'
import { useNavigate } from 'react-router-dom'


function Product(props) {
    let {mytheme}=useContext(theme)
    let {addCart}=useContext(shopping)
    let prodname=useRef()
    let prodprice=useRef()
    let prodimg=useRef()

    let navigate=useNavigate()

    let [singleproduct,setSingleproduct]=React.useState(null)
    
    const showproduct=()=>{
      let singleproduct={
        name:prodname.current.innerText,
        price:prodprice.current.innerText,
        img:prodimg.current.src
      }
        setSingleproduct(singleproduct)
        navigate("/singleproduct")
    }

  return (
  <>
    

    <div className={`product p-4 bg-${mytheme==='dark'?'dark':'light'} text-${mytheme==='dark'?'light':'dark'}  rounded-4 m-2`} onClick={showproduct} style={{cursor:"pointer"}}>
        <h1 ref={prodname}>{props.prodname}</h1>
        <img ref={prodimg} src={logo} alt="product img" />
        <div className="btn-add-buy">
            <button className='btn btn-warning mx-2' onClick={()=>addCart(prodname,prodimg,prodprice)}>Add to Cart</button>
            <button className='btn btn-success mx-2' >Buy Now</button>
        </div>
        <h4 ref={prodprice}>$342</h4>
        <h3>Product Details</h3>
    </div>

  </>
  )
}

export default Product