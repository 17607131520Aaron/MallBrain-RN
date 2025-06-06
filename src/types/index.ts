// 通用响应类型
export interface IApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
  success: boolean;
}

// 分页数据类型
export interface IPaginatedData<T = unknown> {
  list: T[];
  total: number;
  pageSize: number;
  current: number;
  totalPages: number;
}

// 分页请求参数
export interface IPaginationParams {
  pageSize?: number;
  current?: number;
  [key: string]: unknown;
}
