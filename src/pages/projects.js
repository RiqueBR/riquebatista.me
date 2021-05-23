import React from 'react';
import styled, { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import {bpMaxSM, bpMaxMD} from '../lib/breakpoints';

import Layout from '../components/layout';


const H1 = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;

  ${bpMaxMD} {
    font-size: 2rem;
  }
`

const SubHeader = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.6;
  max-width: 700px;
  margin: 0;

  ${bpMaxMD} {
    font-size: 1.3rem;
    font-weight: 500;
  }
`

const ProjectTitle = styled.h2`
  margin-top: 2rem;
  font-size: 2rem;

  ${bpMaxMD} {
    font-size: 1.5rem;
  }
`
const ProjectSubHeader = styled.h3`
  margin-bottom: 0;
  font-size: 1.5rem;

    ${bpMaxMD} {
    font-size: 1.3rem;
  }
`
const ProjectTech = styled.p`
  margin-top: 0.5rem;
  font-size: 1.3rem;
  font-style: italic;

  ${bpMaxMD} {
    font-size: 1.1rem;
  }
  ${bpMaxSM} {
    font-size: 0.9rem;
  }
`

const ProjectDesc = styled.p`
  max-width: 700px;
  font-size: 1.3rem;
  line-height: 1.6;

  ${bpMaxMD} {
    font-size: 1.1rem;
  }

  ${bpMaxSM} {
    font-size: 1rem;
  }
`



const Projects = () => {


  return (
    <Layout>
      <H1>Projects</H1>

      <SubHeader>
        A small selection of the work I've done, both on a commercial and personal level. If you want to check them all, go check my github.
      </SubHeader>

      <div>
        <ProjectTitle>Project title</ProjectTitle>
        <div>
          <ProjectSubHeader>A subheader here with a catch phrase</ProjectSubHeader>
          <ProjectTech>01/01/2020 - The technologies used here</ProjectTech>
        </div>

        <StaticImage 
          src="../images/website-template.jpg"
          alt="Picture of monitor under construction"
          placeholder="blurred"
          layout="constrained"
        />

        <ProjectDesc>
          Offal put a bird on it disrupt, biodiesel crucifix williamsburg leggings. Pop-up tofu copper mug YOLO raw denim gastropub cardigan. Keytar seitan retro hot chicken franzen.
        </ProjectDesc>

        <ProjectDesc>
          Authentic pug vape copper mug unicorn lo-fi knausgaard fam before they sold out umami.
        </ProjectDesc>
      </div>

  </Layout>
)
}

export default Projects;