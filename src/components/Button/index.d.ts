import React from 'react';
import type { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';

/**
 * 按钮类型枚举
 * @property Default - 默认按钮样式
 * @property PrimaryLine - 主要轮廓按钮样式
 * @property Primary - 主要按钮样式
 * @property Warning - 警告按钮样式
 * @property Error - 错误按钮样式
 * @property ErrorLine - 错误轮廓按钮样式
 * @property Cancel - 取消按钮样式
 */
export const BtnTypeEnum: {
  readonly Default: 'default';
  readonly PrimaryLine: 'primaryLine';
  readonly Primary: 'primary';
  readonly Warning: 'warning';
  readonly Error: 'error';
  readonly ErrorLine: 'errorLine';
  readonly Cancel: 'cancel';
};

/**
 * 按钮类型
 * 从BtnTypeEnum中提取的字符串联合类型
 */
export type TBtnType = (typeof BtnTypeEnum)[keyof typeof BtnTypeEnum];

/**
 * 按钮组件属性接口
 * @property children - 按钮内容
 * @property type - 按钮类型，来自TBtnType
 * @property isDisabled - 是否禁用按钮
 * @property isLoading - 是否显示加载状态
 * @property containerStyle - 容器样式
 * @property style - 按钮样式
 * @property textStyle - 文本样式
 * @property onPress - 点击事件处理函数
 * @property isBold - 文本是否加粗
 * @property iconProps - 图标属性
 * @property isCustom - 是否使用自定义样式
 */
export interface IButtonProps {
  children: React.ReactNode;
  type: TBtnType;
  isDisabled?: boolean;
  isLoading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  isBold?: boolean;
  iconProps?: Record<string, unknown>;
  isCustom?: boolean;
}

/**
 * Button组件
 * 一个带有多种样式选项的可定制按钮组件
 */
declare const Button: React.NamedExoticComponent<IButtonProps>;

export default Button;
