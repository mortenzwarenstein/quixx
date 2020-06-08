export default {
    state: {
        accessToken: undefined,
        refreshToken: undefined,
        user: undefined
    },
    getters: {
        accessToken(state){
            return state.accessToken
        },
        refreshToken(state){
            return state.refreshToken
        },
        user(state){
            return state.user;
        }
    },
    mutations: {
        setTokens(state, tokens){
            state.accessToken = tokens.accessToken;
            state.refreshToken = tokens.refreshToken;
        },
        setUser(state, user){
            state.user = user;
        }
    },
    actions: {
        login({commit, state}, payload){
            commit('setTokens', {accessToken: payload.accessToken, refreshToken: payload.refreshToken});
            commit('setUser', payload.user)
        },
        setUser({commit}, user){
            commit('setUser', user);
        },
        logout({commit}){
            commit('setUser', undefined)
        }
    }
}
