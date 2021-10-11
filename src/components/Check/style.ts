import styled from 'styled-components'
import { Button } from '~src/shared/style-components/Button'
import { FlexBox } from '~style-components/FlexBox'

export const Container = styled(FlexBox).attrs({
  direction: 'column',
})<{ isDisabled: boolean }>`
  padding: 12px;
  cursor: ${({ isDisabled }) => (!isDisabled ? 'pointer' : '')};
  user-select: ${({ isDisabled }) => (isDisabled ? 'none' : '')};

  :hover {
    background-color: ${({ isDisabled }) =>
      !isDisabled ? 'var(--green-alpha-background)' : ''};
  }
`
export const GroupButton = styled(FlexBox)`
  button:first-child {
    border-radius: 4px 0 0 4px;
  }

  button:nth-child(2) {
    border-left: none;
    border-radius: 0 4px 4px 0;
  }
`

export const AnswerButton = styled(Button).attrs({
  fontSize: 'small',
  size: 'normal',
  borderColor: 'var(--green-color)',
})``
