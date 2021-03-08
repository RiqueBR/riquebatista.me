
import React from 'react'
import { css } from 'styled-components'
import { 
  AiOutlineTwitter, 
  AiOutlineGithub,
  AiOutlineLinkedin
} from 'react-icons/Ai'

export const Twitter = ({ url = "" }) => {
  
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      css={css`
        color: #000;
        margin-left: 10px;
        font-size: 2rem;
        :hover {
          color: #0ac;
        }
      `}
      aria-label="Henrique's twitter profile"
    >
      <AiOutlineTwitter />
    </a>
  )
}



export const GitHub = ({ url = "" }) => {
  
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      css={css`
        margin-left: 10px;
        color: #000;
        font-size: 2rem;
        :hover {
          color: #0ac;
        }
      `}
      aria-label="Henrique's GitHub profile"
    >
      <AiOutlineGithub />
    </a>
  )
}

export const LinkedIn = ({ url = "" }) => {
  
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      css={css`
        margin-left: 10px;
        color: #000;
        font-size: 2rem;
        :hover {
          color: #0ac;
        }
      `}
      aria-label="Henrique's LinkedIn profile"
    >
      <AiOutlineLinkedin />
    </a>
  )
}