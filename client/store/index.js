import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const getImgUrl = createAsyncThunk(
  'counter/getImgUrl',
  async () => {
    console.log('执行了接口请求')
    const { message } = await fetch('https://dog.ceo/api/breeds/image/random', { mode: 'cors' }).then(res => res.json())
    return message
  }
)
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    url: ''
  },
  extraReducers: (builder) => {
    builder.addCase(getImgUrl.fulfilled, (state, action) => {
      state.url = action.payload
    })
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

const store = global ? configureStore({
  reducer: counterSlice.reducer,
}) : configureStore({
  reducer: counterSlice.reducer,
  preloadedState: window.__PRELOADED_STATE__
})

export { getImgUrl }

export default store