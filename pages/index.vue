<template>
    <page-index :res-taxonomy="res" :res-post="response"/>
</template>

<script>
    export default {
        name: "MasterPageIndex",
        async asyncData({$api, query}) {
            let res = await $api['pub_taxonomy'].list({taxonomy: "tag"});
            query.page = query.page ? Number.parseInt(query.page) : 1;
            return {
                res,
                query,
                response: await $api['activity'].list(query)
            }
        }
    }
</script>

<style></style>
