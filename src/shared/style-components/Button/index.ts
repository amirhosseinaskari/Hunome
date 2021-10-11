import styled from 'styled-components'
import { Font, FontWeight, FontSize } from '~style-components/Text'

type Size = 'normal' | 'large'

export interface ButtonProps {
  size?: Size
  isDisabled?: boolean
  isActive?: boolean
  disabledBackColor?: string
  hoverBackColor?: string
  activeBackColor?: string
  defaultBackColor?: string
  weight?: FontWeight
  font?: Font
  border?: string
  fontSize?: FontSize
  borderColor?: string
}

export const Button = styled.button<ButtonProps>`
  appearance: none;
  background: ${({ defaultBackColor }) => defaultBackColor || 'none'};
  width: ${({ size }) =>
    size === 'normal'
      ? 'var(--normal-button-width)'
      : size === 'large'
      ? 'var(--large-button-width)'
      : ''};
  height: ${({ size }) =>
    size === 'normal'
      ? 'var(--normal-button-height)'
      : size === 'large'
      ? 'var(--large-button-height)'
      : ''};
  font-family: ${({ font }) => (font ? font : '')};
  font-size: ${({ fontSize }) =>
    fontSize === 'small'
      ? 'var(--small-font-size)'
      : fontSize === 'normal'
      ? 'var(--normal-font-size)'
      : fontSize === 'large'
      ? 'var(--large-font-size)'
      : ''};
  font-weight: ${({ weight }) =>
    weight === 'normal'
      ? 'var(--normal-font-weight)'
      : weight === 'bold'
      ? 'var(--bold-font-weight)'
      : ''};
  border: ${({ border, isDisabled, borderColor }) =>
    border
      ? border
      : `2px solid  ${
          isDisabled
            ? 'var(--disabled-color)'
            : borderColor || 'var(--carbon-color)'
        }`};
  border-radius: 4px;
  background-color: ${({
    disabledBackColor,
    activeBackColor,
    defaultBackColor,
    isActive,
    isDisabled,
  }) =>
    isActive && !isDisabled
      ? activeBackColor
      : isActive && isDisabled
      ? disabledBackColor
      : defaultBackColor || 'none'};
  color: ${({ isDisabled, isActive, color }) =>
    color
      ? color
      : isDisabled && !isActive
      ? 'var(--disabled-color)'
      : isActive
      ? 'var(--white-color)'
      : ''};
  outline: none;
  cursor: ${({ isDisabled }) => (!isDisabled ? 'pointer' : '')};
`

Button.defaultProps = {
  isDisabled: false,
  isActive: false,
}
