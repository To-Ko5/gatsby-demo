import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layouts from '../components/Layouts'
import Seo from '../components/Seo'

export default function home({ data }) {
  return (
    <Layouts>
      <Seo />
      <section className="hero">
        <Img fluid={data.pic1.childImageSharp.fluid} />
        <Img fluid={data.pic2.childImageSharp.fluid} />
        <Img fluid={data.pic3.childImageSharp.fluid} />
        <Img fluid={data.pic4.childImageSharp.fluid} />
      </section>
    </Layouts>
  )
}

export const query = graphql`
  query MyQuery {
    pic1: file(relativePath: { eq: "pic1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1980) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pic2: file(relativePath: { eq: "pic2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1980) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pic3: file(relativePath: { eq: "pic3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1980) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pic4: file(relativePath: { eq: "pic4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1980) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
