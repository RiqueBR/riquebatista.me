
import React from 'react'
import { css } from 'styled-components'
import { 
  AiOutlineTwitter, 
  AiOutlineGithub,
  AiOutlineLinkedin
} from 'react-icons/ai'

export const Twitter = ({ url = "https://twitter.com/rique_p_batista" }) => {
  
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



export const GitHub = ({ url = "https://github.com/RiqueBR" }) => {
  
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

export const LinkedIn = ({ url = "https://www.linkedin.com/in/henrique-batista/" }) => {
  
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