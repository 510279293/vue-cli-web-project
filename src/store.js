import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modules = {};

// 解析 ‘models’ 目录 model.js 文件为带命名空间的模块
const pageModel = require.context('./pages', true, /model.js$/);
const globalModel = require.context('./models', false, /\.js$/);

pageModel.keys().forEach(key => {
    const dirs = key.replace(/(\.\/|\/model.js)/g, '').split('/');
    modules[dirs[dirs.length - 1]] = {
        namespaced: true,
        ...pageModel(key).default,
    }
})

globalModel.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g), ''] = {
        namespaced: true,
        ...globalModel(key).default
    }
})

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules,
})