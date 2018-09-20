import styled from 'styled-components'

export const Button = styled.button`
  background: ${ props => props.primary ? 'palevioletred' : 'papayawhip' };
  color: ${ props => props.primary ? 'white' : 'black' };
  border: transparent;
  cursor:pointer;
  padding: .5rem 1rem;
  margin: .25rem;
  border-radius: .25rem;
  &:disabled {
    color: silver;
    opacity: 0.5;
  }
  > strong {
    text-transform: uppercase;
  }
` 
