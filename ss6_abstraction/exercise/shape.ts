import {Resizeable} from "./resizeable";

export abstract class Shape {
    private name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    abstract calculateArea(): number ;

    abstract calculatePerimeter(): number;

    toString(): string {
        return `, which is a subclass of Shape with name is ${this.name}`
    }

}