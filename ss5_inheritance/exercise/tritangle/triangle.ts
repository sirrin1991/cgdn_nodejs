import Shape from "./shape";

class Triangle extends Shape {
    private sideA: number;
    private sideB: number;
    private sideC: number;

    constructor(name: string, color: string, sideA: number, sideB: number, sideC: number) {
        super(name, color);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    setSideA(sideA: number){
        this.sideA = sideA;
    }
    getSideA(){
        return this.sideA;
    }
    setSideB(sideB: number){
        this.sideB = sideB;
    }
    getSideB(){
        return this.sideB;
    }
    setSideC(sideC : number){
        this.sideC = sideC;
    }
    getSideC(){
        return this.sideC;
    }
    toString(): string {
        return `A Triangle with side A = ${this.sideA}, side B = ${this.sideB}, side C = ${this.sideC}, which is a subclass of ${super.toString()}`;
    }
}

export default Triangle;