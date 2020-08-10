<template>
    <page-post :value="post"/>
</template>

<script>
    export default {
        name: "MasterPagePost",
        async asyncData({$api, params}) {
            return {
                post: await $api['post'].get(params.id),
            }
        },
        head() {
            return {
                title: this.post.title
            }
        }
    }
</script>

<style scoped>

</style>
