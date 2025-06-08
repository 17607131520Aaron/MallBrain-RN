import { userActionType } from './types';
export const saveUserInfoAction = (payload: unknown): unknown => {
  return {
    type: userActionType.saveUserinfo,
    payload,
  };
};
