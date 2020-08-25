import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './header'

const Wrapper = styled.div`
  font-family: Lato, sans-serif;
`
const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: left;
  margin-left: 0.5rem;
`

const Layout = ({ children }) => {


  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Wrapper>
        <Header />
        <main>{children}</main>
        <Footer>
          <p>Built by Rique Batista</p>
        </Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
