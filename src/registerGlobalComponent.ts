import Vue from 'vue';
import {
  HelloWorld,
} from '@/components';

const components = [
  HelloWorld,
];

components.forEach((component) => {
  Vue.component(component.name, component);
});
