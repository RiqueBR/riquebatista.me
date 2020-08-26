import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
// import { NavBar } from 'react-bootstrap';

const NavLink = styled(props => <Link {...props} />)`
  color: #222;
  font-size: 1.5rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 5rem 0 0;
  padding: 3rem 0 3rem 0;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-start;
`

const Header = () => (
  <NavBar className="fixed">
    <NavLink to="/" fontWeight="300">
      /home
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
  </NavBar>

);

export default Header;