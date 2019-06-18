import React from 'react'
import styled from 'styled-components'

const Demo = styled.a`
  text-align: center;
  box-shadow: 9px 10px 11px -4px rgba(0,0,0,0.75);
  transition: all .2s ease-in;
  position: relative;
  top: 0;

  &:hover {
    box-shadow: 9px 30px 68px -4px rgba(0,0,0,0.65);
    top: -5px;
  }

  > * {
    margin: auto;
  }
`

function calculateScale(width: number) {
  return width / 1440
}

const RATIO = 1440 / 900

export class DemoWrapper extends React.Component<{ width: number, src: string, link?: string, isImage?: boolean }, {}> {
  render() {
    let { width, src, link, isImage } = this.props
    let scale = calculateScale(width)
    let style = {
      width: 1440,
      height: 900,
      transformOrigin: '0 0',
      transform: `scale(${scale})`,
    }
    return (
      <Demo target="_blank" href={link || src}>
        <div style={{ width, height: width / RATIO, pointerEvents: 'none' }}>
          { isImage ?
            <img src={src}/> :
            <iframe src={src} frameBorder="0" style={style} onError={console.error}></iframe>
          }
        </div>
      </Demo>
    )
  }
}
