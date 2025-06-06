import { get, post } from '~/utils/request';

/**
 * 用户登陆
 */

export const getUser = async (params: any) => get('/api/userinfo/login', params);

export const register = (params: any) => post('/api/userinfo/register', params);
