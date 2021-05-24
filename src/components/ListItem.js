import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { bpMinLG, bpMaxSM } from '../lib/breakpoints';

// This component could be used for both /notes or /projects

const NoteWrapper = styled.li`
  list-style: none;
  padding: 1rem 0;
  
  ${bpMinLG} {
    max-width: 50rem;
    padding: 3rem 0;
  }
`

const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.25rem;

  ${bpMinLG} {
    margin: 0;
    font-size: 1.55rem;
    padding-bottom: .5rem;
  }

`

const TimeStamp = styled.time`

font-size: .9rem;
display: block;
margin-top: 0.25rem;

${bpMinLG} {
    font-size: 1rem;
  }

`

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-top: 1rem;

  ${bpMinLG}{
    line-height: 1.5;
    font-size: 1.3rem;
    margin-top: 1.5rem;
  }


`

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #343a40;
`



const ListItem = ({...props}) => {
  return (
    <NoteWrapper>
      <LinkWrapper to={`../${props.slug}`}>
      <Title>{props.title}</Title>
        <TimeStamp><i>January 01, 2021</i></TimeStamp>

      <Paragraph>{props.excerpt}</Paragraph>
      </LinkWrapper>
    </NoteWrapper>
  )
}

export default ListItem