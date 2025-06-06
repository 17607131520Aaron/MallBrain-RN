import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '~/components/Button';
// import { MessageType, showMessage } from '~/utils/message';

import styles from './index.style';
const Home: React.FC = () => {
  const handleConfirm = () => {
  };

  return (
    <View style={styles.container}>
      <Text>首页wasd</Text>
      <View>
        <Button type='error' onPress={handleConfirm} isCustom>
          确定11111
        </Button>
      </View>
    </View>
  );
};

export default Home;
