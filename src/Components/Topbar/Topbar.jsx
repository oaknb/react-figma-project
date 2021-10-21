import React from 'react'
import './Topbar.css';
import { SearchOutlined,SwapRightOutlined  } from '@ant-design/icons';
import Search from '../Search/Search';

function Topbar() {
    return (
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
            <div className="SearchCenter" >
        <SearchOutlined style={{color:'white',height:'40px'}} /></div>
        <Search></Search>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            
         
          </div>
          <div className="topbarIconContainer">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
            
          </div>
          <div className="topbarIconContainer">
            <a href>Go to my app </a>
          </div>
          
          <SwapRightOutlined />
        </div>
      </div>
    </div>
    )
}

export default Topbar
