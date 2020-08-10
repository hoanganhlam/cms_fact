<template>
    <page-index :res-taxonomy="res" :res-post="response" :query="query"/>
</template>

<script>
    export default {
        name: "MasterPageIndex",
        watchQuery: true,
        head() {
            return {
                title: "Push Fact - Interesting Facts - Fun Fact - Random Facts"
            }
        },
        async asyncData({$api, query, store}) {
            let res = await $api['taxonomy'].list({taxonomy: "tag"});
            query.page = query.page ? Number.parseInt(query.page) : 1;
            await store.commit('config/SET_HEAD_DATA', {
                title: "Daily interesting facts"
            });
            return {
                res,
                query,
                response: await $api['post'].list(query)
            }
        }
    }
</script>

<style></style>
