import React from 'react';
import styled from 'styled-components'

import useContent from '../hooks/useContent'

import Layout from '../components/layout'
import ListItem from '../components/ListItem'
import { bpMaxSM } from '../lib/breakpoints';

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;

  ${bpMaxSM}{
    font-size: 1.5rem
  }
`
const SubTitle = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0;

  ${bpMaxSM}{
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.6;
  }
`

const List = styled.ul`
  padding: 0;
`

const Notes = () => {
  const notes = useContent()
  
  return (

    <Layout>
      <Title>Digital Garden</Title>

      <SubTitle>
        A space for notes, thoughts, collections and explorations without the pressure of a publish button.
      </SubTitle>
      
      <List>
      {notes.map(note => (
        <ListItem {...note} key={note.slug}/>
        
      ))}

      </List>
    </Layout>
  )
}

export default Notes;