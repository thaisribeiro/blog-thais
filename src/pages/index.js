import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import MainBio from '../components/main-bio'
import Footer from '../components/footer'
import MenuHeader from '../components/menu'
import ChatBot from '../components/chatbot'

import './blog-listing.css'

const BlogIndexPage = () => (
  <Layout>
    <SEO />
    <Section name="main-bio">
      <div className="overlay-home"></div>
      <div className="item-home-menu">
        <MenuHeader />
      </div>
      <div className="item-home">
        <MainBio />
      </div>
      <div className="avatar-container-new"></div>
      {/* <div className="item-home">
        <ChatBot/>
      </div> */}
    </Section>
    <div className="item-footer">
      <Footer />
    </div>
  </Layout>
)

export default BlogIndexPage

export const query = graphql`
  query BlogIndex {
    allMdx(
      filter: { fields: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
  }
`
