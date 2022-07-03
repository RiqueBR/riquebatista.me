import React from 'react';
import styled from 'styled-components';
import { bpMinSM, bpMaxSM, bpMinLG } from '../lib/breakpoints';


const H1 = styled.h1`
  font-size: 2.8rem;
  margin-top: 3rem;
  margin-bottom: .5rem;

  ${bpMinLG}{
    font-weight: 600;
    font-size: 3.5rem;
    margin-top: 3rem;
    margin-bottom: 0;
  }


`
const Subheader = styled.h2`

  font-size: 1.75rem;
  line-height: 1.3;
  font-weight: 300;
  max-width: 17.7rem;
  
  ${bpMinLG}{
    font-size: 2rem;
    margin-top: 0.15em;
    max-width: 34rem;
  }
`

const Jumbotron = () => (
  <div>
    <H1>Henrique Batista</H1>
    <Subheader>
      Software engineer, novice designer and amateur UX enthusiast.
    </Subheader>
  </div>
);

export default Jumbotron;