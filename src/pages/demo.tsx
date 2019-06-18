import * as React from 'react'
import { Content, Header, Layout, Wrapper, DemoWrapper } from '../components'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import { Link } from 'gatsby'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 12px;
  grid-row-gap: 48px;
  padding: 24px 0 48px;
  align-items: center;

  @media (max-width: 1750px) {
    flex-direction: column;
    grid-template-columns: auto auto;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    grid-template-columns: auto;
  }
`

export default class NotFoundPage extends React.Component<any> {
  render() {
    return (
      <Layout>
        <Wrapper>
          <Helmet title={`Demo Lounge | ${config.siteTitle}`} />
          <Header>
            <Link to="/">Things I've been working on</Link>
          </Header>
          <Content>
            <GridWrapper>
              <DemoWrapper src="//blog.xiuz.hu/apm-dashboard" width={450} />
              <DemoWrapper src="//blog.xiuz.hu/apm-dashboard#/dashboard2" width={450} />
              <DemoWrapper src="//blog.xiuz.hu/apm-dashboard#/demo2" width={450} />
              <DemoWrapper src="//blog.xiuz.hu/ct-monitor" width={450} />
              <DemoWrapper src="//blog.xiuz.hu/dew-report#/FailureAnalysis" width={450} />
              <DemoWrapper src="//blog.xiuz.hu/dew-report#/ProcessAnalysis" width={450} />
              <DemoWrapper isImage src="/assets/demo/appstore.png" link="https://apps.autodesk.com" width={450} />
            </GridWrapper>
          </Content>
        </Wrapper>
      </Layout>
    )
  }
}
