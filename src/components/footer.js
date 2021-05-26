import React from 'react';
import styled, { css } from 'styled-components';
import { Twitter, GitHub, LinkedIn} from './ContactIcons'

const WrappedFooter = styled.footer`
  text-align: center;
  border-top: 2px solid #f1f4f8;
  padding-top: .5rem;
  margin-top: 2rem;

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
          font-size: 1rem;
          opacity: 0.7;
            @media (max-width: 375px) {
              font-size: 0.8rem;
            }
        `}
      >
        {`Built by Rique Batista \u00A9 ${new Date().getFullYear()}`}
      </div>
      <div css={css`
        display: flex;
        flex-direction: row;
      `}>
        <Twitter css={css`
          &:visited {
            color: #00A0C6;
          }
        `}/>
        <GitHub css={css`
          &:visited {
            color: #00A0C6;
          }
        `}/>
        <LinkedIn css={css`
          &:visited {
            color: #00A0C6;
          }
        `}/>
      </div>
    </div>
  </WrappedFooter>

)

export default Footer;