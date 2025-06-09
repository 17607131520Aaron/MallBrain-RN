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
import Modal from 'react-native-modal';

import { useAuth } from '~/contexts/AuthContext';

import styles from './index.style';

import type { TUserRole } from '~/contexts/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<TUserRole>('institution');
  const [isRoleModalVisible, setRoleModalVisible] = useState(false);
  const { login, isLoading } = useAuth();

  const handleLogin = async (): Promise<void> => {
    if (username && password) {
      await login(username, password, selectedRole);
    }
  };

  const toggleRoleModal = (): void => {
    setRoleModalVisible(!isRoleModalVisible);
  };

  const selectRole = (role: TUserRole): void => {
    setSelectedRole(role);
    toggleRoleModal();
  };

  const getRoleLabel = (role: TUserRole): string => {
    switch (role) {
      case 'institution':
        return '机构网点';
      case 'engineer':
        return '工程师';
      case 'inventory':
        return '库管';
      default:
        return '选择角色';
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
          <TouchableOpacity
            disabled={isLoading}
            style={styles.roleDropdown}
            onPress={toggleRoleModal}
          >
            <Text style={styles.roleDropdownText}>{getRoleLabel(selectedRole)}</Text>
          </TouchableOpacity>
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

      <Modal isVisible={isRoleModalVisible} onBackdropPress={toggleRoleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>选择角色</Text>
          <TouchableOpacity style={styles.modalOption} onPress={() => selectRole('institution')}>
            <Text style={styles.modalOptionText}>机构网点</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => selectRole('engineer')}>
            <Text style={styles.modalOptionText}>工程师</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => selectRole('inventory')}>
            <Text style={styles.modalOptionText}>库管</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Login;
