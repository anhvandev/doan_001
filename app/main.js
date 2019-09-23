import Vue from 'nativescript-vue';
import App from './components/App';
import store from './store';
import ActivityIndicatorPlugin from 'nativescript-material-activityindicator/vue';
import RadSideDrawerPlugin from "nativescript-ui-sidedrawer/vue";
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import BottomNavigationBar from 'nativescript-bottom-navigation/vue';
import BubbleNavigation from "nativescript-bubble-navigation/vue";

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient);
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
Vue.registerElement('CardView', () => require('@nstudio/nativescript-cardview').CardView);
Vue.use(ActivityIndicatorPlugin);
Vue.use(RadSideDrawerPlugin);
Vue.use(BottomNavigationBar);
Vue.use(BubbleNavigation);

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    'fa': './assets/css/fontawesome.min.css',
    'fal': './assets/css/light.min.css',
    'far': './assets/css/regular.min.css',
    'fas': './assets/css/solid.min.css',
    'fab': './assets/css/brands.min.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({
    store,
    render: h => h('frame', [h(App)])
}).$start();
