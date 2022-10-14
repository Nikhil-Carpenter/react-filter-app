import React from 'react'

const Search = ({inpValue,onInputChange}) => {
  return (
    <div className="--form-control --mr">
    <input
        className="search"
        type="text"
        placeholder="Search Product"
        name="search"
        value={inpValue}
        onChange={onInputChange}
    />
    </div>
  )
}

export default Search