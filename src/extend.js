import moment from 'moment';
import * as utils from './utils/utils';

export default Vue => {
    Vue.prototype.$utils = {
        ...utils,
        moment,
    };
    Vue.prototype.$EventBus = new Vue();
};
