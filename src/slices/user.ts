import { createSlice } from '@reduxjs/toolkit';
import { signin, signup } from '../actions/user';

export interface InitialState {
  signinLoading: boolean; // 로그인
  signinDone: boolean;
  signinError: Error | string | null | undefined;
  signinData: {
    status: number;
    message: string;
    access_token: string;
  } | null;
  signupLoading: boolean; // 회원가입
  signupDone: boolean;
  signupError: Error | string | null | undefined;
  signupData: {
    statusCode: number;
    message: string;
    success: boolean;
    url: string;
  } | null;
}

export const initialState: InitialState = {
  signinLoading: false, // 로그인
  signinDone: false,
  signinError: null,
  signinData: null,
  signupLoading: false, // 회원가입
  signupDone: false,
  signupError: null,
  signupData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // resetGetPhotoInfo(state) {
    //   return {
    //     ...state,
    //     getPhotoInfoData: [],
    //   };
    // },
  },
  extraReducers: (builder) =>
    builder
      // signin
      .addCase(signin.pending, (state) => {
        state.signinLoading = true;
        state.signinDone = false;
        state.signinError = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.signinLoading = false;
        state.signinDone = true;
        state.signinData = action.payload;
      })
      .addCase(signin.rejected, (state, action) => {
        state.signinLoading = false;
        state.signinError = action.error.message;
      })
      // signup
      .addCase(signup.pending, (state) => {
        state.signupLoading = true;
        state.signupDone = false;
        state.signupError = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.signupDone = true;
        state.signupData = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.signupLoading = false;
        state.signupError = action.error.message;
      })
      .addDefaultCase((state) => state),
});

export default userSlice;
// export const { resetGetPhotoInfo } = photoSlice.actions;
