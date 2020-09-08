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
    async fetch() {
        this.res = await this.$api['taxonomy'].list({taxonomy: "tag"});
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
        }
    }
}
</script>

<style></style>
