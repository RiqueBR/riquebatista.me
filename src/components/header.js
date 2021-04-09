import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { bpMinSM, bpMinMD } from '../lib/breakpoints';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  
  ${bpMinSM}{
    height: 40px;
    justify-content: space-between;
  }

  ${bpMinMD}{
    height: 40px;
    justify-content: space-between;
  }

`


const NavLink = styled(props => <Link {...props} />)`
  color: #222;
  font-size: 2rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1.25;
  margin-right: 0.5rem;
  padding-right: 0.5rem;
  text-decoration: none;
    &.current-page {
      color: #00A0C6;
      border-bottom: 2px solid #222;
    }
    &:last-of-type {
      margin-right: 0;
    }
    &:hover {
      color: #222
      border-bottom: 2px solid #222;
    }

  ${bpMinSM} {
    font-size: 12px;
  }
  ${bpMinMD} {
    font-size: 16px;
    padding-right: 0;
    margin-right: 0.4rem;
  }
`;

const NavLogo = styled(props => <Link {...props} />)`
  color: #767676;
  line-height: 1;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
  margin-left: 6px;
  font-weight: bold;
  text-decoration: none;

  ${bpMinSM} {
    font-size: 12px;
    margin-left: 0px;
    margin-right: 1rem;
  }
  
  ${bpMinMD} {
    font-size: 16px;
    margin-left: 0px;
    margin-right: 3.5rem;
  }
`

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 0px;
  padding-left: 0px;
`



const Header = () => (
  <NavbarContainer>

    <NavLogo to="/">
      Placeholder
    </NavLogo>

    <NavMenu>
      <NavLink 
        to="/garden/" 
        activeClassName="current-page"
        fontWeight="300">
        /digital garden
      </NavLink>
      <NavLink 
        to="/about/" 
        activeClassName="current-page" 
        fontWeight="300">
        /about
      </NavLink>
      <NavLink 
        to="/projects/" 
        activeClassName="current-page"
        fontWeight="300">
        /projects
      </NavLink>
    </NavMenu>
  </NavbarContainer>
);

export default Header;