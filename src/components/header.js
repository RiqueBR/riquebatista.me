import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { bpMinSM, bpMinMD } from '../lib/breakpoints';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  
  ${bpMinSM}{
    height: 40px;
    justify-content: flex-end;
  }

  ${bpMinMD}{
    height: 40px;
    justify-content: flex-end;
  }

`


const NavLink = styled(props => <Link {...props} />)`
  color: #222;
  font-size: 1.5rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
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
    font-size: 0.875rem;
  }
`;

const NavLogo = styled(props => <Link {...props} />)`
  color: #767676;
  line-height: 1;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 6px;
  font-weight: bold;
  text-decoration: none;

  ${bpMinSM} {
    display: none;
  }

  ${bpMinMD} {
    display: none;
  }
`

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 0px;
`



const Header = () => (
  <NavbarContainer>

    <NavLogo to="/">
      Placeholder
    </NavLogo>

    <NavMenu>
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
      <NavLink 
        to="/contact/" 
        activeClassName="current-page"
        fontWeight="300">
        /contact
      </NavLink>
    </NavMenu>
  </NavbarContainer>
);

export default Header;