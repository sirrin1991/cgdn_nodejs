"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
var queue_1 = require("./queue");
var str = "abcbaa";
var stack = new stack_1.Stack();
var queue = new queue_1.Queue();
for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
    queue.enqueue(str[i]);
}
var flag = true;
for (var i = 0; i < str.length; i++) {
    if (stack.pop() !== queue.dequeue()) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log("".concat(str, " is a palindrome string"));
}
else {
    console.log("".concat(str, " is not a palindrome string"));
}
