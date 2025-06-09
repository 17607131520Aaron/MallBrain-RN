import React, { createContext, useContext } from 'react';

import { componentRegistry } from '~/components';

import type { TComponentRegistry } from '~/components';

// 创建组件上下文
const ComponentContext = createContext<TComponentRegistry | null>(null);

// 组件提供者
export const ComponentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ComponentContext.Provider value={componentRegistry}>{children}</ComponentContext.Provider>
  );
};

// 组件使用钩子
export const useComponents = (): TComponentRegistry => {
  const context = useContext(ComponentContext);
  if (!context) {
    throw new Error('useComponents必须在ComponentProvider内部使用');
  }
  return context;
};

// 提供解构使用的钩子
export const useComponentsProps = (): TComponentRegistry => {
  const components = useComponents();
  return components;
};
