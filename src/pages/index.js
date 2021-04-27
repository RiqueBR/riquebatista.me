import React from "react";
import {StaticImage} from 'gatsby-plugin-image';
import styled, {css} from 'styled-components';
import { Link } from 'gatsby';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { bpMinSM } from '../lib/breakpoints';

import SEO from "../components/seo";
import Layout from "../components/layout";
import Jumbotron from '../components/jumbotron';


const H2 = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.25;
  margin-top: 1.15em;

  ${bpMinSM}{
    font-size: 1.75rem;
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
          <H2>
            This is my digital corner of the inter-web. I am on the process of deciding what will go into this space.
          </H2>
            <H2>
              If you would like to reach me <RoughNotation type="underline" show={true} order={1} animationDelay={50000}><ReferenceLink to="mailto:h.p.batista20@gmail.com">just email me</ReferenceLink></RoughNotation> or you can <RoughNotation type="underline" padding={0} show={true} order={3} animationDelay={50000}><ReferenceLink to="/about/">learn a bit about myself.</ReferenceLink></RoughNotation>
            </H2>
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
