import React from 'react'
import './Product.css'

const Product = ({id,title,category,price,img}) => {
    
  return (
    <div className="--card product --bg-white">

        <div>
            <img className="--w100" src={img} alt="" />
        </div>
        
        <div className="--p --bg-primary">
            <h4 className="--color-white --text-center">{title}</h4>
            <div className="--flex-between">
            <p className="--color-white --fw-bold">{price}</p>
            <button className="--btn --btn-danger">Add to Cart</button>
            </div>
        </div>

    </div>  )
}

export default Product