"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
var arrNum = [2, 3, 4, 5];
var stack = new stack_1.Stack();
arrNum.forEach(function (x) { stack.push(x); });
for (var i = 0; i < arrNum.length; i++) {
    arrNum[i] = stack.pop();
}
console.log(arrNum);
