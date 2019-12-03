import styled from 'styled-components'
import { media } from '../utils/media'

export const Content = styled.div`
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -1.5rem;
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
  @media ${media.tablet} {
    padding: 1rem 1.5rem;
  }
  @media ${media.phone} {
    padding: 1rem 1.5rem;
  }

  > h3 {
    &:nth-of-type(6n + 1) {
      a {
        color: #7ccdea;
      }
    }
    &:nth-of-type(6n + 2) {
      a {
        color: #0074D9;
      }
    }
    &:nth-of-type(6n + 3) {
      a {
        color: #2ECC40;
      }
    }
    &:nth-of-type(6n + 4) {
      a {
        color: #FFDC00;
      }
    }
    &:nth-of-type(6n + 5) {
      a {
        color: #B10DC9;
      }
    }
    &:nth-of-type(6n) {
      a {
        color: #FF4136;
      }
    }
  }
`

// 0 % , 100 % { color:  #7ccdea; }
// 16 %      { color:  #0074D9; }
// 32 %      { color:  #2ECC40; }
// 48 %      { color:  #FFDC00; }
// 64 %      { color:  #B10DC9; }
// 80 %      { color:   #FF4136; }