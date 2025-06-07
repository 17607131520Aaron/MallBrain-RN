import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useAuth } from '~/contexts/AuthContext';
import Category from '~/pages/Category';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Service from '~/pages/Service';

// 定义类型
interface IRootStackParamList {
  Main: undefined;
  InstitutionMain: undefined;
  EngineerMain: undefined;
  Login: undefined;
  [key: string]: undefined | object;
}

// 定义机构网点导航栈参数类型
interface IInstitutionStackParamList {
  InstitutionHome: undefined;
  InstitutionDetail: { id: string };
  ProductList: undefined;
  ProductDetail: { id: string };
  ServiceList: undefined;
  ServiceDetail: { id: string };
  [key: string]: undefined | object;
}

// 定义工程师导航栈参数类型
interface IEngineerStackParamList {
  EngineerHome: undefined;
  TaskList: undefined;
  TaskDetail: { id: string };
  ReportForm: { taskId: string };
  [key: string]: undefined | object;
}

interface ITabParamList {
  Home: undefined;
  Category: undefined;
  Service: undefined;
  Cart: undefined;
  Profile: undefined;
  [key: string]: undefined;
}

// 创建导航器
const Stack = createNativeStackNavigator<IRootStackParamList>();
const InstitutionStack = createNativeStackNavigator<IInstitutionStackParamList>();
const EngineerStack = createNativeStackNavigator<IEngineerStackParamList>();
const Tab = createBottomTabNavigator<ITabParamList>();

// 机构网点首页导航栈
const InstitutionHomeStack = (): React.ReactElement => {
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

// 工程师首页导航栈
const EngineerHomeStack = (): React.ReactElement => {
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

// 机构网点Tab导航
const InstitutionTabNavigator: React.FC = () => {
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

// 工程师Tab导航
const EngineerTabNavigator: React.FC = () => {
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

// 根据登录状态渲染不同的路由
const AppRouter: React.FC = () => {
  const { isLoggedIn, isLoading, userRole } = useAuth();

  // 如果正在加载登录状态，可以显示一个加载指示器
  if (isLoading) {
    return null; // 或者返回一个加载组件
  }

  // 获取当前要显示的屏幕组件和名称
  const getScreenConfig = (): { component: React.ComponentType; name: string } => {
    if (!isLoggedIn) {
      return { component: Login, name: 'Login' };
    }

    if (userRole === 'institution') {
      return { component: InstitutionTabNavigator, name: 'InstitutionMain' };
    }

    return { component: EngineerTabNavigator, name: 'EngineerMain' };
  };

  const { component, name } = getScreenConfig();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={component} name={name} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
