import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import styles from './App.style';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './router';
import { persist, store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <RootSiblingParent>
          <AuthProvider>
            <SafeAreaView style={styles.container}>
              <AppRouter />
            </SafeAreaView>
          </AuthProvider>
          <Toast />
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
};

export default App;
