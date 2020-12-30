import React from 'react';
import styled from 'styled-components';
import { Link as ReactLink } from 'gatsby';

const Nav = styled.nav`
  position: static;
  padding: 1.5rem 0;
  background: transparent;
  box-shadow: none;
  width: 100%;
}

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;


`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  `


const NavItem = styled.li`
  font-size: 1.5rem;
  line-height: 1;
  margin: 0 5rem 3rem 0;
  
    &.current-page {
      color: #00A0C6;
    }
    &:last-of-type {
      margin-right: 0;
    }
    &:hover {
      color: #222
    }

    ${bpMinSM} {
    font-size: 0.875rem;
  }
`

const NavLogo = styled(ReactLink)`
  color: #767676;
  line-height: 1;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

   ${bpMinSM}{
    display: none;
  }
`

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          Placeholder
        </NavLogo>
        {/* <MobileIcon>
          <FaBars />
        </MobileIcon> */}
        <NavMenu>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  </>
    )
}

export default Navbar;