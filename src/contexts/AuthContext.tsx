import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

import type { ReactNode } from 'react';

// 用户角色类型
export type TUserRole = 'institution' | 'engineer';

interface IAuthContextData {
  isLoggedIn: boolean;
  login: (username: string, password: string, role: TUserRole) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
  userRole: TUserRole | null;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<TUserRole | null>(null);

  useEffect(() => {
    // 检查存储的登录状态
    const checkLoginStatus = async (): Promise<void> => {
      try {
        const storedLoginStatus = await AsyncStorage.getItem('@auth:isLoggedIn');
        const storedUserRole = (await AsyncStorage.getItem('@auth:userRole')) as TUserRole | null;

        setIsLoggedIn(storedLoginStatus === 'true');
        setUserRole(storedUserRole);
      } catch (error) {
        console.error('Failed to get login status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  const login = async (username: string, password: string, role: TUserRole): Promise<boolean> => {
    try {
      setIsLoading(true);
      // 这里应该添加实际的登录API调用
      // 模拟API调用
      if (username && password) {
        // 存储登录状态和用户角色
        await AsyncStorage.setItem('@auth:isLoggedIn', 'true');
        await AsyncStorage.setItem('@auth:username', username);
        await AsyncStorage.setItem('@auth:userRole', role);

        setIsLoggedIn(true);
        setUserRole(role);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      // 清除存储的登录状态
      await AsyncStorage.multiRemove(['@auth:isLoggedIn', '@auth:username', '@auth:userRole']);
      setIsLoggedIn(false);
      setUserRole(null);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isLoading, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default AuthContext;
