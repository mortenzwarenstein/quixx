<template>
        <div :style="cellStyle"
             class="cellblock"
             :class="{'closed': cell.crossed, 'not-crossable': !crossable}"
             @click="cross()">{{ cell.number }}</div>
</template>

<script>

    /**
     * Cell containing a single number representing a field on the Qwixx scoresheet. A cell is part of a row.
     */
    export default {
        name: "Cell",
        props: {
            /**
             * @vuese
             * The cell from the store. Looped over by the parent-row, the cell gains its properties through the
             * "cell"-prop.
             */
            cell: {
                type: Object,
                required: true
            },
            /**
             * @vuese
             * A boolean representing the crossability of the cell.
             * Determined by three factors: Is the cell within range (higher than the lowest, lowest than the highest),
             * is the row not already closed by a player, and is the game not yet finished.
             */
            crossable: {
                type: Boolean,
                default: false
            },
            /**
             * @vuese
             * @name rowIndex
             * @description This property represents the row of the cell, only used for changing the cell in the right row in the
             * store.
             */
            rowIndex: {
                type: Number,
                required: true
            }
        },
        computed: {
            /**
             * @vuese
             * Returns a cellstyle depending on whether the cell is crossable or not. Returns a styleobject containing
             * the lightened backgroundcolor
             * @type {{backgroundColor:([string\|null])}}
             */
            cellStyle() {
                return {
                    backgroundColor: !this.cell.crossed && this.crossable ? `#${this.lighten(this.cell.color, 20)}` : null
                }
            }
        },
        methods: {
            /**
             * @vuese
             * Crosses a cell by changing it in the store and adding a move (for the undo functionality)
             * @type void
             */
            cross(){
                if(this.crossable) {
                    this.$store.commit('crossCell', {rowIndex: this.rowIndex, cellNumber: this.cell.number})
                    this.$store.dispatch('ADD_MOVE', {type: 'cell', rowIndex: this.rowIndex, object: this.cell});
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    div.cellblock{
        padding: calc((50px - (20px + 10px )) / 2) 10px ;
        width: 50px;
        height: 50px;
        text-align: center;
        margin-right: 5px;
        border-radius: 5px;
        font-weight: 600;
        font-size: 20px;
        user-select: none;
        transition: .2s ease-out;
        &.closed{
            background-color: #363636!important;
            color: white;
        }
        &.not-crossable{
            color: white;
        }
    }

</style>
