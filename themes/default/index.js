import Vue from "vue";
import Single from "./Single";
import Page from "./Page";
import Index from "./Index.vue"
import Archive from "./Archive";
import PartialHeader from "./partials/Header";
import PartialFooter from "./partials/Footer";
import Content from "./Template/Content";
import CommentForm from "./partials/CommentForm";
import Comment from "./partials/Comment";
import {Table, Input, Field, Icon, Checkbox} from 'buefy';

Vue.component('partial-header', PartialHeader);
Vue.component('partial-footer', PartialFooter);
Vue.component('page-post', Single);
Vue.component('page-page', Page);
Vue.component('page-index', Index);
Vue.component('page-archive', Archive);
Vue.component('template-content', Content);
Vue.component('comment-form', CommentForm);
Vue.component('comment', Comment);

Vue.use(Table);
Vue.use(Input);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Checkbox);
