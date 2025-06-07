import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Service from '~/pages/Service';

// 定义工程师导航栈参数类型
export interface IEngineerStackParamList {
  EngineerHome: undefined;
  TaskList: undefined;
  TaskDetail: { id: string };
  ReportForm: { taskId: string };
  [key: string]: undefined | object;
}

interface ITabParamList {
  Home: undefined;
  Service: undefined;
  Profile: undefined;
  [key: string]: undefined;
}

// 创建导航器
const EngineerStack = createNativeStackNavigator<IEngineerStackParamList>();
const Tab = createBottomTabNavigator<ITabParamList>();

// 工程师首页导航栈
export const EngineerHomeStack = (): React.ReactElement => {
  return (
    <EngineerStack.Navigator>
      <EngineerStack.Screen
        component={Home}
        name='EngineerHome'
        options={{ title: '工程师首页' }}
      />
      <EngineerStack.Screen
        component={Service} // 这里应该替换为实际的任务列表组件
        name='TaskList'
        options={{ title: '任务列表' }}
      />
      <EngineerStack.Screen
        component={Service} // 这里应该替换为实际的任务详情组件
        name='TaskDetail'
        options={{ title: '任务详情' }}
      />
      <EngineerStack.Screen
        component={Service} // 这里应该替换为实际的报告表单组件
        name='ReportForm'
        options={{ title: '提交报告' }}
      />
    </EngineerStack.Navigator>
  );
};

// 工程师Tab导航
export const EngineerTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#1890ff',
        tabBarInactiveTintColor: '#999',
      })}
    >
      <Tab.Screen
        component={EngineerHomeStack}
        name='Home'
        options={{
          title: '工程师首页',
          tabBarLabel: '首页',
        }}
      />
      <Tab.Screen
        component={Service}
        name='Service'
        options={{
          title: '任务列表',
          tabBarLabel: '任务',
        }}
      />
      <Tab.Screen
        component={Profile}
        name='Profile'
        options={{
          title: '工程师信息',
          tabBarLabel: '我的',
        }}
      />
    </Tab.Navigator>
  );
};
