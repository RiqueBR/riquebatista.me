import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Jumbotron from '../components/jumbotron'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <div className="container">
      <div className="header-container">
      </div>
      <div style={{ maxWidth: `700px`, marginBottom: `1rem` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
