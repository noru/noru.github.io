import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper, Button as Btn, Article } from '../components'
import FA from 'react-fontawesome'
import PageProps from '../models/PageProps'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import { media } from '../utils/media'
import rgba from 'polished/lib/color/rgba'
import darken from 'polished/lib/color/darken'
import lighten from 'polished/lib/color/lighten'

const Button = styled(Btn)`
  padding: 0.5em 1em;
  justify-content: center;
  min-width: 7em;
`

const SiteLogo = styled.img`
  width: 150px;
  border-radius: 43px;
  filter: drop-shadow(2px 10px 14px black);
`

const Homepage = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }
`

const GridRow: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) =>
    props.background
      ? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, props.theme.colors.primary), 0.7)},
      ${rgba(lighten(0.1, props.theme.colors.grey.dark), 0.9)}), url(/assets/bg/5.jpg) no-repeat`
      : null};
  background-size: cover;
  padding: 2rem 4rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
    @media ${media.phone} {
      font-size: 2rem;
    }
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`

const HomepageContent: any = styled.div`
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};

  button {
    @media ${media.phone} {
      font-size: 1rem;
      margin-bottom: 1rem;
      min-width: 12em;
    }
  }
`

export default class IndexPage extends React.Component<PageProps> {
  render() {
    const { data } = this.props
    const { edges, totalCount } = data.allMarkdownRemark

    return (
      <Layout>
        <Wrapper fullWidth={true}>
          <Helmet title={`Homepage | ${config.siteTitle}`} />
          <Homepage>
            <GridRow background>
              <HomepageContent center>
                <SiteLogo src={config.siteLogo} />
                <h1>
                  <a style={{ color: 'white' }}>
                    Hi. I am <br />
                    Drew Xiu
                  </a>
                </h1>
                <p>{config.aboutMe}</p>
                <Link to="/contact">
                  <Button big>
                    <FA name="phone" />
                    <span>Contact</span>
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button big>
                    <FA name="rss" />
                    <span>Blog</span>
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button big>
                    <FA name="hand-o-up" />
                    <span>Demo</span>
                  </Button>
                </Link>
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent>
                <h2>Latest Blog</h2>
                <br />
                {edges.map(post => (
                  <Article
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.excerpt}
                    timeToRead={post.node.timeToRead}
                    slug={post.node.fields.slug}
                    category={post.node.frontmatter.category}
                    key={post.node.fields.slug}
                  />
                ))}
                <p className={'textRight'}>
                  <Link to={'/blog'}>All articles ({totalCount})</Link>
                </p>
              </HomepageContent>
            </GridRow>
          </Homepage>
        </Wrapper>
      </Layout>
    )
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
      filter: { frontmatter: { category: { ne: "resume" } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`
