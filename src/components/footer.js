import React from 'react';
import styled, { css } from 'styled-components';



const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-right: 0.5rem;
`

const WrappedFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 97.5%;
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-left: 0.5rem;
`


const Footer = () => (
  <WrappedFooter>
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          font-size: 1em;
          opacity: 0.7;
        `}
      >
        {`Built by Rique Batista \u00A9 ${new Date().getFullYear()}`}
      </div>
      <div css={css`
        display: flex;
        flex-direction: row;
      `}>
        <StyledLink href="#">LinkedIn</StyledLink>
        <StyledLink href="#">Twitter</StyledLink>
        <StyledLink href="#">Github</StyledLink>
      </div>
    </div>
  </WrappedFooter>
)

export default Footer;