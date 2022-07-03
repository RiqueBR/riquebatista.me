import React from "react"
import styled from "styled-components"
import { bpMinSM, bpMaxSM, bpMinLG } from "../lib/breakpoints"

const H1 = styled.h1`
  font-size: 2.8rem;
  margin-top: 3rem;
  margin-bottom: 0;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

  /* ${bpMinLG} {
    font-weight: 600;
    font-size: 3.5rem;
    margin-top: 3rem;
    margin-bottom: 0;
  } */
`
const Subheader = styled.h2`
  font-size: 1.75rem;
  line-height: 1.3;
  font-weight: 300;
  max-width: 60vw;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-top: 0.75rem;
    max-width: 100vw;
  }

   /* ${bpMinLG} {
    font-size: 2rem;
    margin-top: 0.15em;
    min-width: 60vw;
  } */
`

const Jumbotron = () => (
  <div>
    <H1>Henrique Batista</H1>
    <Subheader>
      Software engineer, novice designer and amateur UX enthusiast.
    </Subheader>
  </div>
)

export default Jumbotron
