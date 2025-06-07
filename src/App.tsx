import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-toast-message';

import styles from './App.style';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './router';

const App: React.FC = () => {
  return (
    <RootSiblingParent>
      <AuthProvider>
        <SafeAreaView style={styles.container}>
          <AppRouter />
        </SafeAreaView>
      </AuthProvider>
      <Toast />
    </RootSiblingParent>
  );
};

export default App;
