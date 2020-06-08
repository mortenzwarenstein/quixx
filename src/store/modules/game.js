export default {
    state: {
        AMOUNT_CELLS: 11,
        AMOUNT_PENALTY: 4,
        ROW_SETTINGS: [
            {color: 'red', hex: '#B84E56', type: 'asc'},
            {color: 'yellow', hex: '#FCCF67', type: 'asc'},
            {color: 'green', hex: '#419969', type: 'desc'},
            {color: 'blue', hex: '#435779', type: 'desc'}
        ],
        penaltyPoints: 0,
        rows: [],
        finished: false
    },
    getters: {
        rows(state){
            return state.rows;
        },
        amountCrossed: (state) => (rowIndex) =>{
            let row = state.rows[rowIndex];
            return row.cells.filter(e => e.crossed === true).length
        },
        playerClosed: (state, getters) => (rowIndex) => {
            let row = state.rows[rowIndex];

            return row.highestSelected === row.cells[row.cells.length - 1].number && getters.amountCrossed(rowIndex) > 4;
        },
        points: (state, getters) => (rowIndex) => {
            let amountCrossed = getters.amountCrossed(rowIndex);

            let row = state.rows[rowIndex];
            let closed = row.closed;
            let playerClosed = getters.playerClosed(rowIndex);

            if(closed && playerClosed) amountCrossed++;

            return (amountCrossed * (amountCrossed + 1)) / 2;
        },
        totalScore(state, getters){
            let points = 0;
            for(let i = 0; i < state.rows.length; i++){
                points += getters.points(i);
            }
            points -= getters.penaltyPoints * 5
            return points
        },
        amountClosed(state){
            return state.rows.filter(e => e.closed === true).length;
        },
        penaltyTries(state){
            return state.AMOUNT_PENALTY;
        },
        penaltyPoints(state){
            return state.penaltyPoints;
        },
        getFinished(state, getters){
            return getters.amountClosed >= 2 || getters.penaltyPoints >= getters.penaltyTries
        }
    },
    mutations: {
        setupRows(state){
            state.penaltyPoints = 0;
            state.finished = false;
            state.rows = [];
            state.ROW_SETTINGS.forEach((e, rI) => {
                let cells = [];
                let firstInSelection;
                let number;
                for(let i = 0; i < state.AMOUNT_CELLS; i++){
                    if(e.type === 'asc'){
                        number = i + 2
                        firstInSelection = parseInt(0);
                    } else if(e.type === 'desc'){
                        firstInSelection = state.AMOUNT_CELLS + 2
                        number = (state.AMOUNT_CELLS + 1) - i
                    }

                    cells.push({
                        number: number,
                        crossed: false,
                        color: e.hex
                    });
                }
                let row = {
                    color: e.hex,
                    index: rI,
                    highestSelected: firstInSelection,
                    points: 0,
                    closed: false,
                    cells,
                }

                state.rows.push(row);
            })
        },
        crossCell(state, {rowIndex, cellNumber}){
            let row = state.rows[rowIndex];
            let cell = row.cells
                .find(e => e.number === cellNumber);
            if(cell){
                cell.crossed = true;
                row.highestSelected = cell.number;
            }
        },
        closeRow(state, rowIndex){
            let row = state.rows[rowIndex];
            row.closed = true;
        },
        throwFailed(state){
            state.penaltyPoints++;
        },
        finishGame(state){
            state.finished = true;
        }

    },
}
