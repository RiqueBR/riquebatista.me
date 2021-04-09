import React from "react";
import {StaticImage} from 'gatsby-plugin-image';
import styled, {css} from 'styled-components';
import { Link } from 'gatsby';
import { RoughNotation } from "react-rough-notation";
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

        <RoughNotation 
          type="highlight" 
          color="yellow"
          iterations={1}
          multiline={true}
          show={true}>
          <H2>
          This is my portfolio website. You'll find some of my previous and current work, and learn a wee bit about me. It's under construction at the moment but you can reach me <RoughNotation type="circle" show={true}><ReferenceLink to="mailto:h.p.batista20@gmail.com">here</ReferenceLink></RoughNotation>.
          </H2>
        </RoughNotation>
        
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
