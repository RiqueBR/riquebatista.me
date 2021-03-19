import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// TODO: Needs to take a prop for image title and dimensions (e.g. width and height)
// TODO: Add media queries


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "timmy_turner.png" }) {
        childImageSharp {
          fixed(
            width: 340,
            height: 390
          ) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default Image
