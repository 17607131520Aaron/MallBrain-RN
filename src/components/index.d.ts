import React from 'react';

import Button from './Button';
import { BtnTypeEnum, IButtonProps, TBtnType } from './Button/index.d';
import Toast from './Toast';
import { IToastAPI, IToastOptions, ToastType } from './Toast/index.d';

/**
 * 导出所有组件类型
 * 包括Button和Toast组件及其相关类型
 */
export { BtnTypeEnum, Button, IButtonProps, IToastAPI, IToastOptions, TBtnType, Toast, ToastType };

/**
 * 组件注册表接口
 * 定义了可用组件的集合
 * @property Button - Button组件
 * @property Toast - Toast组件
 */
export interface IComponentRegistry {
  Button: typeof Button;
  Toast: typeof Toast;
}

/**
 * 组件对象
 * 包含所有已注册的组件，可以通过解构使用
 * 例如: const { Button, Toast } = Components;
 */
export const Components: IComponentRegistry;

/**
 * 组件注册表类型
 * Components对象的类型定义
 */
export type TComponentRegistry = typeof Components;

/**
 * 组件属性接口
 * 用于高阶组件包装时传递组件注册表
 * @property components - 组件注册表
 */
export interface IWithComponentsProps {
  components?: TComponentRegistry;
  [key: string]: unknown;
}

/**
 * 组件包装器高阶组件
 * 用于将组件注册表注入到被包装的组件中
 * @param WrappedComponent - 需要被包装的组件
 * @returns 包装后的组件，自动注入components属性
 * @example
 * const MyComponent = ({ components }) => {
 *   return <components.Button>Click Me</components.Button>;
 * };
 * export default withComponents(MyComponent);
 */
export function withComponents<T extends IWithComponentsProps>(
  WrappedComponent: React.ComponentType<T>,
): React.FC<T>;
