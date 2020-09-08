exports.ids = [2];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7b7cefc0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-index',{attrs:{"res-taxonomy":_vm.res,"res-post":_vm.response,"query":_vm.query}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7b7cefc0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "MasterPageIndex",
  watchQuery: true,

  head() {
    return {
      title: "Push Fact - Interesting Facts - Fun Fact - Random Facts"
    };
  },

  async fetch() {
    this.res = await this.$api['taxonomy'].list({
      taxonomy: "tag"
    });
    this.query.page = this.query.page ? Number.parseInt(this.query.page) : 1;
    await this.$store.commit('config/SET_HEAD_DATA', {
      title: "Daily interesting facts"
    });
    this.response = await this.$api['post'].list(this.query);
  },

  data() {
    return {
      res: {
        results: [],
        count: 0
      },
      query: {},
      response: {
        results: [],
        count: 0
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "386dc31e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map