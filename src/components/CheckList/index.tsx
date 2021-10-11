import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reducer, {
  fetchList,
  selectAllList,
  submitList,
} from '~src/redux/reducers/checklist'
import Check from '~components/Check'
import { Container } from './style'
import { Button } from '~src/shared/style-components/Button'
import { FlexBox } from '~src/shared/style-components/FlexBox'

export const disabledColor = 'var(--disabled-color)'
export const disabledBackColor = 'var(--disabled-grreen-color)'
export const activeBackColor = 'var(--green-color)'

const CheckList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const { checkList, isLoading, canSubmit } = useSelector(selectAllList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchList())
  }, [])

  const onAnswerButtonClick = useCallback(
    ({ id, answer, index }: { id: string; answer: boolean; index: number }) => {
      dispatch(reducer.actions.checkToggle({ checkId: id, answer }))
      setActiveIndex(index)
    },
    []
  )

  const onKeyDown = useCallback(
    ({ event }: { event: React.KeyboardEvent<HTMLElement> }) => {
      const keyCode = event.key
      const actions = {
        '1': () =>
          checkList[activeIndex] &&
          dispatch(
            reducer.actions.checkToggle({
              checkId: checkList[activeIndex].id,
              answer: true,
            })
          ),
        '2': () =>
          checkList[activeIndex] &&
          dispatch(
            reducer.actions.checkToggle({
              checkId: checkList[activeIndex].id,
              answer: false,
            })
          ),
        ArrowUp: () => {
          if (
            checkList[activeIndex - 1] &&
            !checkList[activeIndex - 1].isDisabled
          )
            console.log('here')
          setActiveIndex(activeIndex - 1)
        },
        ArrowDown: () => {
          if (
            checkList[activeIndex + 1] &&
            !checkList[activeIndex + 1].isDisabled
          )
            setActiveIndex(activeIndex + 1)
        },
      }

      if (Object(actions)[keyCode]) Object(actions)[keyCode]()
    },
    [checkList, activeIndex]
  )

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(
      submitList(
        checkList.map(item => ({
          checkId: item.id,
          value: String(item.answer),
        }))
      )
    )
  }

  return (
    <Container as='form' onSubmit={onSubmitForm} data-testid='checkList'>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        checkList?.map((item, idx) => (
          <Check
            isFocused={idx === activeIndex}
            onKeyDown={onKeyDown}
            key={String(item.id)}
            index={idx}
            {...item}
            onButtonClick={onAnswerButtonClick}
          />
        ))
      )}
      <FlexBox justify='flex-end'>
        <Button
          disabled={!canSubmit}
          type='submit'
          size='large'
          fontSize='normal'
          isActive={true}
          isDisabled={!canSubmit}
          disabledBackColor={disabledBackColor}
          activeBackColor={activeBackColor}
          color={canSubmit ? 'var(--white-color)' : 'var(--carbon-light-color)'}
        >
          Submit
        </Button>
      </FlexBox>
    </Container>
  )
}

export default CheckList
