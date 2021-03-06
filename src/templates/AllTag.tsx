import React from 'react'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'
import { Layout, Wrapper, Header, SectionTitle, Content, Title } from '../components'

import config from '../../config/SiteConfig'
import PageProps from '../models/PageProps'
import { Link } from '../components/Link'

export default class AllTagTemplate extends React.PureComponent<PageProps> {
  render() {
    const { tags } = this.props.pageContext
    if (tags) {
      return (
        <Layout>
          <Helmet title={`Tags | ${config.siteTitle}`} />
          <Header>
            <Link to="/">{config.siteTitle}</Link>
            <SectionTitle>Tags</SectionTitle>
          </Header>
          <Wrapper>
            <Content>
              {tags.map((tag, index: number) => (
                <Title key={index}>
                  <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                </Title>
              ))}
            </Content>
          </Wrapper>
        </Layout>
      )
    }
  }
}
