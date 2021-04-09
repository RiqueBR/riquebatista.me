import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CardTitle = styled.h3`
  margin: 1rem 1rem;
`

const Paragraph = styled.p`
  margin: 1rem 1rem;
`
const ReferenceLink = styled(props => <Link {...props} />)`
  margin: 1rem 1rem;
`

const Card = props => {
  const image = getImage(props.image)


  return (
    // smoll css card 
    // TODO: Size of cards must be turned into props, we need the flexibility
    <div css={css`
      width: 80%;
      height: 80%;
      --img-ratio: 3 / 2;
      display: flex;
      flex-direction: column;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
      border-radius: 0.5rem;
      transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        .imgWrap {
          transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        }
          &:hover {
            transform: scale(1.015);
            h4 {
              color: #f84;
            }
            .imgWrap {
              box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.15);
            }
          }
    `}>
    <GatsbyImage
      image={image}
      alt={props.title}
      class="imgWrap" />
      <CardTitle>{props.title}</CardTitle>
      <Paragraph>Some text here for context bla bla bla</Paragraph>
      <ReferenceLink
        to={`/${props.slug}`}
        aria-label={`View ${props.title}`}
      >
        Find out more
      </ReferenceLink>
    </div>
  );
}

export default Card;