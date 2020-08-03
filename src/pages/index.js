import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="header-container">
        <h1>Oi, tudo bem?</h1>
        <p>Welcome to my portfolio website. It's under construction at the moment but you can reach me here.</p>
      </div>
      <div style={{ maxWidth: `400px`, marginBottom: `1.2rem` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
