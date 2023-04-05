import React from 'react'
import { AiOutlineSearch as Search_ico } from "react-icons/ai";





function SearchBar() {
  return (
    <>
    <div className='searchBar'>
        <Search_ico/>
        <input type="search" placeholder='Something search here'/>
    </div>
    </>
  )
}

export default SearchBar