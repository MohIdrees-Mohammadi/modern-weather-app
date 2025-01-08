import React from 'react'
import umbrella from '../../src/assets/weatherImages/umbrella.png';
import './sidebar.css';
import { FaCloudSunRain } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { AiOutlineBars } from "react-icons/ai";
import { FaMap } from "react-icons/fa";








const SideBar = () => {
  return (
    <div className='sidebar'>
      
      <div className='details-side'>
      <div className='logo-side'>
        <img src={umbrella} height={50} />
      </div>
            <ul style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <li style={{listStyle:'none'}}><FaCloudSunRain /></li>
              <li style={{listStyle:'none'}}>Weather </li>
            </ul>
            <ul style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <li style={{listStyle:'none'}}><AiOutlineBars /></li>
              <li style={{listStyle:'none'}}>Cities </li>
            </ul>
            <ul style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <li style={{listStyle:'none'}}><FaMap /></li>
              <li style={{listStyle:'none'}}>Map </li>
            </ul>
            <ul style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <li style={{listStyle:'none'}}><HiOutlineAdjustmentsHorizontal />
              </li>
              <li style={{listStyle:'none'}}>Settings </li>
            </ul>

      </div>


        
    </div>
  )
}

export default SideBar