import {Shape} from "./shape";
import {Resizeable} from "./resizeable";

export class Circle extends Shape implements Resizeable {
    private radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    setRadius(radius: number) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    toString() {
        return `Im a circle with radius is ${this.radius} and area is ${this.calculateArea()} 
        and perimeter is ${this.calculatePerimeter()}` + super.toString();
    }

    resizeable(percent: number): void {
        this.radius = (this.radius + this.radius * percent / 100);
    }
}