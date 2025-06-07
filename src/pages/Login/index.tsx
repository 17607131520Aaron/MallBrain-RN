import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useAuth } from '~/contexts/AuthContext';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  roleSelector: {
    marginTop: 10,
    marginBottom: 15,
  },
  roleSelectorLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  roleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roleButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  roleButtonSelected: {
    backgroundColor: '#1890ff',
    borderColor: '#1890ff',
  },
  roleButtonText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  roleButtonTextSelected: {
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#1890ff',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  loginButtonDisabled: {
    backgroundColor: '#a6d0fa',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#666',
  },
  registerLink: {
    color: '#1890ff',
    marginLeft: 5,
  },
});

export default Login;
