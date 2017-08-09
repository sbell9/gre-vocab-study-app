<template>
    <el-col :span="24">
        <el-card class="word-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 6px;">{{word.word}}</span>
                <el-tag style="float: right;" :type="returnDifficultyTag">{{word.difficulty}}</el-tag>
            </div>
            <el-row>
                {{word.sentence_example}}
            </el-row>
            <br/>
            <el-row>
                <el-col :span="9">
                    <ul v-for="answer in word.answers">
                        <li  style="float: left">
                            <el-radio :disabled="answerSubmitted == false ? false : true" class="radio" :label="answer" v-model="word.user_answer">{{answer}}</el-radio>
                        </li>
                    </ul>
                </el-col>
                <el-col :span="15">
                    <div class="response" v-if="answerSubmitted == true">
                        <h3 :style="userAnswerCorrect == false ? 'color: red;' : 'color: green;'">{{submissionResponseHeader}}!</h3>
                            {{submissionResponseBody}}
                    </div>
                </el-col>
                <!--{{word.user_answer}}-->
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="card-buttons">
                        <el-button :disabled="answerSubmitted == true || word.user_answer === ''" @click="checkAnswer()">Submit</el-button>
                        <el-button v-if="userAnswerCorrect !== null" @click="getNextWord()">Next</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </el-col>

</template>

<script>

    import _ from 'lodash';

    export default {
        props: ['word'],
        data () {
            return {
//                word: {
//                    word: 'Bilk',
//                    difficulty: 'easy',
//                    sentence_example: 'Wells Fargo bilked many of their customers with fake accounts.',
//                    answers: ['To upset', 'Highest point of action', 'To cheat or defraud', 'To make usable'],
//                    user_answer: '',
//                    correct_answer: 'To cheat or defraud'
//                },
                answerSubmitted: false,
                userAnswerCorrect: null,
                submissionResponseHeader: '',
                submissionResponseBody: ''
            };
        },
        computed: {
            returnDifficultyTag () {
                let difficulty = this.word.difficulty;
                if (difficulty === 'easy') {
                    return 'success'
                } else if (difficulty === 'moderate')
                {
                    return 'warning'
                } else if (difficulty === 'hard') {
                    return 'danger'
                } else {
                    return 'primary'
                }
            }
        },
        watch: {},
        methods: {
            checkAnswer () {
                this.answerSubmitted = true;
                if (this.word.user_answer === this.word.correct_answer) {
                    this.userAnswerCorrect = true;
                    this.submissionResponseHeader = 'Correct';
                } else {
                    this.userAnswerCorrect = false;
                    this.submissionResponseHeader = 'Incorrect';
                    this.submissionResponseBody = '\'' + this.word.correct_answer + '\' was the correct answer'
                }
            },
            getNextWord () {
                this.$emit('nextWord');
            }
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
    .word-card {
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
        display: block;

    }

    .card-buttons {
        float: right;
    }

    .response {
        padding-left: 80px;
    }

</style>