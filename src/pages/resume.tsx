import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, GHRibbon } from '../components'
import '../utils/prismjs-theme.css'
import PathContext from '../models/PathContext'
import Post from '../models/Post'
import { parseQuery } from '@drewxiu/utils'
import Helmet from 'react-helmet'
import { Link } from '../components/Link'

const Wrapper = styled.div`
  max-width: 1052px;
  margin: auto;
`

const Corner = styled.div`
  padding: 12px 0 0 2em;
  > h1 {
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
    cursor: pointer;
  }
`

const Content = styled.div`
  margin: auto;
  max-width: 1024px;
  min-width: 400px;
  padding: 60px 1em;
`

const Download = styled.a`
  padding: .5em 1.5em;
  color: white;
  background: #98c0e4;
  border: none;
  border-radius: 861112px;
  margin-top: .5em;
  margin-right: .5em;
  h1 {
    font-size: 18px;
    margin-bottom: 0;
  }

`

const Modal = styled.div`
  position:fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  z-index:999999;
  background:rgba(0,0,0,0.6);

  > div {
    position:absolute;
    width:100%;
    max-width: 600px;
    margin:auto;
    top:20%;
    left:0;
    right:0;
    padding: 2rem;
    text-align:center;
    border-radius:.5rem;
    background:#494f5c;

    > a {
      padding: .5em 1.5em;
      border-radius: 861112px;
      border: none;
      font-size: 1.5rem;
      background: #98c0e4;
      margin-bottom: 1em;
      color: white;
      display: inline-block;
      margin-bottom: 1em;
    }
  }
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

  state = {
    showModal: false,
  }

  render() {
    let { showModal } = this.state
    const {
      location: { search },
      data: { allMarkdownRemark },
    } = this.props
    let { utm_source, tag } = parseQuery(search)
    if (!utm_source) {
      typeof window !== 'undefined' && (window.location.href = '/')
      return null
    }
    let edges = allMarkdownRemark.edges
    const resume = edges.filter(e => e.node.frontmatter.tags.includes(tag))[0] || edges[0]

    return (
      <Layout>
        <Wrapper>
          <Helmet title={`CV | Drew.Xiu | Developer`} />
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
            <Download onClick={() => this.setState({ showModal: true })}>
              <h1><i className="fa fa-file-pdf-o"/>PDF</h1>
            </Download>
            <Download onClick={() =>
              alert('Please drop me a message with an introduction and a template.\n' +
              'I\'ll send it to you with pleasure.')}
            >
              <h1><i className="fa fa-file-word-o"/>DOC</h1>
            </Download>
            { utm_source === 'me' && <Download onClick={() => {
              let source = prompt('umt_source')
              let medium = prompt('umt_medium')
              let campaign = prompt('umt_campaign')
              // tslint:disable-next-line:max-line-length
              let url = `https://blog.xiuz.hu/resume/?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`
              setTimeout(() => {
                document.body.focus()
                navigator.clipboard.writeText(url).then(() => alert('Copied. \n' + url))
              }, 50)
            }
            }
            ><h1><i className="fa fa-share-alt-square"/>Share</h1>
            </Download>}
            { showModal && <Modal>
              <div>
                <a onClick={() => { this.setState({showModal: false }, () => window.print())}}>
                  <span className="fa fa-hand-o-up"></span><span>Click Here</span>
                </a>
                <h3>and one more step...</h3>
                <img src="/assets/resume/print-cfg.png" alt=""/>
              </div>
            </Modal>}
          </Corner>
          <Content dangerouslySetInnerHTML={{ __html: resume.node.html }} />
        </Wrapper>
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
