import Vue from 'vue';
import App from './App.vue';
import Vuex from "vuex";
import {PublicV1alpha} from "tiny-blog-api";

Vue.config.productionTip = false;
Vue.use(Vuex);

const backend = {
    host: "localhost",
    port: "3000",
    ssl: false
};

const store = new Vuex.Store({
    state: {
        blogEntries: [],
        tags: []
    },
    mutations: {
        replaceBlogEntries(state, newEntries) {
            state.blogEntries = newEntries;
        },
        replaceTags(state, newTags) {
            state.tags = newTags;
        }
    },
    getters: {
        displayedBlogEntries(state) {
            return state.blogEntries;
        },
        displayedTags(state) {
            return state.tags;
        }
    },
    actions: {
        fetchTags(context) {
            PublicV1alpha.client(
                backend.host,
                backend.port,
                backend.ssl
            ).Tag.view.all().fork(
                () => {},  // TODO
                tags => context.commit("replaceTags", tags)
            );
        }
    }
});

new Vue({
    render: h => h(App),
    store
}).$mount('#app');
