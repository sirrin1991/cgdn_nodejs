import {Square} from "./square";
import {Rectangle} from "./rectangle";
import {Circle} from "./circle";

const shape1 = new Square("Hình vuông", 4);
const shape2 = new Rectangle("Hình vuông", 4, 5);
const shape3 = new Circle("Hình tròn", 4);

console.log(shape1.toString());
console.log(shape2.toString());
console.log(shape3.toString());
shape1.resizeable(50);
shape2.resizeable(50);
shape3.resizeable(50);
console.log("======= After resizeable =======");
console.log(shape1.toString());
console.log(shape2.toString());
console.log(shape3.toString());