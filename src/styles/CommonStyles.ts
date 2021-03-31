import styled, { css } from 'styled-components'

export const ContrastIconButton = css`
  height: 25px;
  width: 25px;
  padding: 10px;
  cursor: pointer;
  :focus,
  :hover {
    color: ${props => props.theme.palette.primary.contrast};
    fill: ${props => props.theme.palette.primary.contrast};
  }
`

export const DarkIconButton = css`
  height: 25px;
  width: 25px;
  padding: 10px;
  cursor: pointer;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const FilledButton = styled.a`
  ${ButtonStyles}
  background-color: ${props => props.theme.palette.primary.contrast};
  && {
    color: ${props => props.theme.palette.text.primary};
  }
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
