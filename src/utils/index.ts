import moment from 'moment';

/* eslint-disable no-useless-escape */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

/**
 * 判断 url 是否合法
 * @param {String} path
 */
export const isUrl = (path: string) => reg.test(path);

/**
 * 判断是否浏览器环境
 */
export const isBrowser = () => typeof window !== 'undefined';

function isArray(arg: any) {
  return Array.isArray(arg);
}

export function isPlainObject(arg: any) {
  return arg !== null && toString.call(arg) === '[object Object]';
}

/**
 *
 * @param {*} value
 * @description 数组，判断 length，纯对象判断可枚举 length，默认数字为 0 时为空，暂时没扩展 Symbol，Set，Map
 */
export function isEmpty(value: any) {
  if (isArray(value)) {
    return Boolean(value.length);
  }

  if (isPlainObject(value)) {
    return Object.keys(value).length;
  }

  return Boolean(value);
}

export function isFunction(arg: any) {
  return toString.call(arg) === '[object Function]';
}

export function format(time = moment(), pattern = 'YYYY-MM-DD') {
  return time.format(pattern);
}

export const localStorage = {
  setItem(name: string, data: any) {
    window.localStorage.setItem(name, JSON.stringify(data));
  },
  getItem(name: string) {
    const current = window.localStorage.getItem(name);
    if (current !== undefined && current !== null) {
      return JSON.parse(current);
    }

    return null;
  },
  clear() {
    window.localStorage.clear();
  },
};

//
// export const _import = (file) => () => import(`@/views/${file}.vue`).then((m) => m.default);

export const regTest = {
  phoneReg: new RegExp(/^1[3456789]\d{9}$/),
  emailReg: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/),
  userNameReg: new RegExp(/(^([\u4e00-\u9fa5a-zA-Z\d+]+)$)/),
  // 密码至少包含英文、数字、符号中的两种
  // pwdReg: new RegExp(/(?!^(\d+|[a-zA-Z]+|[!@#$%^&*]+)$)^[\w!@#$%^&*?]{6,20}$/),
  // 只可输入英文、数字或组合
  pwdReg: new RegExp(/(^([a-zA-Z\d+]+)$)/), // 密码正则校验
  prdCodeReg: new RegExp(/^\d{5}$/), // 产品编码正则校验
  doubleNum: new RegExp(/^[0-9]+(.[0-9]{1,2})?$/), // 非负整数(2位小数)
  idCardNum: new RegExp(/^(\d{18,18}|\d{15,15}|\d{17,17}X)$/), // 身份证号码
};
