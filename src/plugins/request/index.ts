import axios from 'axios';
import { Toast } from 'vant';
import { RequestOptions } from './requestInterface';
import successHandler from './successHandler';
import { requestError } from './errorHandler';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api base_url
  timeout: 6000, // 请求超时时间
});

// 添加请求拦截器
service.interceptors.request.use(
  (config: any) => config,
  (error: any) => Promise.reject(error),
);

// 添加响应拦截器
service.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    console.log(error.response);
    const { data } = error.response;
    Toast.fail(`接口响应错误: ${JSON.stringify(data)}`);
    return Promise.reject(error);
  },
);

export default function request<T>(options: RequestOptions): Promise<T> {
  const { url: requestUrl = '', data } = options;
  const newOptions: any = {
    credentials: 'include',
    method: '',
    ...options,
  };

  if (['POST', 'PUT'].includes(newOptions.method)) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(data);
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data',
        ...newOptions.headers,
      };
    }
  }

  return service(requestUrl, newOptions)
    .then((response: any) => response.data)
    .then((source: RequestOptions) => successHandler(source, newOptions))
    .catch((error: any) => requestError(error, newOptions));
}
