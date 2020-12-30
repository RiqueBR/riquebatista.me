import React from 'react';
import { css } from 'styled-components';

const Footer = () => (
  <footer css={css`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    border: 1px black dotted;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  `}>
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          font-size: 0.8em;
          opacity: 0.7;
        `}
      >
        {`Built by Rique Batista \u00A9 ${new Date().getFullYear()}`}
      </div>
      <div>
        <a href="#">LinkedIn</a>
      </div>
      <div>
        <a href="#">Twitter</a>
      </div>

    </div>
  </footer>
)

export default Footer;