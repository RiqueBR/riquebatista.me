import React from 'react';
import styled, {css} from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { bpMinLG, bpMinMD, bpMaxSM } from '../lib/breakpoints';

const H1 = styled.h1`
  font-size: 3rem;
  margin-top: 3rem;
  margin-bottom: 0;

  ${bpMinLG}{
    font-size: 3rem;
    margin-top: 2rem;
    margin-bottom: 0;
  }
`

const H2 = styled.h2`

font-weight: 500;
line-height: 1.25;
margin-bottom: 0.5rem;

  &:after {
    content: "";
    border-top: 0.25rem solid #46b3d1;
    margin: 0.5rem 0;
    display: block;
    width: 2.5rem;
  }
`

const Subheader = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.4;
  margin-top: .25rem;
  margin-bottom: 1.5rem;

  ${bpMinLG}{
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.6;
    max-width: 700px;
    margin-top: .5rem;
    margin-bottom: 1.5rem;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  ${bpMinLG}{
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 2em;
  }
`

const Paragraph = styled.p`

font-size: 1.1rem

  ${bpMinLG}{
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.5;
  }

  ${bpMinMD}{
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.5;
  }
`

const CustomParagraph = styled.p`

  font-size: 1.1rem;
  font-weight: 300;
  margin-top: 0.5rem;
  
  ${bpMinLG}{
    font-weight: 300;
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.5;
    max-width: 45rem;
  }

  ${bpMinMD}{
    font-weight: 300;
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.5;
    max-width: 45rem;
  }
`

const About = () => (
  <Layout>
    <H1>Henrique Batista</H1>
    <Subheader>
      Software engineer, runner and life long learner
    </Subheader>
    <GridContainer>
      <Paragraph>
        I am a software developer living in Glasgow, Scotland. I'm very passionate about what I do, from creating digital solutions to providing a good experience for users. I was born in Brazil and have lived in three different countries, and have learnt tons about different cultures. 
      </Paragraph>
    </GridContainer>
      <H2>Where I can help</H2>
    <CustomParagraph>
        My work intersects many areas, working with design and good ux approaches to development and testing (unit-testing & end-to-end).<wbr /> My preference is for ui and front end development.
      </CustomParagraph>
      <H2>Contact me!</H2>
    <CustomParagraph>
      Have you found something that caught your eye? Or just wanting to have a wee chat? Contact me by sending an email to email@email.com
      </CustomParagraph>
  </Layout>
)

export default About;