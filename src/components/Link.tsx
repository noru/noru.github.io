import React from 'react'
import { Link as GLink } from 'gatsby'

export class Link extends React.PureComponent<any> {

  render() {
    const { to, ...rest } = this.props
    let query = window.location.search
    return (
      <GLink to={to + query} {...rest} />
    )
  }
}
