import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userToken: null,
    me: {},
  },
  reducers: {
    setUserToken(state) {
      return { ...state, userToken: 'gggggg' };
    },
  },
});

const reducer = authSlice.reducer;

export const { setUserToken } = authSlice.actions;
export default reducer;

// export const {
//     userToken: userToken,
// } = usersAdapter.getSelectors(state => state.auth);