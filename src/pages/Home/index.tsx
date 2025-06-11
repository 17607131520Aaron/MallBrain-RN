import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useAuth } from '~/contexts/AuthContext';

import styles from './index.style';

const Home: React.FC = () => {
  // 使用 any 类型暂时解决导航类型问题
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation() as any;
  const { userRole } = useAuth();

  // 根据用户角色显示不同的内容
  const renderInstitutionContent = (): React.ReactElement => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>快捷操作</Text>
        <View style={styles.buttonGrid}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('InstitutionDetail', { id: '1' })}
          >
            <Text style={styles.buttonText}>网点详情</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProductList')}
          >
            <Text style={styles.buttonText}>查看产品</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProductDetail', { id: '1' })}
          >
            <Text style={styles.buttonText}>产品详情</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>最近订单</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>订单 #12345</Text>
            <Text style={styles.cardDescription}>状态：待处理</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>订单 #12346</Text>
            <Text style={styles.cardDescription}>状态：已完成</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderEngineerContent = (): React.ReactElement => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>任务中心</Text>
        <View style={styles.buttonGrid}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TaskList')}>
            <Text style={styles.buttonText}>任务列表</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TaskDetail', { id: '1' })}
          >
            <Text style={styles.buttonText}>任务详情</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ReportForm', { taskId: '1' })}
          >
            <Text style={styles.buttonText}>提交报告</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>今日任务</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('TaskDetail', { id: '1' })}
          >
            <Text style={styles.cardTitle}>维修任务 #5678</Text>
            <Text style={styles.cardDescription}>地点：北京市朝阳区</Text>
            <Text style={styles.cardTags}>紧急</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('TaskDetail', { id: '2' })}
          >
            <Text style={styles.cardTitle}>安装任务 #5679</Text>
            <Text style={styles.cardDescription}>地点：北京市海淀区</Text>
            <Text style={styles.cardTags}>常规</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>您好！</Text>
        <Text style={styles.welcomeText}>
           欢迎使用 {userRole === 'INSTITUTION' ? '网点管理系统' : '工程师系统'}
        </Text>
      </View>

       {userRole === 'INSTITUTION' ? renderInstitutionContent() : renderEngineerContent()}
    </ScrollView>
  );
};

export default Home;
