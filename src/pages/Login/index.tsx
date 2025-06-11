import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import { Components } from '~/components';
import Input from '~/components/Input';
import { COLORS } from '~/constants/colors';
import { useAuth } from '~/contexts/AuthContext';

import styles from './index.style';

// const { Input } = Components;

const Login: React.FC = () => {
  const { login, isLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreePolicy, setIsAgreePolicy] = useState(true);
  const [userRole, setUserRole] = useState('ENGINEER');

  const handleLogin = async (): Promise<void> => {
    if (username && password) {
      await login(username, password, userRole as any);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top', 'right', 'left']} style={styles.safeArea}>
        {/* 顶部导航 */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons color={COLORS.white} name='arrow-back' size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpText}>帮助</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          {/* 小米Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>mi</Text>
            </View>
            <Text style={styles.title}>小米账号登录</Text>
          </View>

          {/* 输入表单 */}
          <View style={styles.inputContainer}>
            <Input
              disabled={isLoading}
              placeholder='邮箱/手机号码/小米ID'
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            />

            <Input.Password
              disabled={isLoading}
              placeholder='密码'
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* 用户协议 */}
          <View style={styles.policyContainer}>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setIsAgreePolicy(!isAgreePolicy)}>
                <View style={[styles.checkbox, isAgreePolicy && styles.checkboxChecked]}>
                  {isAgreePolicy && <Icon color={COLORS.white} name='check' size={12} />}
                </View>
              </TouchableOpacity>
              <Text style={styles.policyText}>
                已阅读并同意
                <Text style={styles.policyLink}>《小米商城用户协议》</Text>
                <Text style={styles.policyLink}>《小米商城隐私政策》</Text>、
                <Text style={styles.policyLink}>《小米账号用户协议》</Text>
                <Text style={styles.policyLink}>《小米账号隐私政策》</Text>
              </Text>
            </View>
          </View>

          {/* 登录按钮 */}
          <TouchableOpacity
            disabled={!username || !password || isLoading || !isAgreePolicy}
            style={[
              styles.loginButton,
              (!username || !password || isLoading || !isAgreePolicy) && styles.loginButtonDisabled,
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>{isLoading ? '登录中...' : '登录'}</Text>
          </TouchableOpacity>

          {/* 底部链接 */}
          <View style={styles.bottomLinks}>
            <Text style={styles.bottomLinkText}>注册</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.bottomLinkText}>忘记密码</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.bottomLinkText}>手机号登录</Text>
          </View>

          {/* 其他登录方式 */}
          <View style={styles.otherLoginSection}>
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
      </SafeAreaView>
    </View>
  );
};

export default Login;
