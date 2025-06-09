import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ToastView from '~/components/Toast';

import styles from './App.style';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './router';
import { persistor, store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootSiblingParent>
          <AuthProvider>
            <SafeAreaView style={styles.container}>
              <AppRouter />
            </SafeAreaView>
          </AuthProvider>
          <ToastView />
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
};

export default App;
