import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { bpMaxSM, bpMaxMD, bpMinLG, bpMinMD } from '../lib/breakpoints';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 60px;
  
  ${bpMinLG} {
    height: 80px;
    justify-content: space-between;
  }

`


const NavLink = styled(props => <Link {...props} />)`
  color: #222;
  font-size: 1.1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1.25;
  margin-right: .75rem;
  text-decoration: none;
    &.current-page {
      color: #00A0C6;
      border-bottom: 2px solid #222;
    }
    &:last-of-type {
      margin-right: 0;
    }
    &:hover {
      color: #0ac;
    }

  ${bpMinLG} {
    font-size: 1.5rem;
  }
  ${bpMinMD} {
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const NavLogo = styled(props => <Link {...props} />)`
  color: #767676;
  line-height: 1;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;

  ${bpMinMD} {
    font-size: 1.5rem;
    margin-left: 0px;
    margin-right: 3.5rem;
  }
  
  ${bpMinLG} {
    font-size: 2rem;
    margin-left: 0px;
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
      /home
    </NavLogo>

    <NavMenu>
      <NavLink 
        to="/notes/" 
        activeClassName="current-page"
        fontWeight="300">
        /notes
      </NavLink>
      <NavLink 
        to="/projects/" 
        activeClassName="current-page"
        fontWeight="300">
        /projects
      </NavLink>
      <NavLink 
        to="/about/" 
        activeClassName="current-page" 
        fontWeight="300">
        /about
      </NavLink>
    </NavMenu>
  </NavbarContainer>
);

export default Header;