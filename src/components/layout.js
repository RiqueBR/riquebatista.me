import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './header'

const Wrapper = styled.div`
  font-family: Lato, sans-serif;
`

const Layout = ({ children }) => {


  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Wrapper>
        <Header />
        <main>{children}</main>
        <footer>
          <p>Built by Rique Batista</p>
        </footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
