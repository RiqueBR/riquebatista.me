import React from 'react';
import {Link} from 'gatsby'
import useContent from '../hooks/useContent'

import Layout from '../components/layout'

const Garden = () => {
  const notes = useContent()
  
  return (

    <Layout>
      <h1>Digital Garden</h1>

      A space for notes, thoughts, collections and explorations without the pressure of a publish button
      <ul>
      {notes.map(note => (
        <li key={note.slug}>
          <p>{note.title}</p>
          <Link to={note.slug}>Read more</Link>

        </li>
      ))}

      </ul>
    </Layout>
  )
}

export default Garden