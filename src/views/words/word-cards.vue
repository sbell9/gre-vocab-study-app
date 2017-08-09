<template>
    <div class="card">
        <wordcard v-if="!reachedEnd" :word="words[counter]" @nextWord="nextWord()"></wordcard>
        <h2 v-if="reachedEnd">Out of words!</h2>
        <el-button type="primary" v-if="reachedEnd">Fetch More Words</el-button>
    </div>
</template>

<script>

    import _ from 'lodash';
    import wordcard from './word-card.vue'

    export default {
        props: [''],
        components: {
          wordcard
        },
        data: function () {
            return {
                words: [],
                counter: 0,
                reachedEnd: false
            };
        },
        computed: {},
        watch: {},
        methods: {
            nextWord () {
                if (this.counter < this.words.length - 1) {
                    this.counter++;
                } else {
                    this.reachedEnd = true;
                }
            }
        },
        beforeCreate: function () {
        },
        created: function () {
            let word = {
                    word: 'Bilk',
                    difficulty: 'easy',
                    sentence_example: 'Wells Fargo bilked many of their customers with fake accounts.',
                    answers: ['To upset', 'Highest point of action', 'To cheat or defraud', 'To make usable'],
                    user_answer: '',
                    correct_answer: 'To cheat or defraud'
                }
            this.words.push(word);
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
    .card {
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

</style>