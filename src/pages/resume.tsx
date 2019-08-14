import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, GHRibbon } from '../components'
import '../utils/prismjs-theme.css'
import PathContext from '../models/PathContext'
import Post from '../models/Post'
import { parseQuery } from '@drewxiu/utils'

const Corner = styled.div`
  padding: 12px 0 0 2em;
  h1 {
    font-size: 18px;
    margin-bottom: 6px;

    &:first-of-type {
      font-size: 24px;
    }
  }

  > a {
    font-size: 15px;
    display: inline-block;
    margin-bottom: 0.5em;
  }
`

const Content = styled.div`
  margin: auto;
  max-width: 1024px;
  min-width: 400px;
  padding: 60px 1em;
`

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<{ node: Post }>,
    },
  }
  pathContext: PathContext
}

export default class ResumePage extends React.PureComponent<Props> {
  render() {
    const {
      location: { search },
      data: { allMarkdownRemark },
    } = this.props
    let { t } = parseQuery(search)
    const resume = allMarkdownRemark.edges.filter(e => e.node.frontmatter.tags.includes(t))[0]

    if (!resume) {
      typeof window !== 'undefined' && (window.location.href = '/')
      return null
    }

    return (
      <Layout>
        <GHRibbon href="https://github.com/noru" />
        <Corner>
          <Link to="/">👈 Back to my blog</Link>
          <h1>修筑</h1>
          <h1>Frontend / Fullstack</h1>
          <h1>
            <a href="mailto:drew.xiu@gmail.com">drew.xiu@gmail.com</a>
          </h1>
          <h1>
            <a href="tel:+86-15601654544">+86-15601654544</a>
          </h1>
        </Corner>
        <Content dangerouslySetInnerHTML={{ __html: resume.node.html }} />
      </Layout>
    )
  }
}

export const postQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10000
      filter: { frontmatter: { category: { eq: "resume" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          fields {
            slug
          }
          frontmatter {
            date
            title
            category
            tags
            banner
          }
          timeToRead
        }
      }
      totalCount
    }
  }
`
