import React from 'react';
import { StyleSheet, View } from 'react-native';

// 导入需要全局渲染的组件
import Toast from './Toast';

/**
 * 全局组件容器
 * 用于渲染需要全局显示的组件，如Toast、Modal等
 */
const GlobalComponents: React.FC = () => {
  return (
    <View style={styles.container}>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'box-none',
  },
});

export default GlobalComponents;
