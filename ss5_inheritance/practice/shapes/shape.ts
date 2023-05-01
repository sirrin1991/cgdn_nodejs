class Shape {
    private color?: string;
    private filled?: boolean;

    constructor(color: string = "red", filled: boolean = true) {
        this.color = color;
        this.filled = filled;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }

    public setFilled(filled: boolean) {
        this.filled = filled;
    }

    public isFilled() {
        return this.isFilled;
    }

    public toString(): string {
        return `A Shape with color of `
            + this.getColor()
            + " and "
            + (this.isFilled() ? "filled" : "not filled");
    }
}
export default Shape;