import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuShow: true
    },
    mutations: {
        changeMenu(state){
            state.menuShow = !state.menuShow;
        }
    },
    actions: {
        changeMenu(context){
            context.commit('changeMenu');
        }
    }
});
