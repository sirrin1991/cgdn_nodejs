class Point2D {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    setX(x: number) {
        this.x = x;
    }

    getX() {
        return this.x;
    }

    setY(y: number) {
        this.y = y;
    }

    getY() {
        return this.y;
    }

    setXY(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getXY(){
        return this;
    }

    toString() {
        return `A Point2D with x = ${this.x} and y = ${this.y}`
    }
}

export default Point2D;