import React, { useRef } from 'react'
import logo from '../../logo.svg'
import { useContext } from 'react'
import {theme} from '../../App'
import { shopping } from '../../App'

function Product(props) {
    let {mytheme}=useContext(theme)
    let {addCart}=useContext(shopping)
    let prodname=useRef()
    let prodprice=useRef()
    let prodimg=useRef()
    


  return (
  <>
    <div className={`product p-4 bg-${mytheme==='dark'?'dark':'light'} text-${mytheme==='dark'?'light':'dark'}  rounded-4 m-2`}>
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