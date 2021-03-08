import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Needs to take a prop for image title and dimensions (e.g. width and height)

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "timmy_turner.png" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default Image
