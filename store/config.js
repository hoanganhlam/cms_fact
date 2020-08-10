export default {
    namespaced: true,
    state: () => ({
        publication: null,
        headData: null
    }),
    mutations: {
        ['SET_PUBLICATION'](state, ct) {
            state.publication = ct
        },
        ['SET_HEAD_DATA'](state, ct) {
            state.headData = ct
        }
    },
    actions: {},
    getters: {}
}
