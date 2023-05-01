import {Shape} from "./shape";
import {Resizeable} from "./resizeable";

export class Rectangle extends Shape implements Resizeable{
    private width: number;
    private length: number;

    constructor(name: string, width: number, length: number) {
        super(name);
        this.width = width;
        this.length = length;
    }

    setWidth(width: number) {
        this.width = width
    }

    getWidth() {
        return this.width;
    }

    setLength(length: number) {
        this.length = length;
    }

    getLength() {
        return this.length;
    }

    calculateArea(): number {
        return this.width * this.length;
    }

    calculatePerimeter(): number {
        return (this.length + this.width) * 2;
    }

    toString() {
        return `Im a rectangle with width is ${this.width} and length is ${this.length} 
        and perimeter is ${this.calculatePerimeter()} and area is ${this.calculateArea()}` + super.toString();
    }

    resizeable(percent: number): void {
        this.width = this.width + (this.width*percent/100);
        this.length = this.length + (this.length*percent/100);
    }
}