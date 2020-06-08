export default {
    state: {
        moves: [],
        undone: true
    },
    getters: {
        undone(state){
            return state.undone;
        }
    },
    mutations: {
        addMove(state, {object}){
            state.undone = false;
            state.moves.push(object);
        },
        undoMove(state){
            if(state.undone || !state.moves.length) return;
            let highestNumber = 0;
            let undoneMove = state.moves.pop();
            let lastMove = state.moves.reverse().find(e => e.cell !== null);
            state.moves.reverse();
            if (lastMove) highestNumber = lastMove.cell.number;

            if(undoneMove.cell){
                undoneMove.cell.crossed = false;
                undoneMove.row.highestSelected = highestNumber;
            } else {
                undoneMove.row.closed = false;
            }

            state.undone = true;
        }
    },
    actions: {
        ADD_MOVE({commit, rootState}, {type, rowIndex, object}){
            let row = rootState.game.rows[rowIndex];
            object = {
                cell: type === 'cell' ? object : null,
                row
            }

            commit('addMove', {object});
        }
    }
}
