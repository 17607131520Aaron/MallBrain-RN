import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useAuth } from '~/contexts/AuthContext';

const Profile: React.FC = () => {
  const { logout } = useAuth();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async (): Promise<void> => {
      try {
        const storedUsername = await AsyncStorage.getItem('@auth:username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error('Failed to get username:', error);
      }
    };

    fetchUsername();
  }, []);

  const handleLogout = async (): Promise<void> => {
    await logout();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
        <Text style={styles.username}>{username || '用户'}</Text>
        <Text style={styles.subtitle}>会员</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>我的订单</Text>
        <View style={styles.orderOptions}>
          <View style={styles.orderOption}>
            <Text style={styles.orderOptionText}>待付款</Text>
          </View>
          <View style={styles.orderOption}>
            <Text style={styles.orderOptionText}>待发货</Text>
          </View>
          <View style={styles.orderOption}>
            <Text style={styles.orderOptionText}>待收货</Text>
          </View>
          <View style={styles.orderOption}>
            <Text style={styles.orderOptionText}>已完成</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>我的服务</Text>
        <View style={styles.serviceOptions}>
          <View style={styles.serviceOption}>
            <Text style={styles.serviceOptionText}>收货地址</Text>
          </View>
          <View style={styles.serviceOption}>
            <Text style={styles.serviceOptionText}>优惠券</Text>
          </View>
          <View style={styles.serviceOption}>
            <Text style={styles.serviceOptionText}>客服中心</Text>
          </View>
          <View style={styles.serviceOption}>
            <Text style={styles.serviceOptionText}>设置</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>退出登录</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#1890ff',
    padding: 20,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  orderOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderOption: {
    alignItems: 'center',
    width: '25%',
  },
  orderOptionText: {
    marginTop: 5,
    fontSize: 14,
  },
  serviceOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceOption: {
    alignItems: 'center',
    width: '25%',
    marginBottom: 20,
  },
  serviceOptionText: {
    marginTop: 5,
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 30,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ff4d4f',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Profile;
