import request from '@/plugins/request';
import { stringify } from 'qs';

// post
export async function postVerCode(params) {
    return request('/openedActivity/sendVerificationCode', {
        method: 'POST',
        data: params,
    });
}

// get
export async function getPrizeList(params) {
    return request(`/openedActivity/lotteryList/${params.activityCode}?${stringify(params)}`, {
        method: 'GET',
        data: params,
    });
}

export async function getLuckydrawResult(params) {
    return request(`/openedActivity/lotteryDraw`, {
        method: 'POST',
        data: params,
    });
}

export async function registerCustomer(params) {
    return request(`/openedActivity/registerCustomer`, {
        method: 'POST',
        data: params,
    });
}
