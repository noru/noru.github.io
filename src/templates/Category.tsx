import React from 'react'
import Helmet from 'react-helmet'
import { Layout, Wrapper, Header, Subline, Article, SectionTitle, Content } from '../components'
import config from '../../config/SiteConfig'
import kebabCase from 'lodash/kebabCase'
import PageProps from '../models/PageProps'
import { Link } from '../components/Link'

export default class Category extends React.PureComponent<PageProps> {
  render() {
    const { posts, categoryName } = this.props.pageContext
    const totalCount = posts ? posts.length : 0
    const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${categoryName}"`

    return (
      <Layout>
        <Helmet title={`${categoryName} | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
          <SectionTitle>Category &ndash; {categoryName}</SectionTitle>
          <Subline sectionTitle light={true}>
            {subline} (See <Link to="/categories">all categories</Link>)
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
