import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './header'

const Wrapper = styled.div`
  font-family: Lato, sans-serif;
  max-width: 70rem;
  margin: 0 6.5rem 0 6.5rem;
`
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: left;
  border-top: 0.5px solid #f7f7f7
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
