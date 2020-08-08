import Vue from "vue";
import Single from "./Single";
import Page from "./Page";
import Index from "./Index.vue"
import Archive from "./Archive";
import PartialHeader from "./partials/Header";
import PartialFooter from "./partials/Footer";

Vue.component('partial-header', PartialHeader);
Vue.component('partial-footer', PartialFooter);
Vue.component('page-post', Single);
Vue.component('page-page', Page);
Vue.component('page-index', Index);
Vue.component('page-archive', Archive);

