import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const H1 = styled.h1`
  margin-top: 4rem;
`

const About = () => (
  <Layout>
    <H1>A wee bit about me</H1>
  </Layout>
)

export default About;