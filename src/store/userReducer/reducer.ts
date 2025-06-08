import { userActionType } from './types';
export interface ISUserInfoState<T> {
  userInfo: T;
}

// 定义 action 类型
export interface ISUserAction<T> {
  type: string;
  payload: T;
}

// 修正 initialState 属性名，确保与接口一致
const initialState: ISUserInfoState<Record<string, never>> = {
  userInfo: {}, // 初始化为空对象
};

// 定义 reducer 函数
const userReducer = <T extends Record<string, unknown> = Record<string, never>>(
  state: ISUserInfoState<T> = initialState as ISUserInfoState<T>, // 使用类型断言
  action: ISUserAction<T>,
): ISUserInfoState<T> => {
  switch (action.type) {
    case userActionType.saveUserinfo:
      return { ...state, userInfo: action.payload }; // 更新 userInfo

    default:
      return state;
  }
};

export default userReducer;
