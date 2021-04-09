import React from 'react';
import styled, { css } from 'styled-components';
import { Twitter, GitHub, LinkedIn} from './ContactIcons'



const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-right: 0.5rem;
`

const WrappedFooter = styled.footer`
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`


const Footer = () => (
  <WrappedFooter>
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 3em;
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
        <Twitter />
        <GitHub />
        <LinkedIn />
      </div>
    </div>
  </WrappedFooter>

)

export default Footer;