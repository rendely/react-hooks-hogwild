import React from 'react'

function FilterControls({sortName, sortWeight, onSearchChange, search, onFilterGreasedChanged, filterGreased}){

  function handleSearchChange(event){
    onSearchChange(event.target.value);
  }

  function handleGreasedChange(event){
    onFilterGreasedChanged(event.target.checked);
  }

  return(
    <div className="FilterControls">
    <label>Search by name:</label>
    <input type="text" name="search" value={search} onChange={handleSearchChange}/>    
    <label>Filter greased?</label>
    <input type="checkbox" name="greased" checked={filterGreased} onChange={handleGreasedChange}/>    
    <button name="sortName" onClick={sortName}>Sort by name</button>
    <button name="sortWeight" onClick={sortWeight}>Sort by weight</button>
    </div>
  )
}
export default FilterControls