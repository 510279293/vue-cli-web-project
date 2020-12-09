import request from '@/plugins/request';
import { stringify } from 'qs';

// post
export async function postApi(data: object) {
  return request({
    url: '/api/postUrl',
    method: 'POST',
    data,
  });
}

// get
export async function getApi(data: object) {
  return request({
    url: `/api/getUrl?${stringify(data)}`,
    method: 'GET',
    data,
  });
}
