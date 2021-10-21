import React from 'react'
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
              <h1>Categories</h1>
            <li className="sidebarListItem active">
              Category 1
            </li>
            <li className="sidebarListItem">
            Category 2
            </li>
            <li className="sidebarListItem">
            Category 3
            </li>
          </ul>
        </div>
       
        
        
      </div>
    </div>
   
    )
}

export default Sidebar
