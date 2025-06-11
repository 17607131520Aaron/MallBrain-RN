/**
 * Input组件类型定义文件
 */
import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

/**
 * Input组件属性接口
 */
export interface IInputProps {
  /** 占位文本 */
  placeholder?: string;
  /** 输入框的值 */
  value?: string;
  /** 文本变化回调函数 */
  onChangeText?: (text: string) => void;
  /** 前缀内容 */
  prefix?: React.ReactNode;
  /** 后缀内容 */
  suffix?: React.ReactNode;
  /** 是否显示清除按钮 */
  allowClear?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 错误信息 */
  error?: string;
  /** 标签文本 */
  label?: string;
  /** 是否必填 */
  required?: boolean;
  /** 最大输入长度 */
  maxLength?: number;
  /** 是否为密码输入 */
  secureTextEntry?: boolean;
  /** 自动大小写设置 */
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  /** 键盘类型 */
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  /** 是否加载中 */
  loading?: boolean;
  /** 容器样式 */
  style?: StyleProp<ViewStyle>;
  /** 输入框样式 */
  inputStyle?: StyleProp<TextStyle>;
}

/**
 * 密码输入组件属性接口，继承自IInputProps但移除secureTextEntry属性
 */
interface PasswordProps extends Omit<IInputProps, 'secureTextEntry'> {}

/**
 * Input组件接口，包含Password子组件
 */
interface InputComponent extends React.FC<IInputProps> {
  /** 密码输入子组件 */
  Password: React.FC<PasswordProps>;
}

/**
 * Input组件
 */
declare const Input: InputComponent;

export default Input;
