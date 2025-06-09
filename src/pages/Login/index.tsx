import React, { useRef, useState } from 'react';
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
import SelectDropdown from 'react-native-select-dropdown';

import { useAuth } from '~/contexts/AuthContext';

import { institution, LoginInstitutionEnum } from './data';
import styles from './index.style';

import type { TUserRole } from '~/contexts/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<TUserRole>(institution);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { login, isLoading } = useAuth();
  const dropdownRef = useRef<SelectDropdown>(null);

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
          <View style={styles.dropdownContainer}>
            <SelectDropdown
              ref={dropdownRef}
              statusBarTranslucent
              data={LoginInstitutionEnum}
              disabled={isLoading}
              dropdownStyle={styles.dropdown}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={[styles.pcDropdown, isOpened && styles.pcDropdownOpen]}>
                    <Text style={styles.pcDropdownText}>
                      {selectedItem ? selectedItem.title : '请选择'}
                    </Text>
                    <Text style={styles.pcDropdownIcon}>{isOpened ? '▲' : '▼'}</Text>
                  </View>
                );
              }}
              renderItem={(item: { title: string; value: string }) => {
                return (
                  <View style={styles.pcDropdownItem}>
                    <Text style={styles.pcDropdownItemText}>{item.title}</Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              onBlur={() => setIsDropdownOpen(false)}
              onFocus={() => setIsDropdownOpen(true)}
              onSelect={(selectedItem) => {
                setSelectedRole(selectedItem.value);
              }}
            />
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
