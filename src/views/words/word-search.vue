<template>
<div class="word-search">
    <h3>Search for a word</h3>
    <el-select filterable placeholder="Select">
        <el-option
                v-for="word in words"
                :key="word.word"
                :label="word.word"
                :value="word.word">
        </el-option>
    </el-select>
</div>
</template>

<script>

    import _ from 'lodash';

    export default {
        props: [''],
        data: function () {
            return {
                words: []
            };
        },
        computed: {},
        watch: {},
        methods: {},
        beforeCreate: function () {
        },
        created: function () {
        },
        beforeMount: function () {
        },
        mounted: function () {
            let word = {
                word: 'Bilk',
                difficulty: 'easy',
                sentence_example: 'Wells Fargo bilked many of their customers with fake accounts.',
                answers: ['To upset', 'Highest point of action', 'To cheat or defraud', 'To make usable'],
                user_answer: '',
                correct_answer: 'To cheat or defraud'
            };
            this.words.push(word);
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

</style>