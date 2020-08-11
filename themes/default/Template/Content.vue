<template>
    <div class="media fact">
        <div class="media-left" v-if="vote">
            <div class="vote" v-bind:class="{'is-active': value['vote_object']['is-voted']}">
                <b-icon class="is-clickable" icon="chevron-up"></b-icon>
                <div>{{value['vote_object']['total']}}</div>
                <b-icon class="is-clickable" icon="chevron-down"></b-icon>
            </div>
        </div>
        <div class="media-content">
            <div class="media">
                <div class="media-left" v-if="media && value.media">
                    <div class="image">
                        <img
                            src="https://webdesignernews.s3.amazonaws.com/post_images/3388299/1*1l67h3mezF_ZwjYZWK9iWQ-013b-140x112.png"
                            alt="">
                    </div>
                </div>
                <div class="media-content">
                    <h4 class="is-bold">
                        <span v-if="description">{{value.description}}</span>
                        <n-link v-else :to="`/posts/${value.slug}`">{{value.description}}</n-link>
                    </h4>
                    <div class="meta" v-if="meta">
                        <div class="buttons">
                            <user avatar-size="is-16x16" :value="value.user"></user>
                            <n-link v-for="tax in taxPrimaries" :key="tax.id"
                                    :to="`/${tax.taxonomy}/${tax.term.slug}`"
                                    class="button is-text is-small">
                                <avatar icon="pound" :value="tax.media" class="is-16x16"/>
                                <span>{{tax.term.title}}</span>
                            </n-link>
                            <n-link :to="`/posts/${value.slug}`" class="button is-text is-small">
                                <span>20 minutes ago</span>
                            </n-link>
                            <a v-if="value.meta.source" :href="value.meta.source.href"
                               target="_blank"
                               class="button is-text is-small">
                                <b-icon icon="link" size="is-small"></b-icon>
                                <span>{{value.meta.source.title.substring(0, 20)}}...</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Avatar from "../partials/Avatar";
    import User from "../partials/User";

    export default {
        name: "Content",
        components: {User, Avatar},
        props: {
            value: {},
            description: {
                default: false,
                type: Boolean
            },
            vote: {
                default: false,
                type: Boolean
            },
            media: {
                default: false,
                type: Boolean
            },
            hashTag: {
                default: false,
                type: Boolean
            },
            meta: {
                default: false,
                type: Boolean
            },
        },
        computed: {
            taxPrimaries() {
                if (this.hashTag) {
                    return this.value['post_terms'].filter(x => x.taxonomy === 'object');
                }
                return []
            }
        }
    }
</script>

<style lang="scss"></style>
