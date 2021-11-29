import React from 'react'
import {
  CardWrapper,
  CardHeader,

  CardBody,
 
  CardFieldset,
  
 
  
  CardHeading,
  CardAvatar
} from "./styles/index";





  const Card = ({ userData }) => {
    return (
        <div className="App">
        <CardWrapper>
          <CardHeader>
           
          </CardHeader>
  
          <CardBody>
            <CardFieldset>
                <CardAvatar src={userData.picture.medium} alt="" />
            
          
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

export default Card
