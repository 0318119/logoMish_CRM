import React, { useState } from 'react'
import './assets/css/topBar.css'
import { AiOutlineAlignRight as Bar_ico} from "react-icons/ai";
import SearchBar from './SearchBar';
import MassageBox from './MassageBox';
import NotifyBox from './NotifyBox';
import UserProfile from './UserProfile';


function TopBar(props) {

  return (
    <>
    <div className="topBarBox">
        <span className='barIco'>
            <Bar_ico 
              onClick={props.hideShowMenuClick}
            />
        </span>
        <div className="leftAreaBoxTopBar">
            <SearchBar />
            <MassageBox />
            <NotifyBox/>
            <UserProfile/>
        </div>
    </div>
    </>
  )
}

export default TopBar