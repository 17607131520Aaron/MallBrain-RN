import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// 导入全局组件
import GlobalComponents from '~/components/GlobalComponents';

import styles from './App.style';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './router';
import { persistor, store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <RootSiblingParent>
            <AuthProvider>
              <SafeAreaView edges={['right', 'bottom', 'left']} style={styles.container}>
                <AppRouter />
                <GlobalComponents />
              </SafeAreaView>
            </AuthProvider>
          </RootSiblingParent>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
