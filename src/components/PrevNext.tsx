import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import Post from '../models/Post'
import { Link } from './Link'

const Wrapper = styled.div`
  display: flex;
  margin: 3rem auto;
  a {
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
  }
  justify-items: center;
`

const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: lightgray;
  }
`

const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: lightgray;
  }
`

interface Props {
  next: Post
  prev: Post
}

export class PrevNext extends React.PureComponent<Props> {
  render() {
    const { prev, next } = this.props
    return (
      <Wrapper>
        {prev && (
          <Prev>
            <span>Previous</span>
            <Link to={`/blog/${kebabCase(prev.fields.slug)}`}>{prev.frontmatter.title}</Link>
          </Prev>
        )}
        {next && (
          <Next>
            <span>Next</span>
            <Link to={`/blog/${kebabCase(next.fields.slug)}`}>{next.frontmatter.title}</Link>
          </Next>
        )}
      </Wrapper>
    )
  }
}
