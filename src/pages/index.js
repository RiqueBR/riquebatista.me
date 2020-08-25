import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jumbotron from '../components/jumbotron'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
  </Layout>
)

export default IndexPage
