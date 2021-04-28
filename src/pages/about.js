import React from 'react';
import styled, {css} from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const H1 = styled.h1`
  margin-top: 4rem;
`

const H2 = styled.h2`
font-weight: 500;
line-height: 1.25;
  &:after {
    content: "";
    border-top: 0.25rem solid #46b3d1;
    margin: 0.5rem 0;
    display: block;
    width: 2rem;
  }
`

const Subheader = styled.h2`
font-weight: 300;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2em;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
  }
`

const Paragraph = styled.p`
  line-height: 2rem;
  font-size: 1.25rem;
`

const About = () => (
  <Layout>
    <H1>Henrique Batista</H1>
    <Subheader>
      Software engineer, passionate about creating digital solutions, life long learner
    </Subheader>
    <GridContainer>
      <Paragraph>
        I am a software developer living in Glasgow, Scotland. I'm very passionate about what I do, from creating digital solutions to providing a good experience for users. I was born in Brazil and have lived in three different countries, and have learnt tons about different cultures. 
      </Paragraph>
      {/* <StaticImage
        src="../images/timmy_turner.png" 
        alt="Picture of Henrique"
        placeholder="blurred"
        layout="constrained"
        width={313}
        height={744}
      /> */}
    </GridContainer>
      <H2>Where I can help</H2>
      <Paragraph>
        My work intersects many areas, working with design and good ux approaches to development and testing (unit-testing & end-to-end). My preference is for ui and front end development.
      </Paragraph>
      <H2>Contact me!</H2>
      <Paragraph>
        Have you found something that caught your eye? Or just wanting to have a wee chat? Contact me by sending an email to email@email.com
      </Paragraph>
  </Layout>
)

export default About;