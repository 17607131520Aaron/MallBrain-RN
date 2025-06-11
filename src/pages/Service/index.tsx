import React from 'react';
import { Text, View } from 'react-native';

import { Button, Toast } from '~/components';

import styles from './index.style';

const Service: React.FC = () => (
  <View style={styles.container}>
    <Text>服务</Text>
    <Button
      type='primary'
      onPress={() => {
        Toast.success('操作成功');
        Toast.error('操作失败');
        Toast.info('这是一条普通提示消息');
        Toast.warn('这是一条警告提示消息');
      }}
    >
      <Text>测试</Text>
    </Button>
  </View>
);

export default Service;
