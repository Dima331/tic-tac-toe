class TicTacToe {
    constructor() {
        this.step = 0;
        this.wins = [
            ["00", "01", "02"],
            ["10", "11", "12"],
            ["20", "21", "22"],

            ["00", "10", "20"],
            ["01", "11", "21"],
            ["02", "12", "22"],

            ["00", "11", "22"],
            ["02", "11", "20"]
        ];
        this.dataX = [],
            this.dataO = [];
        this.player = "x";
        this.tmpNumber = "";
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        this.tmpNumber = String(rowIndex) + String(columnIndex)

        if (this.checkNumber(this.tmpNumber, this.dataO) ||
            this.checkNumber(this.tmpNumber, this.dataX)) {
            return
        }
        if (this.player === "x") {
            this.dataX.push(this.tmpNumber)
            this.step++;
            this.player = "o"
        } else {
            this.dataO.push(this.tmpNumber)
            this.player = "x"
            this.step++;
        }
    }

    checkNumber(num, data) {
        for (let i = 0; i < data.length; i++) {
            if (num == data[i]) {
                return true
            }
        }
    }

    isFinished() {
        if (this.step == 9) {
            return true
        }
        if (this.getWinner() == null) {
            return false
        }
        return true
    }

    getWinner() {

        if (this.dataX.length < 3 && this.dataO.length < 3) {
            return null;
        }
        for (let i = 0; i < this.wins.length; i++) {
            let tmpWin = this.wins[i];
            if (this.checkCombo(tmpWin, this.dataX)) {
                return 'x'
            }
            if (this.checkCombo(tmpWin, this.dataO)) {
                return 'o'
            }
        }
        return null;
    }

    checkCombo(win, data) {
        var count = 0;
        for (let j = 0; j < win.length; j++) {
            for (let l = 0; l < data.length; l++) {
                if (win[j] == data[l]) {
                    count++;
                }
                if (count == 3) {
                    return true
                }
            }
        }
        return false
    }

    noMoreTurns() {
        if (this.step == 9) {
            return true
        }
        return false
    }

    isDraw() {
        if (this.step >= 5) {
            var result = this.getWinner()
        }
        if (result == 'x' || result == 'o') {
            return false
        }
        if (this.step >= 9) {
            return true
        } else {
            return false
        }
    }

    getFieldValue(rowIndex, colIndex) {

        this.tmpNumber = String(rowIndex) + String(colIndex)
        for (let i = 0; i < this.dataO.length; i++) {
            if (this.tmpNumber == this.dataO[i]) {
                return "o"
            }
        }
        for (let i = 0; i < this.dataX.length; i++) {
            if (this.tmpNumber == this.dataX[i]) {
                return "x"
            }
        }
        return null
    }
}


module.exports = TicTacToe;

