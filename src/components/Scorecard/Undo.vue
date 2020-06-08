<template>
    <button class="circle-button" @click="undo" :disabled="undoable">
    </button>
</template>
<script>
    export default {
        computed: {
            undoable() {
                return this.$store.getters.undone;
            }
        },
        methods: {
            undo(){
                this.$store.commit('undoMove');
            }
        }
    }
</script>

<style lang="scss" scoped>

    button {
        width: 30px;
        height: 30px;
        margin-left: 30px;
        background-image: url("../../assets/icon/undo-white.svg");
        background-repeat: no-repeat;
        background-size: 60%;
        background-position: center center;
        &:disabled {
            background-color: lighten(#363636, 50%);
            cursor: not-allowed;
        }
    }
</style>
