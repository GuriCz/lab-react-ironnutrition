import React, { useState } from 'react'

function Search(props) {
    const [firstLetter, setFirstLetter] = useState("All");
    const handleSelect = e => {
        setFirstLetter(e.target.value);
        console.log("selected", e.target.value);
        props.filterFood(e.target.value); 
    }
  return (
    <div>Search</div>
  )
}

export default Search