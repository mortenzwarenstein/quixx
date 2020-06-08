<template>
        <div :style="cellStyle"
             class="cellblock"
             :class="{'closed': cell.crossed, 'not-crossable': !crossable}"
             @click="cross()">{{ cell.number }}</div>
</template>

<script>
    export default {
        props: [
            "cell",
            "crossable",
            "rowIndex"
        ],
        computed: {
            cellStyle() {
                return {
                    backgroundColor: !this.cell.crossed && this.crossable ? `#${this.lighten(this.cell.color, 20)}` : null
                }
            }
        },
        methods: {
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
