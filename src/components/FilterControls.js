import React from 'react'

function FilterControls({sortName, sortWeight}){
  return(
    <div className="FilterControls">
    <label>Search by name:</label>
    <input type="text" name="search" />    
    <label>Filter greased?</label>
    <input type="checkbox" name="greased" />    
    <button name="sortName" onClick={sortName}>Sort by name</button>
    <button name="sortWeight" onClick={sortWeight}>Sort by weight</button>
    </div>
  )
}
export default FilterControls