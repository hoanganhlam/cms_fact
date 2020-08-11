<template>
    <header class="header">
        <div class="header-body">
            <div class="container">
                <div class="level">
                    <div class="level-left">
                        <n-link class="logo" to="/">
                            <img src="/logo.png" alt="Push Fact">
                        </n-link>
                    </div>
                    <div class="level-right">
                        <b-field>
                            <b-input icon="magnify" placeholder="Search..."></b-input>
                        </b-field>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="level is-mobile">
                    <div class="level-left">
                        <h1 class="is-bold is-uppercase" v-if="headData">
                            <b-icon size="is-small" icon="format-align-right"></b-icon>
                            <span>{{headData.title}}</span>
                        </h1>
                    </div>
                    <div class="level-right">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "PartialHeader",
        computed: {
            headData() {
                return this.$store.state.config.headData
            }
        }
    }
</script>

<style lang="scss">

</style>
