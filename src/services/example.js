import request from '@/plugins/request';
import { stringify } from 'qs';

// post
export async function postApi(params) {
    return request('/api/postUrl', {
        method: 'POST',
        data: params,
    });
}

// get
export async function getApi(params) {
    return request(`/api/getUrl?${stringify(params)}`);
}
