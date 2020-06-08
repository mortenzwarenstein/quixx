<template>
    <div class="toolbar">
        <div class="profile-container">
            <div v-if="user">
                Welcome, <span @click="openMenu" v-closable="{exclude: ['menu'], handler: 'closeMenu'}">{{ user.username }}</span>
            </div>
            <div ref="menu" class="actions" :class="{'hidden': hidden}">
                <ul>
                    <router-link tag="li" to="/profile">Profile</router-link>
                    <router-link @click="logoutUser" tag="li" to="/">Logout</router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

    import { getUserProfile, logoutUser } from "../api/api";

    export default {
        data(){
            return {
                hidden: true
            }
        },
        computed: {
            user(){
                return this.$store.getters.user;
            }
        },
        created() {
            if(!this.user) {
            getUserProfile()
                .then(val => {
                    if(val.success) this.$store.dispatch('setUser', val.data.user);
                })
            }
        },
        methods: {
            openMenu(){
                this.hidden = false;
            },
            closeMenu(){
                this.hidden = true;
            },
            async logoutUser(){
                let success = await logoutUser();
                this.$router.push('/');
            }
        }
    }
</script>
<style lang="scss" scoped>
    div.toolbar{
        margin-left: auto;
        display:flex;
        font-size: 13px;
        .profile-container{
            user-select: none;
            position: relative;
            margin-left: auto;
            img{
                width: 12px;
            }
            span{
                text-decoration: underline;
                cursor: pointer;
                transition: .2s ease-out;
                &:hover{
                    color: lighten(#363636, 15%);
                }
            }
        }
    }

    .toolbar .profile-container  div.actions{
        position: absolute;
        right: 0;
        margin-top: 15px;
        padding: 12px 20px 10px;
        background-color: #363636;
        border-radius: 5px;
        transition: ease-in .2s;
        ul{
            li{
                color: white;
                cursor: pointer;
                margin-bottom: 5px;
                list-style: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        &:after {
            content: " ";
            position: absolute;
            bottom: 100%;  /* At the top of the tooltip */
            left: 50%;
            margin-left: -10px;
            border-width: 10px;
            border-style: solid;
            border-color: transparent transparent #363636 transparent;
        }
    }
</style>
