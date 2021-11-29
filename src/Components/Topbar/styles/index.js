import styled from "styled-components";


export const Navbar = styled.div`
width: 100%;

background-color: white;
position: sticky;
padding: 20px 40px;
height: 72px;
left: 0px;
top: 0px;


background-color: rgb(251, 251, 255);
`;

export const iconButton = styled.div`
 
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: 215px;
height: 48px;
left: 0px;
top: 0px;




flex: none;
order: 0;
flex-grow: 0;
margin: 0px 16px;
`;


export const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;


export const LeftSection = styled.div`
  display: flex;
  justify-content: flex-start;
`;