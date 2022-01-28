import styled from 'styled-components'
import { FontSize } from '../Text'

type BorderType = 'rounded' | 'simple' | 'none'
type BorderWeightType = 'thick' | 'normal'

interface InputProps {
  border?: BorderType
  weight?: BorderWeightType
  err?: boolean
  borderColor?: string
  fontSize?: FontSize
}

export const Input = styled.input<InputProps>`
  appearance: none;
  padding: 6px;
  box-sizing: border-box;
  outline: none;
  border: ${({ borderColor, border }) =>
    border === 'none' ? 'none' : `1px solid ${borderColor}`};
  border-width: ${({ weight }) => (weight === 'normal' ? '1px' : '2px')};
  border-color: ${({ err }) => (err ? 'var(--alert-color)' : '')};
  border-radius: ${({ border }) => (border === 'rounded' ? '4px' : '0')};
  font-size: ${({ fontSize }) =>
    fontSize === 'small'
      ? 'var(--small-font-size)'
      : fontSize === 'normal'
      ? 'var(--normal-font-size)'
      : fontSize === 'large'
      ? 'var(--large-font-size)'
      : ''};
`

Input.defaultProps = {
  border: 'simple',
  err: false,
  borderColor: 'var(--carbon-light-color)',
  weight: 'normal',
}
