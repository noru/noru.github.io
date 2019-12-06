import * as React from 'react'
import { Content, Header, Layout, Wrapper, DemoWrapper } from '../components'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import useMedia from 'react-use/esm/useMedia'
import { Link } from '../components/Link'

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
const Title = styled.h4`
  text-align: center;
  margin-bottom: 0;
  padding: 2em 0 1em;
`

export default function DemoPage() {

  const isPhone = useMedia('(max-width:480px)')

  let width = isPhone ? 280 : 450

  return (
    <Layout>
      <Wrapper>
        <Helmet title={`Demo Lounge | ${config.siteTitle}`} />
        <Header>
          <Link to="/">Drew's Workbench</Link>
        </Header>
        <Content>
          <Title style={{ textAlign: 'center' }}>Things I've been working on</Title>
          <GridWrapper>
            <DemoWrapper src="//blog.xiuz.hu/visual-effects" width={width} />
            <DemoWrapper src="//blog.xiuz.hu/3-match/dist/index.html" width={width} />
            <DemoWrapper src="//blog.xiuz.hu/apm-dashboard" width={width} />
            <DemoWrapper src="//blog.xiuz.hu/apm-dashboard#/dashboard2" width={width} />
            <DemoWrapper src="//blog.xiuz.hu/apm-dashboard#/demo2" width={width} />
            <DemoWrapper src="//blog.xiuz.hu/ct-monitor" width={width} />
            <DemoWrapper src="//blog.xiuz.hu/dew-report#/FailureAnalysis" width={width} />
            <DemoWrapper src="//blog.xiuz.hu/dew-report#/ProcessAnalysis" width={width} />
            <DemoWrapper isImage src="/assets/demo/appstore.png" link="https://apps.autodesk.com" width={width} />
          </GridWrapper>
        </Content>
      </Wrapper>
    </Layout>
  )
}
