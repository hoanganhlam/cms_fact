<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <template-content meta :value="value" vote media description hash-tag/>
                        <comment-form/>
                    </div>
                </div>
                <div class="hash-tag">
                    <h4>Tags</h4>
                    <div class="tags">
                        <n-link v-for="tax in taxHashTags" :key="tax.id"
                                :to="`/${tax.taxonomy}/${tax.term.slug}`"
                                class="tag">
                            <b-icon size="is-small" icon="pound"/>
                            <span>{{ tax.term.title }}</span>
                        </n-link>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="widget" v-if="value.related">
                    <h4 class="is-bold" style="margin-bottom: 1rem;">Related</h4>
                    <template-content v-for="post in value.related" :key="post.id" :value="post"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Single",
    props: {
        value: {}
    },
    computed: {
        taxHashTags() {
            return this.value['terms'].filter(x => x.taxonomy === 'tag');
        }
    }
}
</script>

<style scoped>

</style>
