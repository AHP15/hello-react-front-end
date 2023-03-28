/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk('rails/message', async () => {
  const response = await fetch('http://127.0.0.1:3000/');
  const data = await response.json();
  return data.content;
});

const messageSlice = createSlice({
  name: 'message',
  initialState: { },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.message = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default messageSlice.reducer;
