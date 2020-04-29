import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';

const components = [
    HelloWorld,
]

components.forEach(component => {
    Vue.component(component.name, component);
})
