import { useDispatch, useSelector } from 'react-redux';

import { persistor, store } from './store';

import type { TypedUseSelectorHook } from 'react-redux';
// eslint-disable-next-line import/order
import type { TAppDispatch, TRootState } from './store';

// 导出store和persistor
export { persistor, store };

// 创建类型化的hooks
export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
