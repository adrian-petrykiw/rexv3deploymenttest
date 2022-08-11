import React from "react";
import { Nav, NavLinkSecond }
  from "../components/Navbar/NavbarElements.js";

const ConnectWallet = () => {
  return (
    <div className="header1">
      <h1 style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', margin: "10rem 0rem 0rem 0rem", color: 'white', fontSize: '48pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}>
        COMING SOON!
      </h1>
      <Nav>
        <div>
          <NavLinkSecond to="/withoutwallet" activeStyle>
            CONTINUE WITHOUT WALLET
          </NavLinkSecond>
        </div>
      </Nav>
    </div>
  );
};

export default ConnectWallet;