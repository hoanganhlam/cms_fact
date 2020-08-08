<template>
    <page-archive :value="taxonomy" :response="response" :query="query"/>
</template>

<script>
    export default {
        name: "MasterPageTaxonomy",
        async asyncData({$api, params, query}) {
            let taxonomy = await $api['pub_taxonomy'].get(params.taxonomy, {taxonomy: params.term});
            query.page = query.page ? Number.parseInt(query.page) : 1;
            query.taxonomies = taxonomy.id;
            return {
                taxonomy,
                query,
                response: await $api['activity'].list(query)
            }
        }
    }
</script>

<style scoped>

</style>
