import { combineReducers } from 'redux';

import userReducer from './userReducer/reducer';

const rootReducer = combineReducers({
  userinfo: userReducer,
});

const whitelist = ['userinfo'];

export { rootReducer, whitelist };

export type TRootState = ReturnType<typeof rootReducer>;
