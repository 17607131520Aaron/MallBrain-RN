import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '~/components/Button';
import ToastView from '~/components/Toast';

import styles from './index.style';

const Service: React.FC = () => (
  <View style={styles.container}>
    <Text>服务</Text>
    <Button
      type='primary'
      onPress={() => {
        // showMessage({
        //   type: EMessageType.SUCCESS,
        //   message: '测试',
        // });
        ToastView.add('测试');
      }}
    >
      <Text>测试</Text>
    </Button>
  </View>
);

export default Service;
