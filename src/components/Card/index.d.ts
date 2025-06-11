import React from 'react';
import { ViewProps } from 'react-native';

/**
 * Card组件属性接口
 * @property shadow - 是否显示阴影
 * @property radius - 圆角大小
 */
export interface CardProps extends ViewProps {
  shadow?: boolean;
  radius?: number;
}

/**
 * Card组件
 * 一个简单的卡片容器组件
 */
declare const Card: React.FC<CardProps>;

export default Card;
