function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteSymbol() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function appendToDisplay(symbol) {
    document.getElementById('display').value += symbol;
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result.toFixed(5);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
