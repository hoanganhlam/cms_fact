<template>
    <div class="container">
        <div class="notification">
            <div class="columns is-mobile" style="align-items: center;">
                <div class="column">
                    <h4 class="is-bold">Subscribe to get daily news</h4>
                    <b-checkbox size="is-small">I agree to subscribe to the newsletter. See our Privacy Policy.
                    </b-checkbox>
                </div>
                <div class="column">
                    <b-field>
                        <b-input icon="email-outline" expanded placeholder="Your Email"/>
                        <div class="control">
                            <div class="button is-primary">Signup</div>
                        </div>
                    </b-field>
                </div>
            </div>
        </div>
        <div class="facts">
            <template-content vote media v-for="(post, i) in response.results" :key="i" :value="post"/>
        </div>
        <div class="level">
            <div class="level-left">
                <div class="tags has-addons">
                    <span class="tag is-large">Page</span>
                    <span class="tag is-large is-primary">{{query.page}}</span>
                </div>
            </div>
            <div class="level-right">
                <div class="buttons">
                    <n-link :to="`?page=${previous}`" class="button" v-if="previous">
                        <b-icon icon="chevron-left"></b-icon>
                    </n-link>
                    <n-link :to="`?page=${next}`" class="button" v-if="next">
                        <b-icon icon="chevron-right"></b-icon>
                    </n-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Archive",
        props: {
            value: {},
            response: {},
            query: {}
        },
        computed: {
            totalPage() {
                return this.response.count / (this.query['page_size'] ? this.query['page_size'] : 10)
            },
            next() {
                if (this.query.page < this.totalPage) {
                    return this.query.page + 1;
                }
                return 0
            },
            previous() {
                if (this.query.page > 1) {
                    return this.query.page - 1;
                }
                return 0
            }
        }
    }
</script>

<style scoped>

</style>
