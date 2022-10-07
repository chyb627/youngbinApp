import { combineReducers } from 'redux';

import userSlice from '../slice/user';
// import orderSlice from '../slices/order';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  // order: orderSlice.reducer,
});

// 타입스크립트
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

// reducer는 combineReducers라는 함수로 만듬
// reducer안에는 slice를 넣어준다
