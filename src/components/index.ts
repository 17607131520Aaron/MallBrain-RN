// 自动生成的组件索引文件，请勿手动修改
// 由scripts/generate_components.js生成

import Button from './Button';
import Card from './Card';
import Input from './Input';
import Toast from './Toast';

// 增强Toast组件
const EnhancedToast = Object.assign(Toast, {
  show: (content: string) => Toast.add(content),
  success: (content: string) => Toast.add(content),
  error: (content: string) => Toast.add(content),
  info: (content: string) => Toast.add(content),
  warn: (content: string) => Toast.add(content),
  hide: () => {
    /* 实现隐藏逻辑 */
  },
});

// 组件模块对象
const componentModules = {
  Button,
  Card,
  Input,
  Toast: EnhancedToast,
};

// 组件类型定义
export interface ITComponentRegistry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>;
}

// 自动生成组件注册表
export const componentRegistry: ITComponentRegistry = Object.entries(componentModules).reduce(
  (registry, [name, component]) => {
    registry[name] = component;
    return registry;
  },
  {} as ITComponentRegistry,
);

// 导出组件对象，用于直接解构使用
export const Components = componentRegistry;

// 自动导出所有组件
export { Button, Card, Input, EnhancedToast as Toast };

// 如需添加新组件，请在src/components目录下创建新的组件目录
// 然后运行 yarn generate:components 命令更新此文件
