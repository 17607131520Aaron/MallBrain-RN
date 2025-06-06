import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '~/components/Button';

import styles from './index.style';
const Home: React.FC = () => {
  const handleConfirm = () => {};

  return (
    <View style={styles.container}>
      <Text>首页wasd</Text>
      <View>
        <Button isCustom type='error' onPress={handleConfirm}>
          确定11111
        </Button>
      </View>
    </View>
  );
};

export default Home;
