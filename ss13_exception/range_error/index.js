function checkOperator(operator) {
    var flagOfPlus = operator !== "+";
    var flagOfMinus = operator !== "-";
    var flagOfMulti = operator !== "*";
    var flagOfDiv = operator !== "/";
    if (flagOfPlus && flagOfDiv && flagOfMinus && flagOfMulti) {
        throw new RangeError("The operator must be an +, -, *, /");
    }
}
function calculator(number1, number2, operator) {
    try {
        checkOperator(operator);
    }
    catch (e) {
        if (e instanceof RangeError) {
            return e.message;
        }
    }
    var result;
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    return result;
}
console.log(calculator(2, 3, "+"));
