// API配置
interface IApiConfig {
  baseURL: string;
  timeout: number;
}

// 环境配置
interface IEnvironmentConfig {
  dev: IApiConfig;
  test: IApiConfig;
  prod: IApiConfig;
}

// 当前环境
const ENV = process.env.NODE_ENV ?? 'development';

// API配置
export const API_CONFIG: IEnvironmentConfig = {
  dev: {
    baseURL: 'http://localhost:5000',
    timeout: 5000,
  },
  test: {
    baseURL: 'https://test-api.mallbrain.com',
    timeout: 8000,
  },
  prod: {
    baseURL: 'https://api.mallbrain.com',
    timeout: 10000,
  },
};

// 获取当前环境的API配置
export const getApiConfig = (): IApiConfig => {
  switch (ENV) {
    case 'production':
      return API_CONFIG.prod;
    case 'test':
      return API_CONFIG.test;
    default:
      return API_CONFIG.dev;
  }
};

// 其他全局配置
export const APP_CONFIG = {
  // 应用存储前缀，用于区分应用在本地存储中的数据，避免与其他应用冲突
  storagePrefix: '@MallBrain:',
  // 用户令牌的存储键名，用于在本地存储中保存用户的登录凭证
  tokenKey: '@MallBrain:token',
  // 用户信息的存储键名，用于在本地存储中保存用户的基本信息
  userKey: '@MallBrain:user',
  // 网络请求最大重试次数，当请求失败时，系统会在达到此次数前自动重试
  maxRetryCount: 3,
};
