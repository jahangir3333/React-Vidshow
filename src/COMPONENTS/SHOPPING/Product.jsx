import React from 'react'
import logo from '../../logo.svg'
import { useContext } from 'react'
import {theme} from '../../App'

function Product() {
    let {mytheme}=useContext(theme)
  return (<>
    <div className={`product p-4 bg-${mytheme==='dark'?'dark':'light'} text-${mytheme==='dark'?'light':'dark'}  rounded-4 m-2`}>
        <h1>Product Name</h1>
        <img src={logo} alt="product img" />
        <div className="btn-add-buy">
            <button className='btn btn-warning mx-2'>Add to Cart</button>
            <button className='btn btn-success mx-2'>Buy Now</button>
        </div>
        <h3>Product Details</h3>
    </div>
  </>
  )
}

export default Product