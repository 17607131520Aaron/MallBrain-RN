// 自动导出所有组件
import React from 'react';

import Button from './Button';
import Toast from './Toast';

// 直接导出组件，可以解构使用
export const Components = {
  Button,
  Toast,
};

// 导出所有组件
export { Button, Toast };

// 组件注册表，用于自动挂载
export const componentRegistry = {
  Button,
  Toast,
};

// 定义组件注册表类型
export type TComponentRegistry = typeof componentRegistry;

// 定义组件属性接口
interface IWithComponentsProps {
  components?: TComponentRegistry;
  [key: string]: unknown;
}

// 组件包装器高阶组件
export const withComponents = (
  WrappedComponent: React.ComponentType<IWithComponentsProps>,
): React.FC<IWithComponentsProps> => {
  const WithComponents = (props: IWithComponentsProps): React.ReactElement => {
    return React.createElement(WrappedComponent, { ...props, components: componentRegistry });
  };
  return WithComponents;
};
