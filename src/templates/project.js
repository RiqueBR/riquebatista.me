import React from "react"
import { graphql } from "gatsby"
import { css } from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import ReadLink from "../components/ReadLink"

// TODO: This needs a major revamp, place more imagery and handle line height and font-size

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const ProjectTemplate = ({ data: { mdx: project } }) => (
  <Layout>
    <h1>{project.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {project.frontmatter.author}
    </p>
    <MDXRenderer>{project.body}</MDXRenderer>
    <ReadLink to="/projects">&larr; back to all projects</ReadLink>
  </Layout>
)

export default ProjectTemplate
