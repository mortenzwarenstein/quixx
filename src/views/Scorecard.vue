<template>
    <div class="game-container">
        <div class="title">
            <h1>
                Scoresheet
            </h1>
            <div class="top-bar">
                <app-penalty></app-penalty>
                <app-undo-button></app-undo-button>
            </div>
        </div>
        <div class="row-container">
            <app-finish-popup v-if="finished" :score="score"></app-finish-popup>
            <app-row v-if="rows.length" :key="i" v-for="(row, i) in rows" :row="row"></app-row>
        </div>
    </div>
</template>

<script>
    import Row from '@/components/Scorecard/Row'
    import Penalty from '@/components/Scorecard/Penalty'
    import FinishPopup from "../components/Scorecard/FinishPopup";
    import Undo from "../components/Scorecard/Undo";
    // @TODO: CREATE MULTIPLAYER

    export default {
        components: {
            'appRow': Row,
            'appPenalty': Penalty,
            'appFinishPopup': FinishPopup,
            'appUndoButton': Undo
        },
        mounted() {
            if(!this.rows.length) this.$router.push('/')
        },
        computed: {
            rows(){
                return this.$store.getters.rows;
            },
            finished(){
                return this.$store.getters.getFinished;
            },
            score(){
                return this.$store.getters.totalScore;
            }
        },
        methods: {
            failedThrow(){
                this.$store.commit('throwFailed')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .row-container{
        display: inline-flex;
        flex-direction: column;
        position: relative;
        max-width: 100%;
        @media screen and (max-width: 700px) {
            overflow-x: scroll;
        }
        > * {
            &:first-of-type{
                border-radius: 5px 5px 0 0 ;
            }
            &:last-of-type{
                border-radius: 0 0 5px 5px;
            }
        }
        .finish-popup{
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            padding: 10px 20px;
            border-radius: 5px;
            box-shadow:
                    0 2.8px 2.2px rgba(0, 0, 0, 0.079),
                    0 6.7px 5.3px rgba(0, 0, 0, 0.113),
                    0 12.5px 10px rgba(0, 0, 0, 0.14),
                    0 22.3px 17.9px rgba(0, 0, 0, 0.167),
                    0 41.8px 33.4px rgba(0, 0, 0, 0.201),
                    0 100px 80px rgba(0, 0, 0, 0.28)
        ;
        }
    }

    .title{
        display: flex;
        @media screen and (max-width: 500px) {
            flex-direction: column;
            > div{
                margin-bottom: 15px;
            }
        }
        h1 {
            flex: 1;
            @media screen and (max-width: 1000px) {
                font-size: 26px;
                margin-top: 10px;
            }
        }
    }

    .top-bar{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
    }

</style>
