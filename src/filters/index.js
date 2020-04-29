/* eslint-disable require-jsdoc */
import moment from 'moment';
import numeral from 'numeral';

// 格式化日期
export function dateTime(val, format = 'YYYY-MM-DD') {
  if (!val) return '-';
  return moment(parseInt(val, 10)).format(format);
}

export function toThousands(val) {
  if (!val) return '-';
  return numeral(val).format('0,0');
}

export function numberToPercent(val) {
  if (!val) return '-';
  return `${(val * 100).toFixed(2)}%`;
}

export function numberToPrice(val) {
  if (!val) return '-';
  return `¥ ${(val * 1).toFixed(2)}`;
}

export function numberToWan(val) {
  if (!val) return '0.00';
  if (val > 10000) {
    return numeral(val / 10000).format('0,0.00');
  }
  return numeral(val).format('0,0.00');
}