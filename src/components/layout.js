import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'
import { bpMinMD } from '../lib/breakpoints';

import Header from './header'
import Footer from './footer'

const Wrapper = styled(props => <div {...props}/>)`
  font-family: Lato, sans-serif;
  max-width: 1230px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    max-width: 100%;
    margin: 0;
  }
`


const Layout = ({ children }) => {

  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Wrapper>
        <Header />
            <main css={css`
              flex: 1;
            `}>
              {children}
            </main>
          <Footer />
      </Wrapper>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
