const Calculator = {
    currentValue: 0,
    operator: null,
    prevValue: 0,

    add(n) {this.currentValue += n;},

    subtract(n) {this.currentValue -= n;},

    multiply(n) {this.currentValue *= n;},

    divide(n) {
        if(n === 0) {
            return "You Can't Divide By Zero";
        } else {
            this.currentValue /= n
            return this.currentValue;
        }
    },

    clear() {
        this.currentValue = 0;
    },

    getResult() {
        return this.currentValue;
    },

    setOperator(operator) {
        this.operator = operator;
        this.prevValue = this.currentValue;
        this.currentValue = 0;
    }
};

function updateDisplay() {
    document.getElementById("display").value = Calculator.getResult();
};

function handleClick(value) {
    Calculator.currentValue = Calculator.currentValue * 10 + parseInt(value);
    updateDisplay();
};

function handleOperation(operation) {
    if(Calculator.operator) {
        calculateResult();
    }
    Calculator.setOperator(operation)
};

function calculateResult() {
    const prev = Calculator.prevValue;
    const current = Calculator.currentValue;
    switch (Calculator.operator) {
        case "add":
            Calculator.add(current);
            break;
        case "subtract":
            Calculator.subtract(current);
            break;
        case "multipy":
            Calculator.multiply(current);
            break;
        case "divide":
            Calculator.divide(current);
            break;
        default:
            return;
    }
    updateDisplay();
    Calculator.clear();
};

function clearDisplay() {
    Calculator.clear();
    updateDisplay();
}