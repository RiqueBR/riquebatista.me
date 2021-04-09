import React from 'react';
import styled from 'styled-components';
import { bpMinSM } from '../lib/breakpoints';


const H1 = styled.h1`
  font-weight: 600;
  font-size: 3.5rem;
  margin-top: 5rem;
  margin-bottom: 0;

  ${bpMinSM}{
    font-size: 3.25rem;
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
      Software developer, novice designer and amateur UX researcher.
    </Subheader>
    {/* <H2>
      This is my portfolio website. You'll find some of my previous and current work, and learn a wee bit about me. It's under construction at the moment but you can reach me <Link href="mailto:h.p.batista20@gmail.com">here</Link>.
    </H2> */}
  </div>
);

export default Jumbotron;