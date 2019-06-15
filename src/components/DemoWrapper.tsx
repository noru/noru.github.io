import React from 'react'

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
      <a target="_blank" href={link || src}>
        <div style={{ width, height: width / RATIO, pointerEvents: 'none', marginBottom: '35px' }}>
          { isImage ?
            <img src={src}/> :
            <iframe src={src} frameBorder="0" style={style} onError={console.error}></iframe>
          }
        </div>
      </a>
    )
  }
}
