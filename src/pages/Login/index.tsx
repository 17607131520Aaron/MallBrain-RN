import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

import { Components } from '~/components';
import { COLORS } from '~/constants/colors';
import { useAuth } from '~/contexts/AuthContext';

import styles from './index.style';

const { Input } = Components;

const Login: React.FC = () => {
  const { login, isLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberPassword, setIsRememberPassword] = useState(true);
  const [isAgreePolicy, setIsAgreePolicy] = useState(true);

  const handleLogin = async (): Promise<void> => {
    if (username && password) {
      await login(username, password, 'ENGINEER');
    }
  };

  return (
    <LinearGradient
      colors={[COLORS.orange, '#ff8e46', '#ffa76c']}
      style={styles.gradientBackground}
    >
      <SafeAreaView edges={['top', 'right', 'bottom', 'left']} style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>小</Text>
            <Text style={styles.subtitle}>欢迎使用小米商城</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.inputGroup}>
              <Input
                required
                disabled={isLoading}
                placeholder='账号/手机号码/邮箱'
                value={username}
                onChangeText={setUsername}
              />

              <Input.Password
                required
                disabled={isLoading}
                placeholder='密码'
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.checkboxRow}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setIsRememberPassword(!isRememberPassword)}
              >
                <View style={[styles.checkbox, isRememberPassword && styles.checkboxChecked]}>
                  {isRememberPassword && <Icon color={COLORS.white} name='check' size={12} />}
                </View>
                <Text style={styles.checkboxLabel}>记住密码</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>忘记密码?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              disabled={!username || !password || isLoading || !isAgreePolicy}
              style={[
                styles.loginButton,
                (!username || !password || isLoading || !isAgreePolicy) &&
                  styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>{isLoading ? '登录中...' : '登录'}</Text>
            </TouchableOpacity>

            <View style={styles.policyContainer}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setIsAgreePolicy(!isAgreePolicy)}
              >
                <View style={[styles.checkbox, isAgreePolicy && styles.checkboxChecked]}>
                  {isAgreePolicy && <Icon color={COLORS.white} name='check' size={12} />}
                </View>
                <Text style={styles.policyText}>
                  已阅读并同意
                  <Text style={styles.policyLink}>《用户协议》</Text>
                  <Text style={styles.policyLink}>《隐私政策》</Text>
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>还没有账号?</Text>
              <TouchableOpacity>
                <Text style={styles.registerText}>立即注册</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.otherLoginOptions}>
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>其他登录方式</Text>
                <View style={styles.dividerLine} />
              </View>

              <View style={styles.socialButtons}>
                <TouchableOpacity style={styles.socialButton}>
                  <Icon color={COLORS.social.wechat} name='wechat' size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Icon color={COLORS.social.qq} name='QQ' size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Icon color={COLORS.social.weibo} name='weibo' size={24} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
