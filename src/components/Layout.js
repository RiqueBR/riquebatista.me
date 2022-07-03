import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled, { css } from "styled-components"
import { bpMaxMD, bpMaxSM } from "../lib/breakpoints"

import Header from "./Header"
import Footer from "./Footer"

const Wrapper = styled(props => <div {...props} />)`
  font-family: Lato, sans-serif;
  margin: 0 2rem;
  min-height: 95vh;
  display: flex;
  flex-direction: column;

  ${bpMaxMD} {
    padding: 0 2rem;
  }

  ${bpMaxSM} {
    padding: 0 1rem;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Wrapper>
        <Header />
        <main
          css={css`
            flex: 1;
          `}
        >
          {children}
        </main>
        <Footer />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
