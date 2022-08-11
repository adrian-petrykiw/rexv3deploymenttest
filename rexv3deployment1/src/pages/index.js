import React from 'react';
import { Nav, NavLinkHomeSolid, NavLinkHomeOutlined}
  from "../components/Navbar/NavbarElements.js";

const Home = () => {
  return (
    <div>
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '64pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}> WELCOME TO REX!</h1>
      </div>

      <Nav>
        <div>
          <NavLinkHomeSolid to="/connectwallet" activeStyle>
            CONNECT WALLET
          </NavLinkHomeSolid>
        </div>

        <div>
          <NavLinkHomeOutlined to="/withoutwallet" activeStyle>
            CONTINUE WITHOUT WALLET
          </NavLinkHomeOutlined>
        </div>
      </Nav>

    </div>

  );
};

export default Home;