import React from "react";
import { Nav, NavLinkHomeSolid}
  from "../components/Navbar/NavbarElements.js";
  
const WithoutWallet = () => {
  return (
    <div className="header1">
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '48pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}>
        CHOOSE A GAME:
      </h1>
      <Nav>
        <div>
          <NavLinkHomeSolid to="/pacman" activeStyle>
            PACMAN
          </NavLinkHomeSolid>
        </div>
        <div>
          <NavLinkHomeSolid to="/spaceinvaders" activeStyle>
            SPACE INVADERS
          </NavLinkHomeSolid>
        </div>
      </Nav>
    </div>
  );
};
  
export default WithoutWallet;