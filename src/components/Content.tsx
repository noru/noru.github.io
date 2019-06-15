import styled from 'styled-components'
import { media } from '../utils/media'

export const Content = styled.div`
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 0rem 4rem;
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
`
