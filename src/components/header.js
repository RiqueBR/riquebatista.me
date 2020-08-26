import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/Navbar';

const NavLink = styled(props => <Link {...props} />)`
  color: #222;
  font-size: 1.5rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 5rem 3rem 0;
  padding: 3rem 0 0.5rem 0;
  text-decoration: none;
  &.current-page {
    color: #00A0C6;
  }
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: #222
  }
`;



const Header = () => (
  <Navbar>
    <NavLink to="/">
      Placeholder
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
      <NavLink 
        to="/contact/" 
        activeClassName="current-page"
        fontWeight="300">
        /contact
      </NavLink>
  </Navbar>

);

export default Header;