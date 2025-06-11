import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { ViewProps } from 'react-native';

export interface CardProps extends ViewProps {
  /**
   * 是否显示阴影
   */
  shadow?: boolean;
  /**
   * 圆角大小
   */
  radius?: number;
}

/**
 * Card组件
 * 一个简单的卡片容器组件
 */
const Card: React.FC<CardProps> = ({ children, style, shadow = true, radius = 8, ...rest }) => {
  return (
    <View
      style={[styles.container, shadow && styles.shadow, { borderRadius: radius }, style]}
      {...rest}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default Card;
