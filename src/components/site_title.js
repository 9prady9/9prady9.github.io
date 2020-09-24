import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Title() {
  const data = useStaticQuery(
    graphql`
      query {
            site {
              siteMetadata {
                title
          }
        }
      }
    `
  )
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href="https://pradeepgarigipati.com"/>
    </Helmet>
    </>
  )
}