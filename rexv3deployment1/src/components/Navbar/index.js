import React from "react";
import { Nav, NavLinkFirst, NavLink, NavMenu }
  from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <div>
          <NavLinkFirst to="/spaceinvaders" activeStyle>
              SPACE INVADERS
            </NavLinkFirst>
            <NavLinkFirst to="/pacman" activeStyle>
              PACMAN
            </NavLinkFirst>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;