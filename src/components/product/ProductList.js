import React from 'react'
import Product from './Product'
import "./ProductList.css"


const ProductList = ({products}) => {
  
  return (
    <div className=" product-list --p --grid-15">
        {
          products.map((prod,idx)=>{
            return <Product
            title={prod.title}
            price={prod.price}
            category={prod.category}
            img={prod.img}
            key={prod.id}/>

          })
        }
              
          
    </div>
  )
}

export default ProductList