import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-weight: 600;
  font-size: 32px;
  margin-top: 4rem;
`
const H2 = styled.h2`
  font-weight: 300;
  font-size: 28px;
  line-height: 1.25;
`


const Jumbotron = () => (
  <div>
    <H1>Oi, tudo bem?</H1>
    <H2>Welcome to my portfolio website. It's under construction at the moment but you can reach me here.</H2>
  </div>
);

export default Jumbotron;