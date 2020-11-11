import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layouts from '../components/Layouts'
import Seo from '../components/Seo'

export default function about({ data }) {
  return (
    <Layouts>
      <Seo pageTitle="about" pageDesc="about-page" />
      <p>about</p>
      <figure>
        <Img fluid={data.pic4.childImageSharp.fluid}></Img>
      </figure>
    </Layouts>
  )
}

export const query = graphql`
  query MyQuery2 {
    pic4: file(relativePath: { eq: "pic4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1980) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
