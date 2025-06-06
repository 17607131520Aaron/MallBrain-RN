/**
 * 通用类型定义
 */

// 通用响应类型
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
  success: boolean;
}

// 分页数据类型
export interface PaginatedData<T = any> {
  list: T[];
  total: number;
  pageSize: number;
  current: number;
  totalPages: number;
}

// 分页请求参数
export interface PaginationParams {
  pageSize?: number;
  current?: number;
  [key: string]: any;
}
