
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #101010;
  height: 6rem;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0.25rem 0.25rem 0.25rem 0.25rem;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
  font-family: Montserrat;
`;

export const NavLinkHomeSolid = styled(Link)`
  color: #101010;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-decoration: none;
  border: 1px solid white;
  border-radius: none;
  background-color: white;
  margin: 0.25rem 1rem 0.25rem 1rem;
  padding: 1rem 2rem 1rem 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    background-color: transparent;
    color: white;
  }
  font-family: Montserrat;
`;

export const NavLinkHomeOutlined= styled(Link)`
  color: white;
  display: flex;
  justify-content: center;
  text-decoration: none;
  border: 1px solid white;
  border-radius: none;
  margin: 0.25rem 1rem 0.25rem 1rem;
  padding: 1rem 1rem 1rem 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
  font-family: Montserrat;
`;
  
export const NavLinkFirst = styled(Link)`
  color: #101010;
  display: flex;
  font-weight: bold;
  /* align-items: center;
  justify-content: center; */
  display: inline-block;
  text-decoration: none;
  border: 1px solid white;
  border-radius: none;
  background-color: white;
  margin: 0.25rem 1rem 0.25rem 1rem;
  padding: 1rem 2rem 1rem 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    background-color: transparent;
    color: white;
  }
  font-family: Montserrat;
`;



export const NavLinkSecond= styled(Link)`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-decoration: none;
  border: 1px solid white;
  border-radius: none;
  margin: 0.25rem 1rem 0.25rem 1rem;
  padding: 1rem 1rem 1rem 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
  font-family: Montserrat;
`;


  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: grid;
  align-items: center;
  margin: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;