import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout'
import useContent from '../hooks/useContent'
import Card from '../components/Card'


const H1 = styled.h1`
  margin-top: 4rem;
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  margin-top: 3em;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const Projects = () => {
  
  const projects = useContent();

  return (
    <Layout>
      <H1>Projects</H1>

      <ProjectGrid>
        {projects.map(project => (
          <Card 
          key={project.slug} 
          title={project.title}
          slug={project.slug}
          image={project.image} />
          ))}
      </ProjectGrid>

  </Layout>
)
}

export default Projects;