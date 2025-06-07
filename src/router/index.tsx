import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useAuth } from '~/contexts/AuthContext';
import Login from '~/pages/Login';
import { EngineerTabNavigator as EngineerTab } from '~/router/engineer';
import { InstitutionTabNavigator as InstitutionTab } from '~/router/institution';

// 定义根导航栈类型
interface IRootStackParamList {
  Main: undefined;
  InstitutionMain: undefined;
  EngineerMain: undefined;
  Login: undefined;
  [key: string]: undefined | object;
}

// 创建根导航器
const Stack = createNativeStackNavigator<IRootStackParamList>();

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
      return { component: InstitutionTab, name: 'InstitutionMain' };
    }

    return { component: EngineerTab, name: 'EngineerMain' };
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
