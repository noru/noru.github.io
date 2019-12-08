import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../../config/Theme'
import { media } from '../utils/media'
import split from 'lodash/split'
import './layout.scss'
import './main.scss'

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.grey.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.link};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  @keyframes hoverme {
    0%, 100% { color: #7ccdea; }
    16%      { color: #0074D9; }
    32%      { color: #2ECC40; }
    48%      { color: #FFDC00; }
    64%      { color: #B10DC9; }
    80%      { color: #FF4136; }
  }
  a:hover {
    animation: hoverme 3s infinite;
  }
  h1, h2, h3, h4 {
    color: white;
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  .textRight {
    text-align:right;
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
`

export class Layout extends React.PureComponent<{}> {
  componentDidMount() {
    let scripts = document.querySelectorAll('[data-inline-script]')
    scripts.forEach(function forEachScript(element) {
      const script = element.innerHTML
      try {
        window.eval(script)
      } catch (e) {
        console.error(e)
        console.info('Script with errors:\n', script)
      }
    })
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              buildTime(formatString: "DD.MM.YYYY")
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <GlobalStyle />
              {children}
              <Footer>
                {/* tslint:disable-next-line:max-line-length */}
                <span>
                  &copy; {split(data.site.buildTime, '.')[2]} by Drew Xiu. All rights <s>reserved</s> for sale.
                </span>
                <br />
                <a href="https://github.com/noru/noru.github.io">GitHub Repo</a> <br />
                <span>Last build: {data.site.buildTime}</span>
              </Footer>
            </React.Fragment>
          </ThemeProvider>
        )}
      />
    )
  }
}
