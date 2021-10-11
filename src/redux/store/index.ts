import { configureStore } from '@reduxjs/toolkit'
import checkListReducer from '~redux/reducers/checklist'

export const store = configureStore({
  reducer: { checkList: checkListReducer.reducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {checklist: checklist state}
export type AppDispatch = typeof store.dispatch
