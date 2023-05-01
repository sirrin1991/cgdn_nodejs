const arr1 = ["a", "b", "c"];
const arr2 = [...arr1];
const arr3 = [...arr2, "d", "e"];
console.log(arr3);

const obj1 = {
    name: "Công",
    email: "cong.nguyen@codegym.vn"
}
const obj2 = {...obj1};
const obj3 = {...obj2,"age":31};
const obj4 = {
    name: "Thanh Công",
    email: "sirrin1991@gmail.com",
    age: 31
}
const obj5 = {...obj3,...obj4}
console.log(obj5);