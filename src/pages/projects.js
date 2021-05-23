import React from 'react';
import styled, { css } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout'


const H1 = styled.h1`
  margin-top: 4rem;
`



const Projects = () => {


  return (
    <Layout>
      <H1>Projects</H1>

      <h2>
        A small selection of work I've done, both on a commercial and personal level
      </h2>

      <div>
        <h2>Project title</h2>
        <div>
          <h3>A subheader here with a catch phrase</h3>
          <p><i>01/01/2020 - The technologies used here</i></p>
        </div>

        <StaticImage 
          src="../images/website-template.jpg"
          alt="Picture of monitor under construction"
          placeholder="blurred"
          layout="constrained"
        />

        <p>
          Offal put a bird on it disrupt, biodiesel crucifix williamsburg leggings. Pop-up tofu copper mug YOLO raw denim gastropub cardigan. Keytar seitan retro hot chicken franzen.
        </p>

        <p>
          Authentic pug vape copper mug unicorn lo-fi knausgaard fam before they sold out umami.
        </p>
      </div>

  </Layout>
)
}

export default Projects;