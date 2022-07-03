import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

// TODO: Needs to take a prop for image title and dimensions (e.g. width and height)
// TODO: Add media queries


const Image = ({...props}) => {



  return <GatsbyImage
    alt={props.alt} 
    image={props.src}
    placeholder={props.placeholder}
    layout={props.layout}
    width={props.width}
    height={props.height} />;
}

export default Image
