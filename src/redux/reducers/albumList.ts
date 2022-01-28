import {
  createAsyncThunk,
  createSelector,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit'
import { requests } from '~src/api'
import { IAlbum, IAlbumResponse } from '~src/types/album'

export type AlbumListState = EntityState<Object> & {
  isLoading: boolean
  albumList: IAlbum[]
  hasError: boolean
}
const initialState: AlbumListState = {
  isLoading: true, // to set a loader on fetching check list
  ids: [],
  entities: {},
  albumList: [],
  hasError: false,
}

interface FetchAlbumListResponse {
  feed: {
    entry: IAlbumResponse[]
  }
}
export const fetchAlbumList = createAsyncThunk<
  FetchAlbumListResponse,
  undefined,
  {
    rejectValue: string
  }
>('album/getList', async () => {
  try {
    const response = await requests.getAlbums()
    return response
  } catch (error) {
    throw new Error('something went wrong!')
  }
})

export const albumListSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchAlbumList.fulfilled, (state, action) => {
        const {
          payload: {
            feed: { entry },
          },
        } = action

        state.albumList = [
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
      .addCase(fetchAlbumList.rejected, state => {
        state.isLoading = false
        state.hasError = true
      }),
})

export const selectSlice = (state: { albumList: AlbumListState }) =>
  state || initialState
export const selectAllList = createSelector(selectSlice, slice => {
  return slice.albumList
})
export const selectIsLoading = createSelector(
  selectSlice,
  slice => slice.albumList.isLoading
)
export default albumListSlice
