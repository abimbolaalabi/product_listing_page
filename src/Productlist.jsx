import React from 'react'
import "./Productlist.css"
import image from "../src/assets/Shoe.png"
const Productlist = ({product}) => {
      if (!product) return null;
  return (
    <div>
        <div className='product_Wrapper'>
            <img src={product.image} alt=""  />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>$ {product.price}</p>
            {/* <p>Color:{product.color}</p>
            <p>Discount:{product.discount}</p> */}
            
        </div>
      
    </div>
  )
}

export default Productlist
