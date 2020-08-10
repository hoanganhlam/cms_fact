<template>
    <page-archive :value="taxonomy" :response="response" :query="query"/>
</template>

<script>
    export default {
        name: "MasterPageTaxonomy",
        watchQuery: true,
        async asyncData({$api, params, query, store}) {
            let taxonomy = await $api['taxonomy'].get(params.taxonomy, {taxonomy: params.term});
            query.page = query.page ? Number.parseInt(query.page) : 1;
            query.taxonomies = taxonomy.id;
            await store.commit('config/SET_HEAD_DATA', {
                title: `${taxonomy.taxonomy} : ${taxonomy.term.title} Facts`
            });
            return {
                taxonomy,
                query,
                response: await $api['post'].list(query)
            }
        },
        head() {
            let title = this.taxonomy.term.title;
            if (this.taxonomy.taxonomy === "object") {
                title = `${title} Facts - Interesting Facts`
            } else {
                title = `#${title} - Interesting Facts`
            }
            return {
                title: title
            }
        }
    }
</script>

<style scoped>

</style>
