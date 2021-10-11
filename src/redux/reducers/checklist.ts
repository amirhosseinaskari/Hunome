import {
  createAsyncThunk,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit'
import { fetchChecks, sumitCheckResults } from '~src/api'
import { ICheck, ICheckResult } from '~src/types/check-lists'

export type CheckListState = EntityState<ICheck> & {
  isLoading: boolean
  checkList: ICheck[]
  canSubmit: boolean
}
const initialState: CheckListState = {
  isLoading: true, // to set a loader on fetching check list
  canSubmit: false,
  ids: [],
  entities: {},
  checkList: [] as ICheck[],
}

type FetchListAPIResponse = {
  data: {
    result: ICheck[]
    error?: string
  }
}

export const fetchList = createAsyncThunk<
  FetchListAPIResponse['data'],
  undefined,
  {
    rejectValue: string
  }
>('checkList/getList', async () => {
  try {
    const response = await fetchChecks()
    return response.data
  } catch (error) {
    return { result: [], error: 'Something went wrong!' }
  }
})

export const submitList = createAsyncThunk<
  boolean,
  ICheckResult[],
  { rejectValue: string }
>('checkList/submitList', async args => {
  try {
    const list = args
    const response = await sumitCheckResults({ list })
    if (!response.data.status) throw new Error('something went wrong!')
    return true
  } catch (error) {
    throw new Error((error as { message: string }).message)
  }
})

export const checkListSlice = createSlice({
  name: 'checkList',
  initialState,
  reducers: {
    checkToggle: (
      state,
      action: PayloadAction<{ checkId: string; answer?: boolean }>
    ) => {
      // update check answer(toggle answer when it's changed)
      const checkId = action.payload.checkId
      const check = state.checkList.find(item => item.id === checkId)
      if (!check) return
      check.answer = action.payload.answer
      check.isAnswered = true

      // then next check list witll be active
      const index = state.checkList.findIndex(item => item.id === check.id)
      if (check.answer) {
        for (let i = 0, n = state.checkList.length; i < n; i++) {
          const current = state.checkList[i]
          if (i > index) current.isDisabled = false
          if (!current.answer || !current.isAnswered) break
        }
      } else {
        state.checkList.forEach((item, idx) => {
          if (idx > index) item.isDisabled = true
        })
      }

      // if one of check answer is false, can submit will be true OR
      // if all check answer is true, can submit will be true

      state.canSubmit =
        !!state.checkList.find(item => item.isAnswered && !item.answer) ||
        state.checkList.filter(item => item.isAnswered && item.answer)
          .length === state.checkList.length
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchList.fulfilled, (state, action) => {
        const list = action.payload.result
          .map(item => ({
            ...item,
            isDisabled: true,
            isAnswered: false,
          }))
          .sort((a, b) => a.priority - b.priority)
        if (list.length > 0) list[0].isDisabled = false
        state.checkList = list
        state.isLoading = false
      })
      .addCase(submitList.fulfilled, (state, action) => {
        // reset check list form after submition
        state.canSubmit = false
        state.checkList = state.checkList.map(item => ({
          ...item,
          answer: false,
          isAnswered: false,
          isDisabled: true,
        }))

        if (state.checkList[0]) state.checkList[0].isDisabled = false
      })
  },
})

export const selectSlice = (state: { checkList: CheckListState }) =>
  state || initialState

export const selectAllList = createSelector(selectSlice, slice => {
  return slice.checkList
})
export const selectIsLoading = createSelector(
  selectSlice,
  slice => slice.checkList.isLoading
)

export default checkListSlice
