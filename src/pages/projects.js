import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout'
import useContent from '../hooks/useContent'
import Card from '../components/card'


const H1 = styled.h1`
  margin-top: 4rem;
`



const Projects = () => {


  return (
    <Layout>
      <H1>Projects</H1>

      <p>
        A small selection of work I've done, both on a commercial and personal level
      </p>

  </Layout>
)
}

export default Projects;