import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Subline } from './Subline'
import { media } from '../utils/media'
import { Link } from './Link'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  @media ${media.phone} {
    font-size: 1.2rem;
  }
`

const Initiale = styled.span`
  position: absolute;
  font-size: 5rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

interface Props {
  title: string
  date: string
  excerpt: string
  slug: string
  timeToRead: number
  category: string
}

export class Article extends React.PureComponent<Props> {

  render() {
    const { title, date, excerpt, slug, timeToRead, category } = this.props
    const firstChar = title.charAt(0)

    return (
      <Post>
        <Title>
          <Initiale>{firstChar}</Initiale>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Title>
        <Subline>
          {date} &mdash; {timeToRead} Min Read &mdash; In
          <Link to={`/categories/${kebabCase(category)}`}> {category}</Link>
        </Subline>
        <Excerpt>{excerpt}</Excerpt>
      </Post>
    )
  }
}
