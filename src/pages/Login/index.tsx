import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

import { Components } from '~/components';
import { useAuth } from '~/contexts/AuthContext';

import styles from './index.style';

const { Input } = Components;

const Login: React.FC = () => {
  const { login, isLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState('account'); // account 或 qrcode
  const [rememberPassword, setRememberPassword] = useState(true);
  const [agreePolicy, setAgreePolicy] = useState(true);

  const handleLogin = async () => {
    if (username && password) {
      await login(username, password, 'ENGINEER');
    }
  };

  const switchLoginType = (type: string) => {
    setLoginType(type);
  };

  return (
    <LinearGradient colors={['#ff6700', '#ff8e46', '#ffa76c']} style={styles.gradientBackground}>
      <SafeAreaView edges={['top', 'right', 'bottom', 'left']} style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.logoContainer}>
            {/* <Text style={styles.logo}>小</Text> */}
            <Text style={styles.title}>小米账号登录</Text>
            <Text style={styles.subtitle}>欢迎使用小米商城</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  loginType === 'account' && { borderBottomWidth: 2, borderBottomColor: '#ff6700' },
                ]}
                onPress={() => switchLoginType('account')}
              >
                <Text style={[styles.tabText, loginType === 'account' && styles.activeTabText]}>
                  账号登录
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  loginType === 'qrcode' && { borderBottomWidth: 2, borderBottomColor: '#ff6700' },
                ]}
                onPress={() => switchLoginType('qrcode')}
              >
                <Text style={[styles.tabText, loginType === 'qrcode' && styles.activeTabText]}>
                  扫码登录
                </Text>
              </TouchableOpacity>
            </View>

            {loginType === 'account' ? (
              <>
                <View style={styles.inputGroup}>
                  <Input
                    required
                    disabled={loading}
                    placeholder='小米账号/手机号码/邮箱'
                    // prefix={<Icon color={COLORS.gray} name='user' size={20} />}
                    value={username}
                    onChangeText={setUsername}
                  />

                  <Input.Password
                    required
                    disabled={loading}
                    placeholder='密码'
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>

                <View style={styles.checkboxRow}>
                  <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setRememberPassword(!rememberPassword)}
                  >
                    <View style={[styles.checkbox, rememberPassword && styles.checkboxChecked]}>
                      {rememberPassword && <Icon color='#fff' name='check' size={12} />}
                    </View>
                    <Text style={styles.checkboxLabel}>记住密码</Text>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>忘记密码?</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  disabled={!username || !password || loading || !agreePolicy}
                  style={[
                    styles.loginButton,
                    (!username || !password || loading || !agreePolicy) &&
                      styles.loginButtonDisabled,
                  ]}
                  onPress={handleLogin}
                >
                  <Text style={styles.loginButtonText}>{loading ? '登录中...' : '登录'}</Text>
                </TouchableOpacity>

                <View style={styles.policyContainer}>
                  <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setAgreePolicy(!agreePolicy)}
                  >
                    <View style={[styles.checkbox, agreePolicy && styles.checkboxChecked]}>
                      {agreePolicy && <Icon color='#fff' name='check' size={12} />}
                    </View>
                    <Text style={styles.policyText}>
                      已阅读并同意
                      <Text style={styles.policyLink}>《用户协议》</Text>
                      <Text style={styles.policyLink}>《隐私政策》</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={styles.qrcodeContainer}>
                <Icon color='#ff6700' name='qrcode' size={120} />
                <Text style={styles.qrcodeText}>请使用小米商城APP扫描二维码登录</Text>
                <Text style={styles.qrcodeSubText}>小米商城APP - 我的 - 扫一扫</Text>
              </View>
            )}

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
                  <Icon color='#4CAF50' name='wechat' size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Icon color='#2196F3' name='QQ' size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Icon color='#FF9800' name='weibo' size={24} />
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
