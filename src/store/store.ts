import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import userReducer from './userReducer';

// 配置根reducer
const rootReducer = combineReducers({
  userinfo: userReducer,
});

// 配置持久化
const persistConfig = {
  key: 'mallbrain-rn',
  storage: AsyncStorage,
  whitelist: ['userinfo'], // 只持久化userinfo
};

// 创建持久化reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 创建store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 创建persistor
export const persistor = persistStore(store);

// 导出类型
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
