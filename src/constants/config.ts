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
  storagePrefix: '@MallBrain:',
  tokenKey: '@MallBrain:token',
  userKey: '@MallBrain:user',
  maxRetryCount: 3,
};
