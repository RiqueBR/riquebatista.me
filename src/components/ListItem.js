import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// This component could be used for both /notes or /projects

const NoteWrapper = styled.li`
  list-style: none;
  padding: 3rem 0;
  border-bottom: 2px solid #f1f4f8;
`

const Title = styled.h2`
  margin: 0;
  font-size: 1.55rem;
  padding-bottom: .5rem;
`

const TimeStamp = styled.time`
  font-size: 1rem;
  display: block;
  margin-bottom: 1rem;
`

const Paragraph = styled.p`
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.5;
`

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #343a40;
`



const ListItem = ({...props}) => {
  console.log(props);
  return (
    <NoteWrapper>
      <LinkWrapper to={`../${props.slug}`}>
      <Title>{props.title}</Title>
      <TimeStamp>January 01, 2021</TimeStamp>

      <Paragraph>
        Owen, he can't stay here forever. Most of his friends have gone. It means so much to him. I'll make it up to him next year. I promise. Luke's just not a farmer, Owen. He has too much of his father in him. That's what I'm afraid of.
      </Paragraph>
      </LinkWrapper>
    </NoteWrapper>
  )
}

export default ListItem