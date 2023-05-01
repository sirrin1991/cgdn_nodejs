import {Shape} from "./shape";
import {Resizeable} from "./resizeable";

export class Square extends Shape implements Resizeable {
    private side: number;

    constructor(name: string, side: number) {
        super(name);
        this.side = side;
    }

    setSide(side: number) {
        this.side = side;
    }

    getSide() {
        return this.side;
    }

    calculateArea(): number {
        return Math.pow(this.side, 2);
    }

    calculatePerimeter(): number {
        return this.side * 4;
    }

    resizeable(percent: number): void {
        this.side = this.side + (this.side * percent / 100);
    }

    toString() {
        return `Im a square with side is ${this.side}  
        and perimeter is ${this.calculatePerimeter()} and area is ${this.calculateArea()}` + super.toString();
    }
}