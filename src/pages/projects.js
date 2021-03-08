import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout'
import useContent from '../hooks/useContent'
import Card from '../components/card'


const H1 = styled.h1`
  margin-top: 4rem;
`

const Projects = () => {
  
  const projects = useContent();

  return (
    <Layout>
      <H1>Projects</H1>

      {projects.map(project => (
        <Card 
          key={project.slug} 
          title={project.title}
          slug={project.slug} />
      ))}

  </Layout>
)
}

export default Projects;