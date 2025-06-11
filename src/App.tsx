import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
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
        <SafeAreaProvider>
          <RootSiblingParent>
            <ComponentProvider>
              <AuthProvider>
                <SafeAreaView edges={['right', 'bottom', 'left']} style={styles.container}>
                  <AppRouter />
                </SafeAreaView>
              </AuthProvider>
            </ComponentProvider>
          </RootSiblingParent>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
