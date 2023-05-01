import {Stack} from "./stack";
import {Queue} from "./queue";

const str = "abcbaa";
const stack = new Stack<string>();
const queue = new Queue<string>();
for (let i = 0; i < str.length; i++){
    stack.push(str[i]);
    queue.enqueue(str[i]);
}
let flag = true;
for (let i = 0; i < str.length;i++){
    if(stack.pop() !== queue.dequeue()){
        flag = false;
        break;
    }
}
if (flag){
    console.log(`${str} is a palindrome string`);
}else {
    console.log(`${str} is not a palindrome string`);
}