import {Stack} from "./stack";
const arrNum = [2,3,4,5];
const stack = new Stack<number>();
arrNum.forEach(x => {stack.push(x)});
for (let i = 0; i < arrNum.length; i++){
    arrNum[i] = stack.pop();
}
console.log(arrNum)
