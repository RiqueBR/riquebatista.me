import React from 'react';
import styled, {css} from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const H1 = styled.h1`
  margin-top: 4rem;
`

const H2 = styled.h2`
font-weight: 500;
line-height: 1.25;
`

const Subheader = styled.h2`
font-weight: 300;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2em;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
  }
`

const Paragraph = styled.p`
  line-height: 1.6rem;
`

const About = () => (
  <Layout>
    <H1>Henrique Batista</H1>
    <Subheader>
      Software engineer, passionate about creating digital solutions, life long learner
    </Subheader>
    <GridContainer>
        <Paragraph>
          I'm baby shoreditch single-origin coffee ethical leggings scenester fam. Sartorial unicorn humblebrag, man bun cornhole knausgaard pok pok street art raw denim tousled wolf intelligentsia next level before they sold out raclette. Pork belly tumblr kitsch, mustache listicle vinyl artisan. Godard whatever shaman biodiesel farm-to-table.

          DIY ugh meh, yr cloud bread bicycle rights raw denim hammock. Mlkshk raclette echo park wolf chillwave vegan retro cornhole whatever schlitz church-key. Keffiyeh letterpress celiac gluten-free pop-up lyft subway tile activated charcoal marfa blue bottle unicorn hella. IPhone leggings shaman aesthetic street art ennui artisan subway tile umami succulents chartreuse fam air plant wayfarers glossier. Vaporware vexillologist artisan, coloring book palo santo bespoke jean shorts occupy succulents hella adaptogen bitters hammock beard. PBR&B meggings scenester, schlitz readymade forage marfa leggings hoodie williamsburg pop-up echo park knausgaard cardigan intelligentsia. Adaptogen cronut wayfarers dreamcatcher keytar.

          Dummy text? More like dummy thicc text, amirite?
        </Paragraph>
      <StaticImage
        src="../images/timmy_turner.png" 
        alt="Picture of Henrique"
        placeholder="blurred"
        layout="constrained"
        width={340}
        height={390}
      />
    </GridContainer>
      <H2>Here's what I bring to the table</H2>
      <Paragraph>
        DIY ugh meh, yr cloud bread bicycle rights raw denim hammock. Mlkshk raclette echo park wolf chillwave vegan retro cornhole whatever schlitz church-key. Keffiyeh I'm baby shoreditch single-origin coffee ethical leggings scenester fam. Sartorial unicorn humblebrag, man bun cornhole knausgaard pok pok street art raw denim tousled wolf intelligentsia next level before they sold out raclette. Pork belly tumblr kitsch, mustache listicle vinyl artisan. Godard whatever shaman biodiesel farm-to-table.
      </Paragraph>
      <H2>Contact me!</H2>
      <Paragraph>
        Have you found something that caught your eye? Or just wanting to have a wee chat? Contact me by sending an email to email@email.com
      </Paragraph>
  </Layout>
)

export default About;