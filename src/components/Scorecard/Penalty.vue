<template>
    <div>
        <div class="penalty-container">
            <div>
                <span>Penalty</span>
            </div>
            <div class="cell-container">
                <div class="cell" :key="i" v-for="(cell, i) in penaltyTries">
                    <div v-if="penaltyPoints > i" class="penalty-point"></div>
                </div>
            </div>
            <div>
                <button @click="failedThrow()"
                        :disabled="finished"
                        class="circle-button">
                    +
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            penaltyTries() {
                return this.$store.getters.penaltyTries
            },
            penaltyPoints(){
                return this.$store.getters.penaltyPoints
            },
            finished(){
                return this.$store.getters.getFinished;
            },
        },
        methods: {
            failedThrow(){
                this.$store.commit('throwFailed')
            }
        }
    }
</script>

<style lang="scss" scoped>
        .penalty-container{
            display: flex;
            align-items: center;
            div span{
                margin-right: 10px;
            }
            .cell-container{
                display: flex;
                align-items: center;
            }
        }
        .cell{
            display: inline-block;
            margin-right: 15px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid black;
            position: relative;
            .penalty-point{
                position: absolute;
                top: 2px;
                left: 2px;
                right: 2px;
                bottom: 2px;
                border-radius: 50%;
                background-color: #363636;
            }
        }
</style>
