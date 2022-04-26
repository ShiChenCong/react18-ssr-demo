import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
const getImgUrl = createAsyncThunk("counter/getImgUrl", async () => {
  const { message } = await fetch("https://dog.ceo/api/breeds/image/random", {
    mode: "cors",
  }).then((res) => res.json());
  return message;
});
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    url: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getImgUrl.fulfilled, (state, action) => {
      state.url = action.payload;
    });
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

const getServerStore = () => {
  return configureStore({
    reducer: counterSlice.reducer,
  });
};
const getClientStore = () => {
  return configureStore({
    preloadedState: window?.__PRELOADED_STATE__,
    reducer: counterSlice.reducer,
  });
};

export { getImgUrl, getClientStore, getServerStore };
