import * as React from 'react'
import { Content, Header, Layout, Wrapper, DemoWrapper } from '../components'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import { Link } from 'gatsby'

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
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
            <FlexWrapper>
              <DemoWrapper src="/assets/demo/apm-dashboard/index.html" width={450}/>
              <DemoWrapper src="/assets/demo/apm-dashboard/index.html#/dashboard2" width={450}/>
              <DemoWrapper src="/assets/demo/apm-dashboard/index.html#/demo2" width={450}/>
              <DemoWrapper src="/assets/demo/ruijin/index.html" width={450}/>
              <DemoWrapper src="/assets/demo/dew/index.html#/FailureAnalysis" width={450}/>
              <DemoWrapper src="/assets/demo/dew/index.html#/ProcessAnalysis" width={450}/>
              <DemoWrapper isImage src="/assets/demo/appstore.png" link="https://apps.autodesk.com" width={450}/>
            </FlexWrapper>
          </Content>
        </Wrapper>
      </Layout>
    )
  }
}
