import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'

import Header from '../components/Header'
import Footer from './footer'

const Wrapper = styled(props => <div {...props}/>)`
  font-family: Lato, sans-serif;
  margin: 0.5em auto 0px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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
