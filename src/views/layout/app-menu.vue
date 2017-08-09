<template>
    <el-tabs class="tabs-menu" v-model="activeName" @tab-click="">
        <el-tab-pane label="Cards" name="cards">
            <wordcards></wordcards>
        </el-tab-pane>
        <el-tab-pane label="Word Search" name="search">
            <wordsearch></wordsearch>
        </el-tab-pane>
    </el-tabs>
</template>

<script>

    import _ from 'lodash';
    import wordcards from '../words/word-cards.vue'
    import wordsearch from '../words/word-search.vue'

    export default {
        props: [''],
        components: {
            wordcards, wordsearch
        },
        data: function () {
            return {
                activeName: 'cards'
            };
        },
        computed: {},
        watch: {},
        methods: {
        },
        beforeCreate: function () {
        },
        created: function () {
        },
        beforeMount: function () {
        },
        mounted: function () {
        },
        beforeUpdate: function () {
        },
        updated: function () {
        },
        beforeDestroy: function () {
        },
        destroyed: function () {
        },
    }
</script>

<style>

    .tabs-menu {
        max-width: 70%;
        margin-left: auto;
        margin-right: auto;
    }

</style>