import React from 'react';
import useContent from '../hooks/useContent'

import Layout from '../components/layout'
import ListItem from '../components/ListItem'

const Notes = () => {
  const notes = useContent()
  
  return (

    <Layout>
      <h1>Digital Garden</h1>

      A space for notes, thoughts, collections and explorations without the pressure of a publish button
      <ul>
      {notes.map(note => (
        <ListItem {...note} key={note.slug}/>
        
      ))}

      </ul>
    </Layout>
  )
}

export default Notes;