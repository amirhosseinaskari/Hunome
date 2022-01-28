import {
  createAsyncThunk,
  createSelector,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit'
import { requests } from '~src/api'
import { ISong, ISongResponse } from '~src/types/song'

export type SongListState = EntityState<Object> & {
  isLoading: boolean
  songList: ISong[]
  hasError: boolean
}
const initialState: SongListState = {
  isLoading: true, // to set a loader on fetching check list
  ids: [],
  entities: {},
  songList: [],
  hasError: false,
}

interface FetchSongListResponse {
  feed: {
    entry: ISongResponse[]
  }
}
export const fetchSongList = createAsyncThunk<
  FetchSongListResponse,
  undefined,
  {
    rejectValue: string
  }
>('songs/getList', async () => {
  try {
    const response = await requests.getSongs()
    return response
  } catch (error) {
    throw new Error('something went wrong!')
  }
})

export const songListSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchSongList.fulfilled, (state, action) => {
        const {
          payload: {
            feed: { entry },
          },
        } = action
        state.songList = [
          ...entry.map(item => ({
            name: item['im:artist'].label,
            price: item['im:price'].label,
            title: item['title'].label,
            image: item['im:image'][2].label,
            id: item.id.attributes['im:id'],
          })),
        ]
        state.isLoading = false
      })
      .addCase(fetchSongList.rejected, state => {
        state.isLoading = false
        state.hasError = true
      }),
})

export const selectSlice = (state: { songList: SongListState }) =>
  state || initialState
export const selectAllList = createSelector(selectSlice, slice => {
  return slice.songList
})
export const selectIsLoading = createSelector(
  selectSlice,
  slice => slice.songList.isLoading
)
export default songListSlice
