import React from 'react';

/**
 * Toast消息类型枚举
 * @property SUCCESS - 成功消息类型
 * @property ERROR - 错误消息类型
 * @property INFO - 信息消息类型
 * @property WARN - 警告消息类型
 */
export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn',
}

/**
 * Toast配置选项接口
 * @property content - 消息内容
 * @property duration - 显示持续时间（毫秒）
 * @property type - 消息类型
 * @property position - 消息显示位置
 * @property onClose - 消息关闭回调函数
 */
export interface IToastOptions {
  content: string;
  duration?: number;
  type?: ToastType;
  position?: 'top' | 'center' | 'bottom';
  onClose?: () => void;
}

/**
 * Toast API接口
 * @property show - 显示Toast消息
 * @property success - 显示成功Toast消息
 * @property error - 显示错误Toast消息
 * @property info - 显示信息Toast消息
 * @property warn - 显示警告Toast消息
 * @property hide - 隐藏当前Toast消息
 */
export interface IToastAPI {
  show: (options: IToastOptions | string) => void;
  success: (content: string, duration?: number) => void;
  error: (content: string, duration?: number) => void;
  info: (content: string, duration?: number) => void;
  warn: (content: string, duration?: number) => void;
  hide: () => void;
}

/**
 * Toast组件
 * 一个用于显示各种类型消息提示的组件
 * 同时具有静态方法用于直接调用显示消息
 */
declare const Toast: React.FC & IToastAPI;

export default Toast;
