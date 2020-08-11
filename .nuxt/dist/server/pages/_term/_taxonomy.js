exports.ids = [1];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_term/_taxonomy.vue?vue&type=template&id=cab47de2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-archive',{attrs:{"value":_vm.taxonomy,"response":_vm.response,"query":_vm.query}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_term/_taxonomy.vue?vue&type=template&id=cab47de2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_term/_taxonomy.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var _taxonomyvue_type_script_lang_js_ = ({
  name: "MasterPageTaxonomy",
  watchQuery: true,

  async asyncData({
    $api,
    params,
    query,
    store
  }) {
    let taxonomy = await $api['taxonomy'].get(params.taxonomy, {
      taxonomy: params.term
    });
    query.page = query.page ? Number.parseInt(query.page) : 1;
    query.taxonomies = taxonomy.id;
    await store.commit('config/SET_HEAD_DATA', {
      title: `${taxonomy.taxonomy} : ${taxonomy.term.title} Facts`
    });
    return {
      taxonomy,
      query,
      response: await $api['post'].list(query)
    };
  },

  head() {
    let title = this.taxonomy.term.title;

    if (this.taxonomy.taxonomy === "object") {
      title = `${title} Facts - Interesting Facts`;
    } else {
      title = `#${title} - Interesting Facts`;
    }

    return {
      title: title
    };
  }

});
// CONCATENATED MODULE: ./pages/_term/_taxonomy.vue?vue&type=script&lang=js&
 /* harmony default export */ var _term_taxonomyvue_type_script_lang_js_ = (_taxonomyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_term/_taxonomy.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _term_taxonomyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cab47de2",
  "a2661d90"
  
)

/* harmony default export */ var _taxonomy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_taxonomy.js.map