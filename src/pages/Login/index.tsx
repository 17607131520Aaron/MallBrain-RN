import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useAuth } from '~/contexts/AuthContext';

import styles from './index.style';

import type { TUserRole } from '~/contexts/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<TUserRole>('institution');
  const { login, isLoading } = useAuth();

  const handleLogin = async (): Promise<void> => {
    if (username && password) {
      await login(username, password, selectedRole);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.logo} />
        <Text style={styles.title}>MallBrain</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize='none'
          editable={!isLoading}
          placeholder='用户名'
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          secureTextEntry
          editable={!isLoading}
          placeholder='密码'
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.roleSelector}>
          <Text style={styles.roleSelectorLabel}>选择登录角色：</Text>
          <View style={styles.roleButtonsContainer}>
            <TouchableOpacity
              disabled={isLoading}
              style={[
                styles.roleButton,
                selectedRole === 'institution' && styles.roleButtonSelected,
              ]}
              onPress={() => setSelectedRole('institution')}
            >
              <Text
                style={[
                  styles.roleButtonText,
                  selectedRole === 'institution' && styles.roleButtonTextSelected,
                ]}
              >
                机构网点
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={isLoading}
              style={[styles.roleButton, selectedRole === 'engineer' && styles.roleButtonSelected]}
              onPress={() => setSelectedRole('engineer')}
            >
              <Text
                style={[
                  styles.roleButtonText,
                  selectedRole === 'engineer' && styles.roleButtonTextSelected,
                ]}
              >
                工程师
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        disabled={isLoading}
        style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
        onPress={handleLogin}
      >
        {isLoading ? (
          <ActivityIndicator color='#fff' />
        ) : (
          <Text style={styles.loginButtonText}>登录</Text>
        )}
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>还没有账号？</Text>
        <TouchableOpacity disabled={isLoading}>
          <Text style={styles.registerLink}>立即注册</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
