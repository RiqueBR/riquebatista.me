import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'

import Header from './header'
import Footer from './footer'

// This is a rect-bootsrap component styled in styled-components
const Wrapper = styled(props => <div {...props}/>)`
  font-family: Lato, sans-serif;
  height: 100%;
`


const Layout = ({ children }) => {


  return (
    <div css={css`
      position: relative;
      min-height: 100%;
    `}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Wrapper>
          <Header />
            <main>
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
