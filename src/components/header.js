import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 2rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const CustomHeader = styled.header`
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
`

const NavBar = styled.nav`
  margin-top: 0;
`

const Header = () => (
  <CustomHeader>
    <NavLink to="/" fontWeight="bold">
      /home
    </NavLink>
    <NavBar>
      <NavLink to="/about/" activeClassName="current-page">
        /about
      </NavLink>
      <NavLink to="/projects/" activeClassName="current-page">
        /projects
      </NavLink>
    </NavBar>
  </CustomHeader>
);

export default Header;