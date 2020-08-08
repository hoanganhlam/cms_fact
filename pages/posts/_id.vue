<template>
    <page-post :value="post"/>
</template>

<script>
    export default {
        name: "MasterPagePost",
        async asyncData({$api, params}) {
            return {
                post: await $api['pub_post'].get(params.id),
            }
        }
    }
</script>

<style scoped>

</style>
