import React from 'react'
import './Topbar.css';
import { SearchOutlined,SwapRightOutlined  } from '@ant-design/icons';


import { LeftSection, Navbar, RightSection } from './styles';





function Topbar() {
    return (
      <>
        <Navbar>
     <LeftSection>
       
            <div className="SearchCenter" >
        <SearchOutlined className="Searchhh" /></div>
        </LeftSection>
       
        <RightSection>
         
            
         
         
          <iconButton>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
            
          </iconButton>
          <div >
            <a href>Go to my app </a>
          </div>
          
          <SwapRightOutlined />
        </RightSection>
      
    </Navbar>
    </>
    )
}

export default Topbar
