import { get, post } from '~/utils/request';

import type { IApiResponse } from '~/types';

/**
 * 用户登陆
 */

export interface IUserLoginParams {
  username: string;
  password: string;
}

export interface IUserInfo {
  id: string;
  username: string;
  avatar?: string;
  email?: string;
  role: string;
}

export const getUser = async (params: IUserLoginParams): Promise<IApiResponse<IUserInfo>> =>
  get({
    url: '/api/userinfo/login',
    data: params,
  });

export interface IRegisterParams {
  username: string;
  password: string;
  email?: string;
}

export const register = (params: IRegisterParams): Promise<IApiResponse<IUserInfo>> =>
  post({
    url: '/api/userinfo/register',
    data: params,
  });
