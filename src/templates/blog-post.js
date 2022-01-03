import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/seo'

import Bio from '../components/bio'
import Embed from '../components/embed'
import HeaderBlog from '../components/header-blog'
import Footer from '../components/footer'
import { formatPostDate, formatReadingTime } from '../utils/dates'

import './blog-post.css'
import logo from './fundo-blog.jpg'

export default function PageTemplate({ data: { mdx, site }, pageContext }) {
  const { previous, next } = pageContext

  return (
    <div>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        canonicalLink={mdx.frontmatter.canonical_link}
        keywords={mdx.frontmatter.categories || []}
        meta={[
          {
            name: 'twitter:label1',
            content: 'Reading time',
          },
          {
            name: 'twitter:data1',
            content: `${mdx.timeToRead} min read`,
          },
        ]}
      />
      <HeaderBlog image={logo} mensagemtopo={mdx.frontmatter.title} link="/blogs" />
      <section className="center blog">
        <article className="container small">
          <p style={{
            fontSize: '15px',
            textAlign: 'center'
          }}>
            <strong>• Publicado em:</strong> {formatPostDate(mdx.frontmatter.date)}
            {` | ${formatReadingTime(mdx.timeToRead)}`}
          </p>
          <MDXRenderer scope={{ Embed }}>{mdx.body}</MDXRenderer>
        </article>
        <footer className="container small">
          <hr
            style={{
              margin: `24px 0`,
            }}
          />
          <Bio />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </footer>
      </section>
      <div className="item-footer">
        <Footer />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
        githubUrl
      }
    }
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        description
        categories
        date(formatString: "MMMM DD, YYYY")
        canonical_link
      }
      body
    }
  }
`
