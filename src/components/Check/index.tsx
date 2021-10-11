import React, { useEffect, useState } from 'react'
import { Text } from '~src/shared/style-components/Text'
import { activeBackColor, disabledBackColor, disabledColor } from '../CheckList'
import { Container, GroupButton, AnswerButton } from './style'

export interface CheckProps {
  id: string
  description: string
  answer?: boolean
  isDisabled?: boolean
  isAnswered?: boolean
  index: number
  isFocused: boolean
  onButtonClick: ({
    id,
    answer,
    index,
  }: {
    id: string
    answer: boolean
    index: number
  }) => void
  onKeyDown: ({ event }: { event: React.KeyboardEvent<HTMLElement> }) => void
}

const Check: React.FC<CheckProps> = ({
  id,
  description,
  answer,
  isDisabled = true,
  isAnswered = false,
  index,
  isFocused,
  onButtonClick,
  onKeyDown,
}: CheckProps) => {
  const [state, setState] = useState<{
    answer?: boolean
    isAnswered: boolean
    isFocused: boolean
  }>({
    answer,
    isAnswered,
    isFocused,
  })

  useEffect(() => {
    setState({ answer, isAnswered, isFocused })
  }, [answer, isAnswered, isFocused])

  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    answer: boolean
  ) => {
    onButtonClick({ id, answer: answer!, index })
  }

  return (
    <Container
      isDisabled={isDisabled}
      onKeyDown={event => onKeyDown({ event })}
      style={{
        backgroundColor: state.isFocused ? 'var(--green-light-background)' : '',
      }}
    >
      <Text
        scale='small'
        weight='bold'
        margin='0 0 12px 0'
        color={isDisabled ? disabledColor : 'var(--carbon-color)'}
      >
        {description}
      </Text>
      <GroupButton>
        <AnswerButton
          type='button'
          disabledBackColor={
            state.isAnswered && state.answer ? disabledBackColor : undefined
          }
          disabled={isDisabled}
          isDisabled={isDisabled}
          isActive={state.answer && state.isAnswered}
          activeBackColor={
            state.isAnswered && state.answer ? activeBackColor : undefined
          }
          onClick={e => onClickHandler(e, true)}
        >
          Yes
        </AnswerButton>
        <AnswerButton
          type='button'
          disabled={isDisabled}
          isDisabled={isDisabled}
          isActive={!state.answer && state.isAnswered}
          activeBackColor={
            state.isAnswered && !state.answer ? activeBackColor : undefined
          }
          disabledBackColor={
            state.isAnswered && !state.answer ? disabledBackColor : undefined
          }
          onClick={e => onClickHandler(e, false)}
        >
          No
        </AnswerButton>
      </GroupButton>
    </Container>
  )
}

export default Check
