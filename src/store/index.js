import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import game from './modules/game'
import user from './modules/user'
import moves from './modules/moves'

export default new Vuex.Store({

    modules: {
        game,
        moves,
        user
    }
})
