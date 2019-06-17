import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`

export function ImageViewer({ src, onClose }) {
  if (!src) {
    return null
  }
  return <Wrapper style={{ backgroundImage: `url(${src})` }} onClick={onClose} />
}
