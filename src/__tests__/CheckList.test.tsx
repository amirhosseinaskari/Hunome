import slice, { CheckListState, fetchList } from '~redux/reducers/checklist'
import { checkLists } from '~src/api/mock-data'

describe('CheckList - Redux - Fetch API', () => {
  const initialState: CheckListState = {
    isLoading: false,
    canSubmit: false,
    checkList: [],
    ids: [],
    entities: {},
  }
  const action = {
    type: fetchList.fulfilled.type,
    payload: { result: checkLists },
  }
  const state = slice.reducer(initialState, action)
  it('should be filled after fetching data', async () => {
    expect(state).toMatchObject({
      ...initialState,
      checkList: checkLists,
    })
  })

  it('first element sould be not disabled', async () => {
    if (state.checkList[0])
      expect(state.checkList[0]).toHaveProperty('isDisabled', false)
  })
})
