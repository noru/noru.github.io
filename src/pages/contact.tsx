import React from 'react'
import Helmet from 'react-helmet'
import FA from 'react-fontawesome'
import { Layout, Wrapper, Header, Button, Content, SectionTitle } from '../components'
import styled from 'styled-components'
import config from '../../config/SiteConfig'
import PageProps from '../models/PageProps'
import { Link } from '../components/Link'

const Links = styled.div`
  padding: 2em 1em;
  text-align: center;
  > a {
    display: inline-block;
    margin-bottom: 1.5em;
  }
`

export default class ContactPage extends React.Component<PageProps> {
  render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
          <SectionTitle uppercase={true}>Contact</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <Links>
              <a href="https://github.com/noru">
                <Button big>
                  <FA name="github" />
                  <span>Github</span>
                </Button>
              </a>
              <a href="mailto:drew.xiu@gmail.com">
                <Button big>
                  <FA name="envelope-o" />
                  <span>Gmail</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/drew-xiu-83207769/">
                <Button big>
                  <FA name="linkedin-square" />
                  <span>LinkedIn</span>
                </Button>
              </a>
            </Links>
          </Content>
        </Wrapper>
      </Layout>
    )
  }
}
