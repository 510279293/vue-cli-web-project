import request from '@/plugins/request';
import { stringify } from 'qs';

// post
export async function postVerCode(params) {
    return request('/account/info/sendVerificationCode', {
        method: 'POST',
        data: params,
    });
}

// get
export async function getQuan(params) {
    return request(`/openedCoupon/registerAndAcquire?${stringify(params)}`, {
        method: 'GET',
        data: params,
    });
}

