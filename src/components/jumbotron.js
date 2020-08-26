import React from 'react'
import styled from 'styled-components'


const H1 = styled.h1`
  font-weight: 600;
  font-size: 3.5rem;
  margin-top: 4rem;
`
const H2 = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.25;
  margin-top: 1.2em;
`
const Link = styled.a`
  color: #444;
  text-decoration: underline;
  &:hover{
    color: #444;
    text-decoration: underline; 
    cursor: pointer;
  }
`


const Jumbotron = () => (
  <div>
    <H1>Oi <span role="img" aria-label="wave-emoji">👋🏾</span>, tudo bem?</H1>
    <H2>
      Welcome to my portfolio website. It's under construction at the moment but you can reach me <Link href="https://twitter.com/rique_p_batista">here</Link>.
    </H2>

    
  </div>
);

export default Jumbotron;