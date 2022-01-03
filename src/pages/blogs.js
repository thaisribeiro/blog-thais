import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Pills from '../components/pills'
import SEO from '../components/seo'
import { formatPostDate, formatReadingTime } from '../utils/dates'
import Section from '../components/section'
import Footer from '../components/footer'
import HeaderBlog from '../components/header-blog'

export default function Blog() {
  const { allMdx, avatar } = useStaticQuery(
    graphql`
    query BlogsIndex {
      avatar: file(absolutePath: {regex: "/fundo-blog.jpg/"}) {
        childImageSharp {
          fixed(width: 1000, height: 1000, quality: 90) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      allMdx(filter: {fields: {published: {eq: true}}}, sort: {fields: [frontmatter___date], order: DESC}) {
        nodes {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            description
            categories
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }`
  )


  return (
    <Layout>
      <SEO />
      <HeaderBlog image={avatar.childImageSharp.fixed.src} mensagemtopo="Blog" link="/" />
      <div className='blog'>

        {

          allMdx.nodes.map(post => (
            <Section key={post.fields.slug} name={post.fields.slug} centered>
              <Link to={post.fields.slug} className="blog-listing">

                <h2>&#9733; {post.frontmatter.title}</h2>
                <p>
                  {formatPostDate(post.frontmatter.date)}
                  {` • ${formatReadingTime(post.timeToRead)}`}
                </p>
                <Pills items={post.frontmatter.categories} />
                <p>{post.frontmatter.description}</p>
              </Link>
            </Section>
          ))
        }
      </div>
      <div className="item-footer">
        <Footer />
      </div>

    </Layout >
  )
}

