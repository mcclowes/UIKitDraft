import styled from 'react-emotion'

const Content = styled('div')`
  display: inline-block;
  padding: 0.5rem;

  &:not(:last-child) {
  	padding-bottom: 1rem;
  }
`

export default Content