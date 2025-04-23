import React,{useContext} from 'react'
import { shopping } from '../../App'
import {theme} from '../../App'

function Cart() {
 let {cart,emptyCart}=useContext(shopping)
 let {mytheme}=useContext(theme)
 
 console.log(cart)
    return (
    <>
    <h1>Your Cart</h1> 
    {cart.length===0?"":<button className='btn btn-warning' onClick={emptyCart}>Empty Cart</button>}
    <div className="container-fluid d-flex flex-wrap">

    {cart.map(item=>{
      return(
        <div className={`cart text-${mytheme==='dark'?'light':'dark'} w-25 rounded shadow m-3 p-4 bg-${mytheme}`}>
            <h1>{item.name}</h1>
            <img src={item.img} alt="product img" className='w-100' height={'150px'}/>
            <h3>{item.price}</h3>
            <h3>Product Details</h3>
        </div>
        )
        
      })}
    
      </div>
      {(cart.length===0)?"":<button className='btn btn-danger px-5 py-2'>Proceed to Checkout</button>}

    </>
  )
}

export default Cart