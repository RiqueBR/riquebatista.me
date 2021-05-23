import React from 'react';
import styled from 'styled-components';
import { bpMinSM } from '../lib/breakpoints';


const H1 = styled.h1`
  font-weight: 600;
  font-size: 3.5rem;
  margin-top: 3rem;
  margin-bottom: 0;

  ${bpMinSM}{
    font-size: 3.25rem;
    margin-top: 1rem;
  }
`
const Subheader = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.3;
  margin-top: 0.15em;
  max-width: 37.7rem;

  ${bpMinSM}{
    font-size: 1.75rem;
    max-width: 18rem;
  }
`
const H2 = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.25;
  margin-top: 1.15em;

  ${bpMinSM}{
    font-size: 1.75rem;
  }
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
    <H1>Henrique Batista</H1>
    <Subheader>
      Software developer, novice designer and amateur UX enthusiast.
    </Subheader>
  </div>
);

export default Jumbotron;