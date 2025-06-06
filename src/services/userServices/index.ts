import { get, post } from '~/utils/request';

/**
 * 用户登陆
 */

export const getUser = async (params: any) =>
  get({
    url: '/api/userinfo/login',
    data: params,
  });

export const register = (params: any) =>
  post({
    url: '/api/userinfo/register',
    data: params,
  });
