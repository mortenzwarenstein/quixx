<template>
    <div class="row-container">
        <div :style="rowStyle" class="row" :class="{'closed': row.closed}">
            <app-cell :key="i"
                      v-for="(cell, i) in row.cells"
                      :cell="cell"
                      :rowIndex="row.index"
                      :crossable="crossable(cell)"
            />
            <app-lock-cell :closable="canClose"
                           :row-id="row.index"
                           :closed="row.closed"
                           :player-closed="playerClosed"
                           :color="row.color"/>
        </div>
        <div v-if="row.closed" class="is-complete" :style="completeStyle"></div>
    </div>
</template>

<script>
    import Cell from '@/components/Scorecard/Cell'
    import LockCell from '@/components/Scorecard/LockCell'

    export default {
        // data(){},
        components: {
            'appCell': Cell,
            'appLockCell': LockCell
        },
        props: [
            "row"
        ],
        computed: {
            completeStyle(){
                return {
                    backgroundColor: this.row.color
                }
            },
            rowStyle(){
                return {
                    backgroundColor: this.row.closed ? this.row.color + this.alpha(.6) : this.row.color
                }
            },
            amountCrossed(){
                return this.$store.getters.amountCrossed(this.row.index)
            },
            points(){
                return this.$store.getters.points(this.row.index)
            },
            canClose(){ return !this.row.closed && !this.$store.getters.getFinished;
            },
            playerClosed(){
                return this.$store.getters.playerClosed(this.row.index)
            }
        },
        methods: {
            crossable(cell){

                let cells = this.row.cells;
                let lastIndex = this.row.cells.length - 1
                let direction = cells[0].number > cells[lastIndex].number ? cell.number < this.row.highestSelected :
                    cell.number > this.row.highestSelected;
                return direction && !this.row.closed && !this.$store.getters.getFinished;
            }
        }

    }
</script>

<style lang="scss" scoped>
    div.row-container{
        display: flex;
        flex-direction: row;
        > * {
            &:first-of-type .row{
                border-radius: 5px 5px 0 0 ;
            }
            &:last-of-type .row{
                border-radius: 0 0 5px 5px;
            }
        }
        .row{
            padding: 10px;
            display: inline-flex;
            align-items: center;
            transition: .2s ease-out;
            &.closed{
                background-color: #d0d0d0;
            }
        }
        .is-complete{
            border-radius: 50%;
            margin-left: 15px;
            height: 15px;
            width: 15px;
            @media screen and (max-width: 700px) {
                display: none;
            }
        }
    }
</style>

<style lang="scss">

</style>
