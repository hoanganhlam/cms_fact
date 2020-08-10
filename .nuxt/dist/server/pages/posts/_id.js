exports.ids = [3];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_id.vue?vue&type=template&id=2a53b6c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-post',{attrs:{"value":_vm.post}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/posts/_id.vue?vue&type=template&id=2a53b6c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_id.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "MasterPagePost",

  async asyncData({
    $api,
    params
  }) {
    return {
      post: await $api['post'].get(params.id)
    };
  },

  head() {
    return {
      title: this.post.title
    };
  }

});
// CONCATENATED MODULE: ./pages/posts/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/posts/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  posts_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a53b6c8",
  "3be013ca"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map