import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          lang
          title
        }
      }
    }
  `)

  const title = props.pageTitle
    ? `${props.pageTitle}|${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title
  const description = props.pageDesc || data.site.siteMetadata.description
  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  )
}
