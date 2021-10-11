import styled from 'styled-components'

type FlexAlignment =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'inherit'
  | 'unset'
  | 'initial'
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

interface FlexProps {
  justify?: FlexAlignment
  alignItems?: FlexAlignment
  direction?: Direction
}

export const FlexBox = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ direction }) => direction || 'row'};
`

FlexBox.defaultProps = {
  justify: 'initial',
  alignItems: 'initial',
  direction: 'row',
}
