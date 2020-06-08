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
    import {logoutUser} from "../api/api";

    export default {
        methods: {
            setup(){
                this.$store.commit('setupRows');
                this.$router.push('scorecard')
            },
            logout(){
                this.$store.dispatch('logout');
                logoutUser();
            }
        },
        computed: {
            user(){
                return this.$store.getters.user;
            }
        }
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
