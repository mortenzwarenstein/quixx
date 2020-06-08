<template>
    <div class="menu">
        <div>
            <h1>
                Qwixx scoresheet
            </h1>
            <p>
                For when you're fresh out of sheets
            </p>
            <button @click="setup">
                Play
            </button>
        </div>
    </div>
</template>
<script>

    /**
     * @group Views
     * Consists of a column-flexbox of buttons. Currently only has a play button.
     * */
    export default {
        name: 'HomeMenu',
        methods: {
            /**
             * @vuese
             * Gets called when the user clicks on the play button
             * Sets up the game in the store and then navigates to the next page.
             * @type void
             */
            setup(){
                this.$store.commit('setupRows');
                this.$router.push('scorecard');
            }
        },
    }
</script>
<style scoped lang="scss">
    .menu{
        text-align: center;
        width: 100%;
        button{
            width: 100%;
        }
    }
</style>
