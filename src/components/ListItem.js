import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { bpMaxSM } from '../lib/breakpoints';

// This component could be used for both /notes or /projects

const NoteWrapper = styled.li`
  list-style: none;
  padding: 3rem 0;
  border-bottom: 2px solid #f1f4f8;

  &:last-child {
    border-bottom: none;
  }

  ${bpMaxSM}{
    padding: 2rem 0;
    border-bottom: none;
  }
`

const Title = styled.h2`
  margin: 0;
  font-size: 1.55rem;
  padding-bottom: .5rem;

  ${bpMaxSM}{
    font-size: 1.3rem
  }
`

const TimeStamp = styled.time`
  font-size: 1rem;
  display: block;
  margin-bottom: 1rem;
  
  ${bpMaxSM}{
    font-size: .9rem
  }
`

const Paragraph = styled.p`
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.5;

    ${bpMaxSM}{
    font-size: 1.1rem
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
      <TimeStamp>January 01, 2021</TimeStamp>

      <Paragraph>{props.excerpt}</Paragraph>
      </LinkWrapper>
    </NoteWrapper>
  )
}

export default ListItem