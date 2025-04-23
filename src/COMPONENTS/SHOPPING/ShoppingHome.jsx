import React from 'react'
import Product from './Product'

function ShoppingHome() {
  return (
    <div className="shoppingpage d-flex flex-wrap">
        <Product prodname='Apple Phone'/>
        <Product prodname='Dell Laptop'/>
        <Product prodname='Vivo Phone'/>
        <Product prodname='Mi Phone'/>
        <Product prodname='Oneplus Phone'/>
        <Product prodname='Samsung Phone'/>
        <Product prodname='Asus Laptop'/>
        <Product prodname='HP Laptop'/>

    </div>
  )
}

export default ShoppingHome