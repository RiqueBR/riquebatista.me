import React from "react"
import { graphql } from "gatsby"
import { css } from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import ReadLink from "../components/Read-Link"

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

const NoteTemplate = ({ data: { mdx: note } }) => (
  <Layout>
    <h1>{note.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {note.frontmatter.author}
    </p>
    <MDXRenderer>{note.body}</MDXRenderer>
    <ReadLink to="/notes">&larr; back to my other notes</ReadLink>
  </Layout>
)

export default NoteTemplate
