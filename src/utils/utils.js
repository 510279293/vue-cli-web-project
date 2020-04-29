import moment from 'moment';

/* eslint-disable no-useless-escape */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

/**
 * 判断 url 是否合法
 * @param {String} path
 */
export const isUrl = path => reg.test(path);

/**
 * 判断是否浏览器环境
 */
export const isBrowser = () => typeof window !== 'undefined';

function isArray(arg) {
    return Array.isArray(arg);
}


export function isPlainObject(arg) {
    return arg !== null && toString.call(arg) === '[object Object]';
}

/**
 *
 * @param {*} value
 * @description 数组，判断 length，纯对象判断可枚举 length，默认数字为 0 时为空，暂时没扩展 Symbol，Set，Map
 */
export function isEmpty(value) {
    if (isArray(value)) {
        return Boolean(value.length);
    }

    if (isPlainObject(value)) {
        return Object.keys(value).length;
    }

    return Boolean(value);
}

export function isFunction(arg) {
    return toString.call(arg) === '[object Function]';
}

export function format(time = moment(), pattern = 'YYYY-MM-DD') {
    return time.format(pattern);
}

// 转换次数
export function transformDataToFour(data = []) {
    const mapper = data.reduce((prev, next) => {
        let curr = {};
        if (next.name[0] > 3 || /&gt;=/g.test(next.name)) {
            curr = { '4次及以上': Number(next.comparison) + (prev['4次及以上'] || 0) };
        } else {
            curr = { [`${next.name}次`]: Number(next.comparison) };
        }
        return Object.assign(prev, curr);
    }, {});

    const result = Object.keys(mapper).map(key => ({ name: key, value: mapper[key], percent: `${mapper[key].toFixed(2)}%` }));
    result.sort((a, b) => parseInt(a.name, 10) - parseInt(b.name, 10));

    return result;
}

export const localStorage = {
    setItem(name, data) {
        window.localStorage.setItem(name, JSON.stringify(data));
    },
    getItem(name) {
        const current = window.localStorage.getItem(name);
        if (current !== void 0 && current !== null) {
            return JSON.parse(current);
        }

        return null;
    },
    clear() {
        window.localStorage.clear();
    },
};

export function findValueInObjectArray(value, sources = [], compareProperty = 'id') {
    return sources.find(source => source[compareProperty] === value);
}

// 按需加载
export const _import = (file) => () =>
   import('@/pages/' + file + '.vue').then((m) => m.default);