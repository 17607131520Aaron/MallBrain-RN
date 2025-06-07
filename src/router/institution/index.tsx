import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Category from '~/pages/Category';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Service from '~/pages/Service';

// 定义机构网点导航栈参数类型
export interface IInstitutionStackParamList {
  InstitutionHome: undefined;
  InstitutionDetail: { id: string };
  ProductList: undefined;
  ProductDetail: { id: string };
  ServiceList: undefined;
  ServiceDetail: { id: string };
  [key: string]: undefined | object;
}

interface ITabParamList {
  Home: undefined;
  Category: undefined;
  Service: undefined;
  Profile: undefined;
  [key: string]: undefined;
}

// 创建导航器
const InstitutionStack = createNativeStackNavigator<IInstitutionStackParamList>();
const Tab = createBottomTabNavigator<ITabParamList>();

// 机构网点首页导航栈
export const InstitutionHomeStack = (): React.ReactElement => {
  return (
    <InstitutionStack.Navigator>
      <InstitutionStack.Screen
        component={Home}
        name='InstitutionHome'
        options={{ title: '网点首页' }}
      />
      <InstitutionStack.Screen
        component={Home} // 这里应该替换为实际的详情页面组件
        name='InstitutionDetail'
        options={{ title: '网点详情' }}
      />
      <InstitutionStack.Screen
        component={Category} // 这里应该替换为实际的产品列表组件
        name='ProductList'
        options={{ title: '产品列表' }}
      />
      <InstitutionStack.Screen
        component={Category} // 这里应该替换为实际的产品详情组件
        name='ProductDetail'
        options={{ title: '产品详情' }}
      />
    </InstitutionStack.Navigator>
  );
};

// 机构网点Tab导航
export const InstitutionTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#1890ff',
        tabBarInactiveTintColor: '#999',
      })}
    >
      <Tab.Screen
        component={InstitutionHomeStack}
        name='Home'
        options={{
          title: '网点首页',
          tabBarLabel: '首页',
        }}
      />
      <Tab.Screen
        component={Category}
        name='Category'
        options={{
          title: '产品管理',
          tabBarLabel: '产品',
        }}
      />
      <Tab.Screen
        component={Service}
        name='Service'
        options={{
          title: '服务管理',
          tabBarLabel: '服务',
        }}
      />
      <Tab.Screen
        component={Profile}
        name='Profile'
        options={{
          title: '网点信息',
          tabBarLabel: '我的',
        }}
      />
    </Tab.Navigator>
  );
};
