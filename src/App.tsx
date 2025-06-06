import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Category from './pages/Category';
import Service from './pages/Service';
import Cart from './pages/Cart';
import styles from './App.style';

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
              name={'Home'}
              component={Home}
              options={{
                title: '首页',
                tabBarLabel: '首页',
              }}
            />
            <Tab.Screen
              name={'Category'}
              component={Category}
              options={{
                title: '分类',
                tabBarLabel: '分类',
              }}
            />
            <Tab.Screen
              name={'Service'}
              component={Service}
              options={{
                title: '服务',
                tabBarLabel: '服务',
              }}
            />
            <Tab.Screen
              name={'Cart'}
              component={Cart}
              options={{
                title: '购物车',
                tabBarLabel: '购物车',
              }}
            />
            <Tab.Screen
              name={'Profile'}
              component={Profile}
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
