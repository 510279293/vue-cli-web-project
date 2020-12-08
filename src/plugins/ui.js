/*
 项目所用的 ui 组件库
*/
import Vue from 'vue';
import 'vant/lib/index.css';
import { 
    Toast,
    Button,
    Cell,
    CellGroup,
    Icon,
    Popup,
    Col,
    Row,
    NoticeBar,
    Swipe,
    SwipeItem,
    Image as VanImage,
    Overlay,
    Form,
    Field,
    Dialog,
} from 'vant';

Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(NoticeBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Overlay)
Vue.use(Field)
Vue.use(Form)
Vue.use(Dialog)
Vue.prototype.$Toast = Toast

