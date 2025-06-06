import React from 'react';
import { View, Text } from 'react-native';
import Button from '~/components/Button';
import { MessageType, showMessage } from '~/utils/message';

import styles from './index.style';
const Home: React.FC = () => {
  const handleConfirm = () => {
    showMessage({
      message: '提示内容',
      type: MessageType.SUCCESS, // 可选类型
      duration: 3000, // 持续时间
    });
  };

  return (
    <View style={styles.container}>
      <Text>首页wasd</Text>
      <Button type={'primary'} children={'确认录入'} onPress={handleConfirm} />
    </View>
  );
};

export default Home;
