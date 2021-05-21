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
          <p><i>Year built - The technologies used here</i></p>
        </div>

        <StaticImage 
          src="../images/website-template.jpg"
          alt="Picture of monitor under construction"
          placeholder="blurred"
          layout="constrained"
          // css={css`
          //     box-shadow:
          //     0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          //     0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          //     0 12.5px 10px rgba(0, 0, 0, 0.06),
          //     0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          //     0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          //     0 100px 80px rgba(0, 0, 0, 0.12);
          // `}
        />
      </div>

  </Layout>
)
}

export default Projects;