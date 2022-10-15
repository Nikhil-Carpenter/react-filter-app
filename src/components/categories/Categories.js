import React from 'react'

const Categories = ({filterItems}) => {

  
  return (
        <div className="category --d-flex --cg">
            <button onClick={()=>{
              filterItems("all")
            }} className="--btn --btn-lg  --btn-secondary">All</button>

            <button onClick={()=>{
              filterItems("gown")
            }} className="--btn --btn-lg  --btn-secondary">Gown</button>

            <button onClick={()=>{
              filterItems("shirt")
            }}  className="--btn --btn-lg  --btn-secondary">Shirt</button>

            <button onClick={()=>{
              filterItems("jewelry")
            }}  className="--btn  --btn-lg --btn-secondary">Jewellry</button>

            <button  onClick={()=>{
              filterItems("watch")
            }} className="--btn  --btn-lg --btn-secondary">Watch</button>
        </div>
  )
}

export default Categories