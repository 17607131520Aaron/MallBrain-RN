import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-toast-message';

import styles from './App.style';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Service from './pages/Service';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Tab.Navigator
            screenOptions={() => ({
              headerShown: false,
              tabBarActiveTintColor: '#1890ff',
              tabBarInactiveTintColor: '#999',
            })}
          >
            <Tab.Screen
              component={Home}
              name='Home'
              options={{
                title: '首页',
                tabBarLabel: '首页',
              }}
            />
            <Tab.Screen
              component={Category}
              name='Category'
              options={{
                title: '分类',
                tabBarLabel: '分类',
              }}
            />
            <Tab.Screen
              component={Service}
              name='Service'
              options={{
                title: '服务',
                tabBarLabel: '服务',
              }}
            />
            <Tab.Screen
              component={Cart}
              name='Cart'
              options={{
                title: '购物车',
                tabBarLabel: '购物车',
              }}
            />
            <Tab.Screen
              component={Profile}
              name='Profile'
              options={{
                title: '我的',
                tabBarLabel: '我的',
              }}
            />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
      <Toast />
    </RootSiblingParent>
  );
};

export default App;
