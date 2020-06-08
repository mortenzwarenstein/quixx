<template>
    <div id="app">
        <div class="view-container">
            <router-view/>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        created() {
            document.title = "Qwixx"
        }
    }
</script>
<style lang="scss">
    *{
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
        color: #363636;
        margin: 0;
        padding: 0;
    }
    #app{
        max-width: 725px;
        margin: 10px auto;
        padding: 0 30px;
        @media screen and (min-width: 700px) and (max-width: 1000px){
            margin: 20px auto 0;
            padding: 0;
            max-width: 665px;
        }
        @media screen and (max-width: 700px){
            margin: 20px auto;
        }
    }
    .view-container{
        margin: 50px 0;
        width: 100%;
    }
    .hidden{
        transform-origin: top center;
        transform: scale(0);
    }
    button{
        margin-top: 10px;
        border: 0;
        color: white;
        background-color: #363636;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        transition: .2s ease-out;
        &:hover{
            background-color: lighten(#363636, 10%);
        }
        &.circle-button{
            font-size: 15px;
            height: 25px;
            width: 25px;
            padding: 0;
            border-radius: 50%;
            margin-top: 0;
            display: block;
        }
    }
</style>
