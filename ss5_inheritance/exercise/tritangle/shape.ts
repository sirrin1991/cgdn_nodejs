class Shape{
    private name: string;
    private color: string;
    constructor(name:string,color:string) {
        this.name = name;
        this.color = color;
    }
    setName(name:string){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setColor(color:string){
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    toString(){
        return `A Shape with name is ${this.name} and color is ${this.color}`
    }
}

export default  Shape;