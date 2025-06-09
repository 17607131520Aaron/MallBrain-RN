import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import styles from './App.style';
import { AuthProvider } from './contexts/AuthContext';
import { ComponentProvider } from './contexts/ComponentContext';
import AppRouter from './router';
import { persistor, store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootSiblingParent>
          <ComponentProvider>
            <AuthProvider>
              <SafeAreaView style={styles.container}>
                <AppRouter />
              </SafeAreaView>
            </AuthProvider>
          </ComponentProvider>
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
};

export default App;
