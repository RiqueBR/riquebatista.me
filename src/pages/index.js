import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { bpMaxMD, bpMaxSM } from "../lib/breakpoints"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Jumbotron from "../components/Jumbotron"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`

const GrideddJumbotron = styled(Jumbotron)`
  grid-area: 1 / 1 / 2 / 2;

  @media (max-width: 700px) {
    grid-area: 1 / 1;
  }
`
const TextContent = styled.div`
  grid-area: 2 / 1 / 3 / 2;

  @media (max-width: 700px) {
    grid-area: 2 / 1;
  }
`
const ImageWrapper = styled.div`
  grid-area: 1 / 2 / 3 / 3;
`

const H3 = styled.h3`
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.25;
  margin-top: 1.15em;

  ${bpMaxSM}, ${bpMaxMD} {
    font-size: 1.15rem;
  }
`

const SquiglyLink = styled(props => <Link {...props} />)`
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-underline-offset: 2px;
  text-decoration-color: #334155;
  color: inherit;

  &:hover {
    color: #00a0c6;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GridWrapper>
        <GrideddJumbotron />
        <TextContent>
          <H3>
            This is my digital corner of the inter-web. I am in the process of
            deciding what will go into this space.
          </H3>
          <H3>
            Hey, you can{" "}
            <SquiglyLink to="mailto:h.p.batista20@gmail.com">
              email me
            </SquiglyLink>{" "}
            if you need to get in contact. Or you can{" "}
            <SquiglyLink to="/about/">get to know me</SquiglyLink> a wee bit
            more and see what I've been up to.
          </H3>
        </TextContent>
        <ImageWrapper
          css={css`
            @media (max-width: 700px) {
              display: none;
            }
          `}
        >
          <StaticImage
            src="../images/build.png"
            alt="Picture of monitor under construction"
            placeholder="blurred"
            layout="constrained"
            width={600}
            height={500}
          />
        </ImageWrapper>
      </GridWrapper>
    </Layout>
  )
}

export default IndexPage
