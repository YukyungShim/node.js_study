/* 
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;
*/

const candyMachine = {
    sstatus: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.sstatus.count--;
        return this.sstatus.count;
    },
};
const {getCandy, status: { count } } = candyMachine;