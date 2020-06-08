<template>
    <div class="finish-popup">
        <h3>Game finished</h3>
        <p>
            Score: {{ score }}
        </p>
        <button @click="resetGame">
            New game
        </button>
    </div>
</template>

<script>
    export default {
        props: [
            "score"
        ],
        methods: {
            resetGame(){
                this.$store.commit('setupRows')
            }
        }
    }
</script>
