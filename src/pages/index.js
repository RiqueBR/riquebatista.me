import React from "react";
import {StaticImage} from 'gatsby-plugin-image';
import styled, {css} from 'styled-components';
import { Link } from 'gatsby';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { bpMaxMD, bpMaxSM } from '../lib/breakpoints';

import SEO from "../components/seo";
import Layout from "../components/layout";
import Jumbotron from '../components/jumbotron';


const H2 = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.25;
  margin-top: 1.15em;

  ${bpMaxSM}{
    font-size: 1.75rem;
  }
`
const H3 = styled.h3`
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.25;
  margin-top: 1.15em;

  ${bpMaxSM}, ${bpMaxMD}{
    font-size: 1.15rem;
  }
`

const ReferenceLink = styled(props => <Link {...props} />)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #00A0C6;
  }
`



const IndexPage = () => {


  return (
    <Layout>
      <SEO title="Home" />
      <Jumbotron />
      <div css={css`
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 10px;
        place-content: center;
        align-items: center;

        @media (max-width: 767px) {
          grid-template-columns: 1fr;
        }
      `}>

        <div>
        
          <RoughNotationGroup show={true}>
            {/* <RoughNotation type="box" show={true} order={1} animationDelay={800}> */}
          <H3>
            This is my digital corner of the inter-web. I am in the process of deciding what will go into this space.
          </H3>
          <H3>
              Hey, you can <RoughNotation type="underline" show={true} order={1} animationDelay={50000}><ReferenceLink to="mailto:h.p.batista20@gmail.com">email me</ReferenceLink></RoughNotation> if you need to get in contact.
          </H3>

            <H3>
              Alternatively, you can <RoughNotation type="underline" padding={0} show={true} order={3} animationDelay={50000}><ReferenceLink to="/about/">get to know me</ReferenceLink></RoughNotation> a wee bit and see what I've been up to.
            </H3>
          {/* </RoughNotation> */}
          </RoughNotationGroup>

        </div>
        
        <div
          css={css`
            @media (max-width: 767px) {
              display: none;
            }
          `}>
          <StaticImage
            src="../images/build.png"
            alt="Picture of monitor under construction"
            placeholder="blurred"
            layout="constrained"
            width={600}
            height={500}
            />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
