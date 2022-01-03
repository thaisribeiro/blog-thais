import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import './main-bio.css'

function Bio() {
  const { site, avatar } = useStaticQuery(
    graphql`
      query MainBioQuery {
        avatar: file(absolutePath: { regex: "/thais-blog.jpg/" }) {
          childImageSharp {
            fixed(width: 250, height: 250, quality: 90) {
              base64
              width
              height
              src
              srcSet
            }
          }
        }
        site {
          siteMetadata {
            author
            bio
            social {
              twitter
              github
              facebook
              medium
              linkedin
              instagram
            }
          }
        }
      }
    `
  )

  const { author } = site.siteMetadata

  return (
    <div className="main-bio-container">
      <div className="overlay"></div>
      <Image
        className="avatar"
        fixed={avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: 0,
          minWidth: 250,
          minHeight: 250,
          maxWidth: 250,
          maxHeight: 250,
          borderRadius: '100%',
          border: '8px solid #0c0a0a26',
          marginBottom: '30px'
        }}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <div className="main-bio">
        <h1 style={{ marginBottom: '0.875rem' }}>{author}</h1>
        <p>Engenheira de Software, etc.</p>
      </div>
    </div>
  )
}

export default Bio
