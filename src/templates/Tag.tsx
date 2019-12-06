import React from 'react'
import PageProps from '../models/PageProps'
import { Article, Content, Header, Layout, SectionTitle, Subline, Wrapper } from '../components'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import kebabCase from 'lodash/kebabCase'
import { Link } from '../components/Link'

export default class TagTemplate extends React.PureComponent<PageProps> {
  render() {
    const { posts, tagName } = this.props.pathContext
    const totalCount = posts ? posts.length : 0
    const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tagName}"`

    return (
      <Layout>
        <Helmet title={`${'Tags'} | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
          <SectionTitle>Tag &ndash; {tagName}</SectionTitle>
          <Subline sectionTitle light={true}>
            {subline} (See <Link to="/tags">all tags</Link>)
          </Subline>
        </Header>
        <Wrapper>
          <Content>
            {posts
              ? posts.map((post: any, index) => (
                  <Article
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    excerpt={post.excerpt}
                    slug={kebabCase(post.frontmatter.date)}
                    timeToRead={post.timeToRead}
                    category={post.frontmatter.category}
                    key={index}
                  />
                ))
              : null}
          </Content>
        </Wrapper>
      </Layout>
    )
  }
}
