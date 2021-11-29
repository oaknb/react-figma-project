import React from 'react'

import { SidebarHeader, SidebarlitleHeader, Sidebarr } from './style';

function Sidebar() {
    return (
       <Sidebarr>
      
              <SidebarHeader>Categories</SidebarHeader>
            <SidebarlitleHeader>
              Category 1
            </SidebarlitleHeader>
            <SidebarlitleHeader>
            Category 2
            </SidebarlitleHeader>
            <SidebarlitleHeader>
            Category 3
            </SidebarlitleHeader>
          
       </Sidebarr>

   
    )
}

export default Sidebar
