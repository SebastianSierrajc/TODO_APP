import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
  ids: [1],
  entities: {
    1: {
      name: 'juan sebastian sierra',
      email: 'juansebastiansierrac@gmail.com',
      avatar: null,
    },
  },
  isAuth: false,
  status: 'idle',
  error: null,
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
