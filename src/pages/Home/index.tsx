import React from 'react';
import { View, Text } from 'react-native';
import Button from '~/components/Button';
import { MessageType, showMessage } from '~/utils/message';
import styles from './index.style';
const Home: React.FC = () => {
  const handleConfirm = () => {
    showMessage({
      type: MessageType.ERROR,
      message: '确认录入',
    });
  };

  return (
    <View style={styles.container}>
      <Text>首页asdasd</Text>

      <Button type='primary' children='确认录入' onPress={handleConfirm} />
    </View>
  );
};

export default Home;
