import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../api/client';

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
  ids: [1],
  entities: {
    1: {
      name: 'juan sebastian sierra',
      email: 'juansebastiansierrac@gmail.com',
      password: '1234',
      avatar: null,
    },
  },
  current: null,
  isAuth: false,
  keepLogged: false,
  status: 'idle',
  error: null,
});

export const logUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
  const { entities } = thunkAPI.getState().user;
  const response = await loginUser(user, entities);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [logUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [logUser.fulfilled]: (state, action) => {
      const { keepLogged, id } = action.payload;
      state.status = 'succeed';
      state.current = id;
      state.isAuth = true;
      state.keepLogged = keepLogged;
    },
    [logUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default userSlice.reducer;
