import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, legacy_createStore as legacyCreateStore } from 'redux';
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';

import { rootReducer, whitelist } from './store';

import type { Action, Reducer, Store } from 'redux';
import type { PersistConfig } from 'redux-persist';

// 创建一个自定义转换器，用于序列化和反序列化状态。
const transform = createTransform(
  (inboundState) => inboundState, // 序列化
  (outboundState) => outboundState, // 反序列化
);

// 配置持久化
const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'mallbrain-rn',
  storage: AsyncStorage,
  transforms: [transform],
  whitelist: [...whitelist],
};

interface ISPayloadAction<T = Record<string, unknown>> extends Action<string> {
  payload: T;
}

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>, ISPayloadAction>(
  persistConfig,
  rootReducer as unknown as Reducer<ReturnType<typeof rootReducer>, ISPayloadAction>,
);

// 创建 store，应用中间件
const store = legacyCreateStore(persistedReducer, applyMiddleware(thunk));

const persist = persistStore(store as Store<ReturnType<typeof rootReducer>, Action>);

export { persist, store };
