import React from 'react'
import {
  CardWrapper,
  CardHeader,

  CardBody,
 
  CardFieldset,
  
 
  
  CardHeading
} from "./Card";


  const Deneme = ({ userData }) => {
    return (
        <div className="App">
        <CardWrapper>
          <CardHeader>
           
          </CardHeader>
  
          <CardBody>
            <CardFieldset>
            <div className="topbarIconContainer">
            <img src={userData.picture.medium} alt="" className="topAvatar" />
            
          </div>
            </CardFieldset>
  
            <CardFieldset>
              <CardHeading> <div >{userData.name.first} {userData.name.last}</div></CardHeading>
              <p>category1</p>
              <p>lorem ipsum</p>
            </CardFieldset>
            <CardFieldset>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
    )
}

export default Deneme
