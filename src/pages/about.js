import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Image from '../components/image.js'

const H1 = styled.h1`
  margin-top: 4rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2em;
`

const About = () => (
  <Layout>
    <H1>Henrique Batista</H1>
    <GridContainer>
      <div>
        <p>
          I'm baby shoreditch single-origin coffee ethical leggings scenester fam. Sartorial unicorn humblebrag, man bun cornhole knausgaard pok pok street art raw denim tousled wolf intelligentsia next level before they sold out raclette. Pork belly tumblr kitsch, mustache listicle vinyl artisan. Godard whatever shaman biodiesel farm-to-table.

          DIY ugh meh, yr cloud bread bicycle rights raw denim hammock. Mlkshk raclette echo park wolf chillwave vegan retro cornhole whatever schlitz church-key. Keffiyeh letterpress celiac gluten-free pop-up lyft subway tile activated charcoal marfa blue bottle unicorn hella. IPhone leggings shaman aesthetic street art ennui artisan subway tile umami succulents chartreuse fam air plant wayfarers glossier. Vaporware vexillologist artisan, coloring book palo santo bespoke jean shorts occupy succulents hella adaptogen bitters hammock beard. PBR&B meggings scenester, schlitz readymade forage marfa leggings hoodie williamsburg pop-up echo park knausgaard cardigan intelligentsia. Adaptogen cronut wayfarers dreamcatcher keytar.

          Dummy text? More like dummy thicc text, amirite?
        </p>
      </div>
      <Image />
    </GridContainer>
  </Layout>
)

export default About;