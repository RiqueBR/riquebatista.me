import React from 'react'
import { Link } from 'gatsby'
import { css } from 'styled-components'
import Image from "gatsby-image"

const Card = props => {


  return (

    <Link
      to={`/${props.slug}`}
      aria-label={`View ${props.title}`}
      >
      <div
        key={props.id}
        css={css`
        margin: 0 auto;
        margin-bottom: 1em;
        max-width: 450px;
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
        `}
        >
        <div className="imgWrap">
          <Image
            style={{
              borderRadius: '4px',
            }}
            fluid={props.image.sharp.fluid}
            alt={props.title}
            />
        </div>
        <h4
          css={css`
          margin-top: 0.8em;
          
          text-align: center;
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
          `}
          >
          {props.title}
        </h4>
      </div>
    </Link>
  )
}

export default Card;