import Vue from 'nativescript-vue';
import App from './components/App';
import store from './store';
import ActivityIndicatorPlugin from 'nativescript-material-activityindicator/vue';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient);
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
Vue.use(ActivityIndicatorPlugin);

new Vue({
    store,
    render: h => h('frame', [h(App)])
}).$start();
