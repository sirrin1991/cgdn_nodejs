import Shape from "./shape";

class Rectangle extends Shape {
    private width: number;
    private length: number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color,filled);
        this.length = length;
        this.width = width;
    }
    setWidth(width: number){
        this.width = width;
    }
    getWidth(){
        return this.width;
    }
    setLength(length:number){
        this.length = length;
    }
    getLength(){
        return this.length;
    }
    toString(): string {
        return super.toString() +
            ` A Rectangle width = ${this.width} and length = ${this.length}, which is a subclass off ${super.toString()}`;
    }
}

export default Rectangle;