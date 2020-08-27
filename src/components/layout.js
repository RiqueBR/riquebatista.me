import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import Header from './header'

// This is a rect-bootsrap component styled in styled-components
const Wrapper = styled(props => <Container {...props}/>)`
  font-family: Lato, sans-serif;
  margin-left: 6.5rem;
  margin-right: 6.5rem;
`
const Footer = styled.section`
  margin-bottom: 50px;
  min-width: 80%;
  text-align: left;
  border-top: 1px solid #f7f7f7;
  padding: 60px 0;
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
        <div className="navbar fixed-bottom">
          <div>
              <p 
                css={`
                margin-bottom: 0.25rem;
                `}>
                  Built by Rique Batista
              </p>
              <p>There will be some analytics, nothing creepy.</p>
            </div>
        </div>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
