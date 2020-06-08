<template>
    <transition name="fade">
        <div class="flash_error" v-if="errors && errors.length" :class="{'show': errors.length}">
            Something went wrong:
            <ul>
                <li :key="i" v-for="(error, i) in errors">{{error.msg}}</li>
            </ul>
        </div>
    </transition>
</template>
<script>
    export default {
        props: [
            "errors"
        ]
    }
</script>
<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: .2s ease-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0!important;
    }
    div.flash_error{
        background-color: rgba(234, 125, 125, 0.93);
        color: rgba(116, 57, 57, 0.96);
        padding: 10px 20px;
        border-radius: 5px;
        margin-bottom: 10px;
        ul{
            margin-top: 5px;
            margin-left: 15px;
            font-size: 13px;
            li{
                color: rgba(116, 57, 57, 0.96);
                list-style-type: none;
                position: relative;
                &:before{
                    content: '';
                    display: block;
                    position: absolute;
                    background-color: rgba(116, 57, 57, 0.96);
                    width: 4px;
                    height: 4px;
                    top: 50%;
                    right: calc(100% + 5px);
                    transform: translateY(-50%);
                }
            }
        }
    }
</style>
