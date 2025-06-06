import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '~/components/Button';

import styles from './index.style';

const Home: React.FC = () => {
  const handleConfirm = (): void => {};

  return (
    <View style={styles.container}>
      <Text>首页wasd</Text>
      <View>
        <Button isCustom type='error' onPress={handleConfirm}>
          <Text>保存按钮</Text>
        </Button>
      </View>
    </View>
  );
};

export default Home;
