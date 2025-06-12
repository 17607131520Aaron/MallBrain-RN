
import Button from './Button';
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
export { Button, Input, EnhancedToast as Toast };
