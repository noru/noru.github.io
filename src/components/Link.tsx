import React from 'react'
import { Link as GLink } from 'gatsby'

export class Link extends React.PureComponent<any> {

  render() {
    let { to, ...rest } = this.props
    if (typeof window !== 'undefined') {
      to += window.location.search
    }
    return (
      <GLink to={to} {...rest} />
    )
  }
}
