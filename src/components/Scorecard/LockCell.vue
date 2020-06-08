<template>
    <div class="lock"
         :class="{'player-closed': closed && playerClosed, closed}"
         :style="cellStyle"
         @click="closeRow()"
    />
</template>
<script>
    export default {
        props: [
            "color",
            "closable",
            "closed",
            "rowId",
            "playerClosed"
        ],
        methods: {
            closeRow(){
                if(this.closable) {
                    this.$store.commit('closeRow', this.rowId);
                    this.$store.dispatch('ADD_MOVE', {rowIndex: this.rowId, type: 'lock'})
                }
            }
        },
        computed: {
            cellStyle() {
                return{
                    backgroundColor: this.closed ? null : `#${this.lighten(this.color, 20)}`
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    div.lock{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center;
        margin-left: 10px;
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center center;
        transition: .2s ease-out;
        background-image: url("../../assets/icon/lock-open-black.svg");
        &.closed{
            background-image: url("../../assets/icon/lock-black.svg");
            background-color: #e3e3e3;
            color: white;
        }
        &.player-closed{
            background-image: url("../../assets/icon/lock-white.svg");
            background-color: #363636;
            color: white;
        }
    }
</style>
