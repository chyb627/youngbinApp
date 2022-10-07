import { createSlice } from '@reduxjs/toolkit';

// action : state를 바꾸는 행위/동작
// dispatch: 그 액션을 실제로 실행하는 함수
// reducer: 액션이 실제로 실행되면 state를 바꾸는 로직

// 전역상태, 글로벌스테이트
const initialState = {
  displayName: '',
  id: '',
  photoURL: '',
  // accessToken: '',
};
const userSlice = createSlice({
  // name은 slice 이름
  // initialState는 초기상태
  // reducer는 싱태를 어떻게 바꿔줄지?
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.displayName = action.payload.displayName;
      state.id = action.payload.id;
      state.photoURL = action.payload.photoURL;
      // state.accessToken = action.payload.accessToken;
    },
    // setAccessToken(state, action) {
    //   state.accessToken = action.payload;
    // },
    // setMoney(state, action: PayloadAction<number>) {
    //   state.money = action.payload;
    // },
  },
  // extraReducers: (builder) => {},
});

export default userSlice;
