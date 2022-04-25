// import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    url: ''
  },
  reducers: {
    getImgUrl: async (state) => {
      const { message } = await fetch('https://dog.ceo/api/breeds/image/random', { mode: 'cors' }).then(res => res.json())
      state.url = message
    },
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})
// function counterReducer(state = { value: 0 }, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { value: state.value + 1 }
//     case 'counter/decremented':
//       return { value: state.value - 1 }
//     default:
//       return state
//   }
// }
// global.window = {};
const store = global ?  configureStore({
  reducer: counterSlice.reducer,
}) : configureStore({
  reducer: counterSlice.reducer,
  preloadedState: window.__PRELOADED_STATE__
})

// const store = createStore(counterReducer, window.__PRELOADED_STATE__)
export const { getImgUrl } = counterSlice.actions

export default store