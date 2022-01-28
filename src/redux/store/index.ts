import { configureStore } from '@reduxjs/toolkit'
import songListReducer from '~src/redux/reducers/songList'
import albumListReducer from '~src/redux/reducers/albumList'

export const store = configureStore({
  reducer: {
    songList: songListReducer.reducer,
    albumList: albumListReducer.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
