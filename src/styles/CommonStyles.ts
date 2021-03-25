import styled, { css } from 'styled-components'

export const IconStyles = css`
  height: 25px;
  width: 25px;
  padding: 10px;
`

export const IconButton = css`
  height: 25px;
  width: 25px;
  padding: 10px;
  :focus,
  :hover {
    color: ${props => props.theme.palette.primary.dark};
    fill: ${props => props.theme.palette.primary.dark};
  }
`

const ButtonStyles = css`
  display: inline-block;
  height: auto;
  width: auto;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  border: 2px solid ${props => props.theme.palette.primary.contrast};
  border-radius: 6px;
`

export const FilledButton = styled.a`
  ${ButtonStyles}
  background-color: ${props => props.theme.palette.primary.contrast};
  color: ${props => props.theme.palette.text.primary};
  cursor: pointer;
  :hover,
  :focus {
    opacity: 0.7;
  }
  :focus {
    outline: ${props => props.theme.palette.text.primary} 2px dashed;
  }
`

export const OutlinedButton = styled.a`
  ${ButtonStyles}
  background-color: transparent;
  color: ${props => props.theme.palette.primary.contrast};
  transition: color ease-in 200ms, background-color ease-in 200ms;
  cursor: pointer;
  :hover,
  :focus {
    color: ${props => props.theme.palette.text.primary};
    background-color: ${props => props.theme.palette.primary.contrast};
  }
  :focus {
    outline: ${props => props.theme.palette.text.primary} 2px dashed;
  }
`
