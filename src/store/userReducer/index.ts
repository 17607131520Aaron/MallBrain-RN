import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/order
import type { TRootState } from '../store';

// 定义用户信息的类型
export interface IUserInfo {
  [key: string]: unknown;
}

// 定义状态的类型
interface IUserState {
  userInfo: IUserInfo;
}

// 初始状态
const initialState: IUserState = {
  userInfo: {},
};

// 创建slice
export const userSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    saveUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

// 导出actions
export const { saveUserInfo } = userSlice.actions;

// 选择器 - 允许我们从store中选择数据
export const selectUserInfo = (state: TRootState): IUserInfo => state.userinfo.userInfo;

// 导出reducer
export default userSlice.reducer;
