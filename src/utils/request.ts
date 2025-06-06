import request, { InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { showMessage, MessageType } from './message';

// 响应数据接口
interface IResponse<T = unknown> {
  code: number;
  data: T;
  message: string;
}

// 错误消息接口
interface IErrorMessage {
  message: string;
  description: string;
  action?: () => void;
}

// 请求配置接口
interface IRequestConfig<T> {
  url: string;
  data?: T;
  handleRaw?: boolean;
  timeout?: number;
  cancelToken?: AbortController;
  retry?: number;
}

// 统一错误处理
const handleError = (status: number, data: IResponse) => {
  const errorMessages: Record<number, IErrorMessage> = {
    401: {
      message: '提示',
      description: '登录超时，请重新登录',
      action: () => (window.location.href = '/login'),
    },
    403: {
      message: '权限错误',
      description: '您没有权限访问该资源',
    },
    404: {
      message: '系统提示',
      description: '访问地址不存在，请联系管理员',
    },
    500: {
      message: '系统错误',
      description: data?.message || '服务器内部错误',
    },
  };

  const error = errorMessages[status] || {
    message: '错误',
    description: data?.message || '系统异常',
  };

  showMessage({
    type: MessageType.ERROR,
    message: error.description,
  });

  if (error.action) {
    error.action();
  }
};

// 统一响应处理
const parse = <R>(res: AxiosResponse, params: { handleRaw: boolean }): R => {
  const { status, data } = res;
  const { handleRaw } = params;

  if (status === 200) {
    if (handleRaw) {
      return data as R;
    }
    if (data.code === 0) {
      return data.data as R;
    }
    handleError(status, data);
    return data.data as R;
  }

  handleError(status, data);
  return data.data as R;
};


const instance = request.create({
  timeout: 5000,
  baseURL: 'http://127.0.0.1:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;
      handleError(status, data as IResponse);
    } else if (error.request) {

      showMessage({
        type: MessageType.WARNING,
        message: '网络错误',
      });
    } else {
      showMessage({
        type: MessageType.ERROR,
        message: '请求错误',
      });
    }
    return Promise.reject(error);
  },
);

const requestMethod = async <T, R>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  config: IRequestConfig<T>,
): Promise<R> => {
  const { retry = 0 } = config;
  let attempts = 0;

  while (attempts <= retry) {
    try {
      const { url, data, handleRaw, timeout = 5000, cancelToken } = config;
      const response = await instance({
        method,
        url,
        [method === 'GET' ? 'params' : 'data']: data,
        timeout,
        signal: cancelToken?.signal,
      });
      return parse<R>(response, { handleRaw: !!handleRaw });
    } catch (error) {
      attempts++;
      if (attempts > retry) {
        return Promise.reject(error);
      }
    }
  }

  throw new Error('请求失败，已达到最大重试次数');
};

const get = <T, R>(config: IRequestConfig<T>): Promise<R> => requestMethod<T, R>('GET', config);

const post = <T, R>(config: IRequestConfig<T>): Promise<R> => requestMethod<T, R>('POST', config);

const put = <T, R>(config: IRequestConfig<T>): Promise<R> => requestMethod<T, R>('PUT', config);

const del = <T, R>(config: IRequestConfig<T>): Promise<R> => requestMethod<T, R>('DELETE', config);

export { get, post, put, del };
