import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Layout, Wrapper, Header, Subline, SEO, PrevNext, SectionTitle, Content } from '../components'
import config from '../../config/SiteConfig'
import '../utils/prismjs-theme.css'
import PathContext from '../models/PathContext'
import Post from '../models/Post'
import { ImageViewer } from './ImageViewer'
import { Link } from '../components/Link'

const PostContent = styled.div`
  margin-top: 4rem;
`

interface Props {
  data: {
    markdownRemark: Post,
  }
  pageContext: PathContext
}

export default class PostPage extends React.PureComponent<Props> {
  contentRef: HTMLElement | null = null

  state = {
    imgSrc: undefined,
  }

  attachImageViewer() {
    if (this.contentRef) {
      let imgs = this.contentRef!.getElementsByTagName('img') || []
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i]
        let hash = img.src.split('#')[1]
        if (hash && hash.includes('nopreview')) {
          continue
        }
        img.onclick = () => this.setState({ imgSrc: img.src })
        img.width = 400
        img.style.cursor = 'pointer'
        img.style.display = 'block'
        img.style.margin = 'auto'
      }
      let videos = this.contentRef!.getElementsByTagName('video') || []
      for (const v of videos) {
        v.style.width = '100%'
        v.style.display = 'block'
        v.style.margin = 'auto'
      }

    }
  }
  componentDidUpdate() {
    this.attachImageViewer()
  }
  componentDidMount() {
    this.attachImageViewer()
  }

  render() {
    const { prev, next } = this.props.pageContext
    const post = this.props.data.markdownRemark
    let { imgSrc } = this.state
    return (
      <Layout>
        {post ? (
          <>
            <SEO postPath={post.fields.slug} postNode={post} postSEO />
            <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
            <Header banner={post.frontmatter.banner}>
              <Link to="/">{config.siteTitle}</Link>
              <SectionTitle>{post.frontmatter.title}</SectionTitle>
              <Subline light={true}>
                {post.frontmatter.date} &mdash; {post.timeToRead} min read &mdash; In{' '}
                <Link to={`/categories/${kebabCase(post.frontmatter.category)}`}>{post.frontmatter.category}</Link>
              </Subline>
            </Header>
            <Wrapper>
              <Content>
                <PostContent dangerouslySetInnerHTML={{ __html: post.html }} ref={ref => (this.contentRef = ref)} />
                <ImageViewer src={imgSrc} onClose={() => this.setState({ imgSrc: undefined })} />
                {post.frontmatter.tags ? (
                  <Subline>
                    Tags: &#160;
                    {post.frontmatter.tags.map((tag, i) => (
                      <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                        <strong>{tag}</strong> {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                      </Link>
                    ))}
                  </Subline>
                ) : null}
                <PrevNext prev={prev} next={next} />
              </Content>
            </Wrapper>
          </>
        ) : null}
      </Layout>
    )
  }
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
        tags
        banner
      }
      timeToRead
    }
  }
`
